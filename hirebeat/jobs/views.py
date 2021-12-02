#from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Jobs, ApplyCandidates, JobQuestion
from questions.models import Positions, InterviewQuestions, InterviewResumes, InvitedCandidates, SubReviewers, ExternalReviewers, ReviewerEvaluation
from accounts.models import Profile, EmployerProfileDetail, ProfileDetail, CandidatesInterview
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.template.loader import get_template
from django.core.mail import EmailMessage
import xml.etree.ElementTree as ET
from datetime import datetime
import base64
import time
import boto3
import io
import os
import requests
import MergeATSClient
from MergeATSClient.api import candidates_api, jobs_api, job_interview_stages_api, applications_api, attachments_api, users_api, available_actions_api, job_interview_stages_api
from MergeATSClient.model.attachment import Attachment
from MergeATSClient.model.attachment_request import AttachmentRequest
from MergeATSClient.model.available_actions import AvailableActions
from MergeATSClient.model.job_interview_stage import JobInterviewStage
from pprint import pprint
import requests
import json
import math
#from django.forms.models import model_to_dict


@api_view(['POST'])
def add_new_job(request):
    job_title = request.data['jobTitle']
    job_id = request.data['jobId']
    job_description = request.data['jobDescription']
    job_location = request.data['jobLocation']
    job_level = request.data['jobLevel']
    job_type = request.data['jobType']
    loc_req = request.data['loc_req']
    pho_req = request.data['pho_req']
    lin_req = request.data['lin_req']
    eeo_req = request.data['eeo_req']
    eeo_ques_req = request.data['eeo_ques_req']
    job_post = request.data['job_post']
    skills = request.data['skills']
    questions = request.data["questions"]
    is_closed = request.data["is_closed"]
    user = User.objects.get(pk=request.data["userId"])
    company_name = ""
    company_overview = ""
    company_logo = ""

    # update user profile, increase the position_count for current user
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count += 1
    profile.save()

    # create position
    position = Positions.objects.create(
        user=user, job_title=job_title, job_id=job_id, job_description=job_description)
    # get company name and overview
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user=user)
        company_name = employer_profile.name
        company_overview = employer_profile.summary
        company_logo = employer_profile.logo_url
    except ObjectDoesNotExist:
        company_overview = ""
        company_name = ""
        company_logo = ""

    # create job
    job = Jobs.objects.create(user=user, positions=position, job_title=job_title, job_id=job_id, job_description=job_description,
                              job_location=job_location, job_level=job_level, job_type=job_type, company_overview=company_overview, company_name=company_name, company_logo=company_logo,
                              loc_req=loc_req, pho_req=pho_req, lin_req=lin_req, job_post=job_post, eeo_req=eeo_req, eeo_ques_req=eeo_ques_req, skills=skills, is_closed=is_closed)
    # save job link in Job table
    encode_url_id = str(base64.b64encode(bytes(str(job.id), "utf-8")), "utf-8")
    job_url = "https://app.hirebeat.co/apply-job/"+company_name+"?id="+encode_url_id
    job.job_url = job_url
    job.save()

    # update job_id_in_jobs field
    position.job_id_in_jobs = job.id
    position.save()

    # add job screening questions
    for question in questions:
        answer_type = "Numeric" if question["responseType"] == "Numeric" else "boolean"
        answer = question["numAns"] if question["responseType"] == "Numeric" else question["ans"]
        is_must = True if question["isMustHave"] == "true" else False
        JobQuestion.objects.create(
            jobs=job, question=question["question"], answer_type=answer_type, answer=answer, is_must=is_must)
    # add to zrjobs.xml
    # if job_post:
    #     add_zr_feed_xml(job.id)
    return Response("Create new job successfully", status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_all_jobs(request):
    jobs = []
    user_id = request.query_params.get("userId")
    page = 1
    try:
        page = int(request.query_params.get("page"))
    except:
        pass
    subpage = request.GET.get("subpage", "")
    has_is_active = True if (request.GET.get("status", "") != "") else False
    has_resume_sort = True if (request.GET.get("sort", "") != "") else False

    data = {}
    # check user type with Profile table
    profile = Profile.objects.get(user_id=user_id)
    # hiring manager or reviewer roles
    if profile.is_subreviwer or profile.is_external_reviewer:
        user = User.objects.get(pk=user_id)
        subreviewers = SubReviewers.objects.filter(r_email=user.email)
        for s in range(len(subreviewers)):
            current_job_id1 = subreviewers[s].jobs_id
            jobs.append(Jobs.objects.filter(id=current_job_id1).values()[0])
        ext_reviewers = ExternalReviewers.objects.filter(r_email=user.email)
        for e in range(len(ext_reviewers)):
            current_job_id2 = ext_reviewers[e].jobs_id
            jobs.append(Jobs.objects.filter(id=current_job_id2).values()[0])
    # employer role
    else:
        jobs = list(Jobs.objects.filter(
            user_id=user_id).order_by('-id').values())
    for i in range(len(jobs)):
        job_id = jobs[i]["id"]
        positions_id = jobs[i]["positions_id"]
        # get reviewer type for each job in jobs
        reviewer_type = ""
        if profile.is_subreviwer or profile.is_external_reviewer:
            user = User.objects.get(pk=user_id)
            if (ExternalReviewers.objects.filter(r_email=user.email, jobs_id=job_id).exists()):
                reviewer_type = "extr"
            elif (SubReviewers.objects.filter(r_email=user.email, jobs_id=job_id).exists()):
                reviewer_type = "subr"
        # get each position applicants, pagination here
        applicants = []
        # get all candidates for each job at the specific stage: current_stage=subpage
        if subpage != "":
            # has_is_active is a filter, which is used to screen applicants that got rejected or not
            if has_is_active:
                is_active = True if request.GET.get(
                    "status") == "True" else False
                applicants = ApplyCandidates.objects.filter(
                    jobs_id=job_id, current_stage=subpage, is_active=is_active)
            else:
                applicants = ApplyCandidates.objects.filter(
                    jobs_id=job_id, current_stage=subpage)
        # get all candidates for each job
        else:
            if has_is_active:
                is_active = True if request.GET.get(
                    "status") == "True" else False
                applicants = ApplyCandidates.objects.filter(
                    jobs_id=job_id, is_active=is_active)
            else:
                applicants = ApplyCandidates.objects.filter(jobs_id=job_id)
        applicants = list(applicants.values())
        # sort by score or id
        # note the result_rate is the type of string, make sure to convert it to float
        if has_resume_sort:
            resume_sort = True if (request.GET.get(
                "sort") == "True" or request.GET.get("sort") == "true") else False
            if resume_sort:
                applicants.sort(
                    key=lambda a: (-float(a["result_rate"]), -a["id"]))
            else:
                applicants.sort(key=lambda a: (
                    float(a["result_rate"]), -a["id"]))
        else:
            applicants.sort(key=lambda a: -a["id"])
        # begin pagination, each single page should have at most 15 applicants
        total_records = len(applicants)
        total_page = math.ceil(len(applicants) / 15)
        if total_records > 15:
            begin = (page - 1) * 15
            end = page * 15
            applicants = applicants[begin:end]

        # get each applicant's answers for resume screen questions
        for applicant in applicants:
            applicant["reviewer_review_status"] = False
            applicant["num_vote_yes"] = 0
            applicant["num_votes"] = 0
            user = User.objects.get(pk=user_id)
            reviewerEvaluation = ReviewerEvaluation.objects.filter(
                reviewer_email=user.email, applicant_email=applicant["email"]).exists()
            if reviewerEvaluation:
                applicant["reviewer_review_status"] = True
            # get team vote rate
            if subpage != "":
                applicant["num_vote_yes"] = ReviewerEvaluation.objects.filter(
                    applicant_email=applicant["email"], position_id=positions_id, evaluation=1, current_stage=subpage).count()
                applicant["num_votes"] = ReviewerEvaluation.objects.filter(
                    applicant_email=applicant["email"], position_id=positions_id, current_stage=subpage).count()

        # get statistic data for each job
        un_view = True if ApplyCandidates.objects.filter(
            jobs_id=job_id, is_viewed=False, is_invited=0).count() > 0 else False

        # get interview questions for current job
        questions = list(InterviewQuestions.objects.filter(
            positions_id=positions_id).values())
        # get job screen questions
        screen_questions = list(
            JobQuestion.objects.filter(jobs_id=job_id).values())
        jobs[i]["screen_questions"] = screen_questions
        # get corresponding position information for current job
        position = Positions.objects.filter(id=positions_id).values()[0]
        job_details = {
            "job_details": jobs[i],
            "applicants": applicants,
            "questions": questions,
            "un_view": un_view,
            "position": position,
            "total_records": total_records,
            "total_page": total_page,
            "reviewer_type": reviewer_type,
        }
        data[job_id] = job_details

    return Response({
        "data": data,
    })

# for job edition
@api_view(['POST'])
def update_job(request):
    id = request.data['id']
    job_title = request.data['jobTitle']
    job_id = request.data['jobId']
    job_location = request.data['jobLocation']
    job_level = request.data['jobLevel']
    job_description = request.data['jobDescription']
    job_type = request.data['jobType']
    loc_req = request.data['loc_req']
    pho_req = request.data['pho_req']
    lin_req = request.data['lin_req']
    eeo_req = request.data['eeo_req']
    job_post = request.data['job_post']
    eeo_ques_req = request.data['eeo_ques_req']
    skills = request.data['skills']
    questions = request.data["questions"]
    is_closed = request.data["is_closed"]

    job = Jobs.objects.get(id=id)
    job.job_title = job_title
    job.job_id = job_id
    job.job_location = job_location
    job.job_level = job_level
    job.job_description = job_description
    job.job_type = job_type
    job.loc_req = loc_req
    job.pho_req = pho_req
    job.lin_req = lin_req
    job.eeo_req = eeo_req
    job.eeo_ques_req = eeo_ques_req
    job.job_post = job_post
    job.skills = skills
    job.is_closed = is_closed
    # save update to db
    job.save()

    # delete old screen questions
    JobQuestion.objects.filter(jobs_id=id).delete()
    # add job screening questions
    for question in questions:
        answer_type = "Numeric" if question["responseType"] == "Numeric" else "boolean"
        answer = question["numAns"] if question["responseType"] == "Numeric" else question["ans"]
        is_must = True if question["isMustHave"] == "true" else False
        JobQuestion.objects.create(jobs=job, question=question["question"], answer_type=answer_type, answer=answer,
                                   is_must=is_must)
    # delete or add to zrjobs.xml
    # if job_post:
    #     add_zr_feed_xml(id)
    # else:
    #     delete_zr_feed_xml(id)

    return Response("Update new job successfully", status=status.HTTP_205_RESET_CONTENT)


@api_view(['POST'])
def archive_job(request):
    id = request.data['id']
    is_closed = request.data['isClosed']
    if is_closed:
        user = User.objects.get(pk=request.data["userId"])
        # update user profile
        profile = Profile.objects.get(user_id=user.id)
        profile.position_count -= 1
        profile.save()

    job = Jobs.objects.get(id=id)
    job.is_closed = is_closed
    job.save()
    # archive position
    position_id = job.positions_id
    position = Positions.objects.get(id=position_id)
    position.is_closed = is_closed
    position.save()

    return Response("Archive new job successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['POST'])
def add_new_apply_candidate(request):
    job_id = request.data['job_id']
    firstname = request.data['firstname']
    lastname = request.data['lastname']
    phone = request.data['phone']
    email = request.data['email']
    location = request.data['location']
    resume_url = request.data['resume_url']
    linkedinurl = request.data['linkedinurl']
    gender = request.data['gender']
    race = request.data['race']
    ansObjs = request.data['answers']
    fullname = firstname + " " + lastname
    jobs = Jobs.objects.get(pk=job_id)
    user = User.objects.get(pk=jobs.user_id)
    applied = ApplyCandidates.objects.filter(email=email, jobs=jobs).exists()
    if not applied:
        questions = []
        answers = []
        qualifications = []
        must_haves = []
        current_stage = "Resume Review"
        is_active = True
        for obj in ansObjs:
            if not obj["isQualified"]:
                current_stage = "Unqualified"
                qualifications.append(False)
                is_active = False
            else:
                qualifications.append(True)
            must_haves.append(obj["is_must"])
            questions.append(obj["question"])
            answers.append(str(obj["answer"]))
        applyCandidates = ApplyCandidates.objects.create(jobs=jobs, first_name=firstname, last_name=lastname, phone=phone,
                                                         email=email, location=location, resume_url=resume_url, linkedinurl=linkedinurl,
                                                         gender=gender, race=race, questions=questions, answers=answers, current_stage=current_stage, qualifications=qualifications, must_haves=must_haves, is_active=is_active)
        # add candidate resume url to prifile detail table
        applicant_registered = True if len(
            User.objects.filter(email=email)) == 1 else False
        if applicant_registered:
            applicant = User.objects.get(email=email)
            has_profile = True if len(ProfileDetail.objects.filter(
                user_id=applicant.id)) == 1 else False
            # only insert resume url when user doesn't have a profile detail record
            if has_profile is False:
                resume_name = firstname + "_" + lastname + ".pdf"
                ProfileDetail.objects.create(
                    user_id=applicant.id,
                    resume_name=resume_name,
                    resume_url=resume_url,
                    profile_rate=50,
                )
        # print("===New Candidate Notify Email Called===")
        subject = 'New Applicant: ' + jobs.job_title + " from " + fullname
        message = get_template("jobs/new_candidate_notification_email.html")
        context = {
            'fullname': fullname,
            'title': jobs.job_title,
        }
        from_email = 'HireBeat Team <tech@hirebeat.co>'
        to_list = [user.email]
        content = message.render(context)
        email = EmailMessage(
            subject,
            content,
            from_email,
            to_list,
        )
        email.content_subtype = "html"
        email.send()

    return Response("Add new apply candidate successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def get_current_jobs(request, companyName):
    emails = []
    job_id = int(base64.b64decode(request.query_params.get("jobid")))
    jobs = Jobs.objects.get(pk=job_id)
    questions = list(JobQuestion.objects.filter(jobs_id=job_id).values())
    employerp = EmployerProfileDetail.objects.get(user_id=jobs.user_id)
    applyCandidates = ApplyCandidates.objects.filter(jobs=jobs)
    for i in range(len(applyCandidates)):
        emails.append(applyCandidates[i].email)
    data = {
        "job_title": jobs.job_title,
        "job_level": jobs.job_level,
        "job_id": jobs.job_id,
        "job_location": jobs.job_location,
        "create_date": jobs.create_date,
        "job_description": jobs.job_description,
        "job_type": jobs.job_type,
        "company_name": companyName,
        "company_overview": employerp.summary,
        "job_url": jobs.job_url,
        "id": jobs.id,
        "emails": emails,
        "company_logo": jobs.company_logo,
        "is_closed": jobs.is_closed,
        "pho_req": jobs.pho_req,
        "loc_req":  jobs.loc_req,
        "job_post": jobs.job_post,
        "lin_req": jobs.lin_req,
        "eeo_req": jobs.eeo_req,
        "eeo_ques_req": jobs.eeo_ques_req,
        "company_website": employerp.website,
        "questions": questions,
    }

    return Response({
        "data": data,
    })


@api_view(['POST'])
def add_interview_question(request):
    response_time = request.data['resTime']
    prepare_time = request.data['preTime']
    camera_on = request.data['cameraOn']
    questions = request.data['questions']
    position_id = request.data['positionId']
    for i in range(len(questions)):
        InterviewQuestions.objects.create(
            description=questions[i], positions_id=position_id)
    # add time and camera configuration
    position = Positions.objects.get(id=position_id)
    position.questionTime = response_time
    position.prepare_time = prepare_time
    position.camera_on = camera_on
    position.save()
    return Response("Add new questions successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def update_invite_status(request):
    candidates = request.data['candidates']
    nextStage = request.data['nextStage']
    positionId = request.data["positionId"]
    is_reject = request.data["is_reject"]
    for i in range(len(candidates)):
        candidate = ApplyCandidates.objects.get(id=candidates[i])
        if is_reject:
            is_active = not candidate.is_active
            # update ApplyCandidates model
            candidate.is_active = is_active
            candidate.save()
            # update InvitedCandidates model
            if InvitedCandidates.objects.filter(email=candidate.email, positions_id=positionId).exists():
                InvitedCandidates.objects.filter(
                    email=candidate.email, positions_id=positionId).update(is_active=is_active)
        else:
            try:
                invitedCan = InvitedCandidates.objects.get(
                    email=candidate.email, positions_id=positionId)
                invitedCan.current_stage = nextStage
                invitedCan.save()
            except ObjectDoesNotExist:
                pass
            # save update to db
            candidate.current_stage = nextStage
            candidate.save()
    return Response("Archive new job successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['POST'])
def delete_job(request):
    id = request.data['id']
    user = User.objects.get(pk=request.data["userId"])
    # update user profile
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count -= 1
    profile.save()
    # delete job and position
    job = Jobs.objects.get(id=id)
    position_id = job.positions_id
    Positions.objects.filter(id=position_id).delete()
    job.delete()
    return Response("Delete current job successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def get_jobid_list(request):
    data = []
    user_id = request.query_params.get("userId")
    jobs = Jobs.objects.filter(user_id=user_id)
    for i in range(len(jobs)):
        data.append(jobs[i].job_id)
    return Response({
        "data": data,
    })


@api_view(['POST'])
def update_viewed_status(request):
    apply_ids = request.data['applyIds']
    is_viewed = request.data['isViewed']

    for i in range(len(apply_ids)):
        if ApplyCandidates.objects.filter(id=apply_ids[i]).exists():
            candidate = ApplyCandidates.objects.get(id=apply_ids[i])
            candidate.is_viewed = is_viewed
            candidate.save()
    return Response("Candidate is viewed successfully", status=status.HTTP_202_ACCEPTED)


def create_zr_job_feed(job_detail):
    # Required Metadata Fields
    job = ET.Element('job')
    reference_number = ET.SubElement(job, 'referencenumber')
    title = ET.SubElement(job, 'title')
    description = ET.SubElement(job, 'description')
    country = ET.SubElement(job, 'country')
    city = ET.SubElement(job, 'city')
    state = ET.SubElement(job, 'state')
    postalcode = ET.SubElement(job, 'postalcode')
    company = ET.SubElement(job, 'company')
    date = ET.SubElement(job, 'date')
    # Candidate Delivery Fields
    url = ET.SubElement(job, 'url')
    job_type = ET.SubElement(job, 'jobtype')
    experience = ET.SubElement(job, 'experience')

    # populate content for each tag
    # job.set('id', str(job_detail['id']))
    reference_number.text = str(job_detail['id'])
    title.text = job_detail['job_title']
    description.text = job_detail['job_description']
    location = job_detail['job_location'].split(',')
    country.text = 'US'
    city.text = location[0]
    state.text = location[1]
    postalcode.text = location[2]
    company.text = job_detail['company_name']
    date.text = job_detail['create_date'].strftime("%c")
    url.text = job_detail['job_url']
    job_type.text = job_detail['job_type'].lower().replace("-", "_")
    job_level = job_detail['job_level'].split(" ")
    experience.text = job_level[0].lower()
    return job


@api_view(['GET'])
def get_zr_xml(request):
    # initialize xml structure
    source = ET.Element('source')
    # Optional Metadata Fields
    last_build_date = ET.SubElement(source, 'lastBuildDate')
    publisher_url = ET.SubElement(source, 'publisherurl')
    publisher = ET.SubElement(source, 'publisher')
    # populate data to Optional Metadata Fields
    last_build_date.text = datetime.now().strftime("%c")
    publisher_url.text = 'https://app.hirebeat.co/'
    publisher.text = 'HibreBeat'
    # produce jobs dynamic here
    job_details = Jobs.objects.filter(job_post=1).values()
    for i in range(len(job_details)):
        # job description has min length of 25 and job is not closed
        if len(job_details[i]['job_description']) > 25 and job_details[i]['is_closed'] == 0:
            job = create_zr_job_feed(job_details[i])
            source.append(job)
    # save xml file
    with open("zrjobs.xml", "wb") as f:
        f.write(ET.tostring(source, encoding='utf8', method='xml'))
    return Response("zrjobs.xml is regenerated successfully", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_zr_premium_xml(request):
    # initialize xml structure
    source = ET.Element('source')
    # Optional Metadata Fields
    last_build_date = ET.SubElement(source, 'lastBuildDate')
    publisher_url = ET.SubElement(source, 'publisherurl')
    publisher = ET.SubElement(source, 'publisher')
    # populate data to Optional Metadata Fields
    last_build_date.text = datetime.now().strftime("%c")
    publisher_url.text = 'https://app.hirebeat.co/'
    publisher.text = 'HibreBeat'
    # produce jobs dynamic here
    job_details = Jobs.objects.filter(job_post=2).values()
    for i in range(len(job_details)):
        # job description has min length of 25 and job is not closed
        if len(job_details[i]['job_description']) > 25 and job_details[i]['is_closed'] == 0:
            job = create_zr_job_feed(job_details[i])
            source.append(job)
    # save xml file
    with open("zrpremiumjobs.xml", "wb") as f:
        f.write(ET.tostring(source, encoding='utf8', method='xml'))
    return Response("zrpremiumjobs.xml is regenerated successfully", status=status.HTTP_200_OK)


def delete_zr_feed_xml(job_id):
    job_id = str(job_id)
    tree = ET.parse('zrjobs.xml')
    root = tree.getroot()
    for job in root.findall('job'):
        # job[0] is reference number tag
        if job[0].text == job_id:
            root.remove(job)
    tree.write('zrjobs.xml')


def add_zr_feed_xml(job_id):
    tree = ET.parse('zrjobs.xml')
    root = tree.getroot()
    # avoid duplicate job feed
    for job in root.findall('job'):
        # job[0] is reference number tag
        if job[0].text == str(job_id):
            # do nothing
            return

    # create a new tag
    job_detail = Jobs.objects.filter(id=job_id).values()[0]
    job = create_zr_job_feed(job_detail)
    # append to existing xml file
    root.append(job)
    tree.write('zrjobs.xml')

# upload a pdf file to s3 buckets with the input of base64 encoded string
def upload_cv_to_s3(encoded_cv, cv_name):
    # decode resume and convert to readable pdf file using io.BytesIO
    resume = io.BytesIO(base64.b64decode(encoded_cv))
    # content = resume.decode("utf-8")
    file_name = cv_name + str(int(time.time())) + ".pdf"
    # get bucket name and connect to s3
    bucket = os.getenv("CV_Interview_Bucket")
    client = boto3.client('s3', aws_access_key_id=os.getenv("AWSAccessKeyId"),
                          aws_secret_access_key=os.getenv("AWSSecretKey"))
    # upload txt file to s3
    client.upload_fileobj(
        resume,
        bucket,
        file_name,
        ExtraArgs={'ACL': 'public-read', 'ContentDisposition': 'inline',
                   'ContentType': 'application/pdf'}
    )
    resume_url = "https://hirebeat-interview-resume.s3.amazonaws.com/" + file_name
    return resume_url

# add new candidate to hiring pipeline through uploading resumes
@api_view(['POST'])
def add_new_apply_candidate_by_cv(request):
    job_id = request.data['job_id']
    first_name = request.data['first_name']
    last_name = request.data['last_name']
    phone = request.data['phone']
    email = request.data['email']
    location = request.data['location']
    resume = request.data['resume']
    cv_name = email.split("@")[0]
    resume_url = upload_cv_to_s3(resume, cv_name)
    linkedinurl = request.data['linkedinurl']
    fullname = first_name + " " + last_name
    jobs = Jobs.objects.get(pk=job_id)
    user = User.objects.get(pk=jobs.user_id)
    applied = ApplyCandidates.objects.filter(email=email, jobs=jobs).exists()
    if not applied:
        ApplyCandidates.objects.create(jobs=jobs, first_name=first_name, last_name=last_name, phone=phone, email=email,
                                       location=location, resume_url=resume_url, linkedinurl=linkedinurl)
    else:
        return Response("Duplicate applicants.", status=status.HTTP_202_ACCEPTED)
    # send email notification
    subject = 'New Applicant: ' + jobs.job_title + " from " + fullname
    message = get_template("jobs/new_candidate_notification_email.html")
    context = {
        'fullname': fullname,
        'title': jobs.job_title,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [user.email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()

    return Response("Add new apply candidates successfully", status=status.HTTP_202_ACCEPTED)

# the webhook api designed for ZipRecruiter to post candidates back to HireBeat platform
@api_view(['POST'])
def add_new_apply_candidate_from_zr(request):
    job_id = request.data['job_id']
    firstname = request.data['first_name']
    lastname = request.data['last_name']
    phone = request.data['phone']
    email = request.data['email']
    # location = request.data['location']
    resume = request.data['resume']
    cv_name = email.split("@")[0]
    resume_url = upload_cv_to_s3(resume, cv_name)
    # linkedinurl = request.data['linkedinurl']
    fullname = firstname + " " + lastname
    jobs = Jobs.objects.get(pk=job_id)
    user = User.objects.get(pk=jobs.user_id)
    applied = ApplyCandidates.objects.filter(email=email, jobs=jobs).exists()
    if not applied:
        ApplyCandidates.objects.create(jobs=jobs, first_name=firstname, last_name=lastname, phone=phone, email=email,
                                       location="", resume_url=resume_url, linkedinurl="", apply_source="ZipRecruiter")
    else:
        return Response("Duplicate applicants.", status=status.HTTP_202_ACCEPTED)
    # send email notification
    subject = 'New Applicant: ' + jobs.job_title + " from " + fullname
    message = get_template("jobs/new_candidate_notification_email.html")
    context = {
        'fullname': fullname,
        'title': jobs.job_title,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [user.email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()

    return Response("Add new apply candidate from ZipRecruiter successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def getCompanyBrandingInfo(request, companyName):
    data = []
    company_logo = ""
    summary = ""
    video_url = ""
    website = ""
    location = ""
    company_size = ""
    company_type = ""
    linkedin = ""
    twitter = ""
    facebook = ""
    contact_email = ""
    data = list(Jobs.objects.filter(is_closed=0,
                company_name=companyName).values())
    employerProfileDetail = EmployerProfileDetail.objects.filter(
        name=companyName)
    for i in range(len(employerProfileDetail)):
        user = User.objects.get(pk=employerProfileDetail[i].user_id)
        profile = Profile.objects.get(user=user)
        if (not profile.is_subreviwer) and (not profile.is_external_reviewer):
            company_logo = employerProfileDetail[i].logo_url
            summary = employerProfileDetail[i].summary
            video_url = employerProfileDetail[i].video_url
            website = employerProfileDetail[i].website
            location = employerProfileDetail[i].location
            company_size = employerProfileDetail[i].company_size
            company_type = employerProfileDetail[i].company_type
            linkedin = employerProfileDetail[i].linkedin
            twitter = employerProfileDetail[i].twitter
            facebook = employerProfileDetail[i].facebook
            contact_email = employerProfileDetail[i].email
    return Response({
        "data": data,
        "company_logo": company_logo,
        "summary": summary,
        "video_url": video_url,
        "website": website,
        "location": location,
        "company_size": company_size,
        "company_type": company_type,
        "linkedin": linkedin,
        "twitter": twitter,
        "facebook": facebook,
        "contact_email": contact_email,
    })


@api_view(['GET'])
def get_resume_from_job_application(request):
    position_id = request.query_params.get("positionId")
    email = request.query_params.get("email")
    data = {}
    try:
        job_obj = Jobs.objects.get(positions_id=position_id)
        candidate_application = ApplyCandidates.objects.filter(
            jobs_id=job_obj.id, email=email)[0]
        data["resume_url"] = candidate_application.resume_url
    except ObjectDoesNotExist:
        data["resume_url"] = ""
    return Response({
        "data": data,
    })


@api_view(['GET'])
def create_merge_link_token(request):
    user_id = request.query_params.get("userId")
    user = User.objects.get(pk=user_id)
    employer_profile = EmployerProfileDetail.objects.get(user=user)
    api_key = os.getenv("MERGE_API_KEY")
    body = {
        "end_user_origin_id": user_id+str(datetime.now()),  # unique entity ID
        # your user's organization name
        "end_user_organization_name": employer_profile.name,
        "end_user_email_address": user.email,  # your user's email address
        "categories": ["ats"],  # choose your category
    }

    headers = {"Authorization": f"Bearer {api_key}"}

    link_token_url = "https://api.merge.dev/api/integrations/create-link-token"
    link_token_result = requests.post(
        link_token_url, data=body, headers=headers)
    link_token = link_token_result.json().get("link_token")

    return Response({
        "link_token": link_token,
    })


@api_view(['POST'])
def retrive_merge_account_token(request):
    public_token = request.data['public_token']
    user_id = request.data['user_id']
    api_key = os.getenv("MERGE_API_KEY")
    headers = {"Authorization": f"Bearer {api_key}"}
    account_token_url = "https://api.merge.dev/api/integrations/account-token/{}".\
        format(public_token)
    account_token_result = requests.get(account_token_url, headers=headers)
    account_token = account_token_result.json().get("account_token")
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    profile.merge_public_token = account_token
    profile.save()

    return Response("Retrive merge token success", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def send_merge_api_request(request):
    user_id = request.data['user_id']
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    configuration = MergeATSClient.Configuration(
        host="https://api.merge.dev/api/ats/v1"
    )

    # Swap YOUR_API_KEY below with your production key from:
    # https://app.merge.dev/configuration/keys
    configuration.api_key['tokenAuth'] = os.getenv("MERGE_API_KEY")
    configuration.api_key_prefix['tokenAuth'] = 'Bearer'

    api_client = MergeATSClient.ApiClient(configuration)

    jobs_api_instance = jobs_api.JobsApi(api_client)

    interview_stages_api_instance = job_interview_stages_api.JobInterviewStagesApi(
        api_client)

    ava_api_instance = available_actions_api.AvailableActionsApi(api_client)

    # The string 'TEST_ACCOUNT_TOKEN' below works to test your connection
    # to Merge and will return dummy data in the response.
    # In production, replace this with account_token from user.
    #x_account_token = "TEST_ACCOUNT_TOKEN"
    x_account_token = profile.merge_public_token

    try:
        jobs_api_response = jobs_api_instance.jobs_list(x_account_token)
        interview_stages_api_response = interview_stages_api_instance.job_interview_stages_list(
            x_account_token)
        ava_api_response = ava_api_instance.available_actions_retrieve(
            x_account_token)
    except MergeATSClient.ApiException as e:
        print('Exception: %s' % e)

    return Response({
        "jobs_api_response": jobs_api_response['results'],
        "interview_stages_api_response": interview_stages_api_response['results'],
        "integration_type": ava_api_response['integration']['name'],
    })


@api_view(['POST'])
def check_free_account_active_jobs(request):
    id = request.data['id']
    limit = request.data['limit']
    jobs = Jobs.objects.filter(user_id=id).order_by('create_date')
    for i in range(len(jobs)-limit):
        jobs[i].is_closed = True
        jobs[i].save()

    positions = Positions.objects.filter(user_id=id).order_by('invite_date')
    for i in range(len(positions)-limit):
        positions[i].is_closed = True
        positions[i].save()

    return Response("Achive free account success", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def add_cand_from_merge(request):
    position = {}
    job = {}
    candidatesInterview = {}
    candidates_api_response = {}
    jobs_api_response = {}
    attachments_api_response = {}
    job_name = ""
    emailAddress = ""
    location = ""
    phone = ""
    resume_url = ""
    attachments_id = []
    merge_job_id = request.data['merge_job_id']
    merge_stage_id = request.data['merge_stage_id']
    merge_job_title = request.data['merge_job_title']
    merge_stage_title = request.data['merge_stage_title']
    greenhouse_api_key = request.data['greenhouse_api_key']
    company_name = ""
    company_overview = ""
    company_logo = ""

    configuration = MergeATSClient.Configuration(
        host="https://api.merge.dev/api/ats/v1"
    )

    # Swap YOUR_API_KEY below with your production key from:
    # https://app.merge.dev/configuration/keys
    configuration.api_key['tokenAuth'] = os.getenv("MERGE_API_KEY")
    configuration.api_key_prefix['tokenAuth'] = 'Bearer'
    api_client = MergeATSClient.ApiClient(configuration)
    user = User.objects.get(pk=request.data["user_id"])
    profile = Profile.objects.get(user=user)
    if greenhouse_api_key != "":
        profile.ats_api_token = greenhouse_api_key
        profile.save()
    jobs_api_instance = jobs_api.JobsApi(api_client)
    applications_api_instance = applications_api.ApplicationsApi(api_client)
    candidates_api_instance = candidates_api.CandidatesApi(api_client)
    attachments_api_instance = attachments_api.AttachmentsApi(api_client)
    user_api_instance = users_api.UsersApi(api_client)
    stage_api_instance = job_interview_stages_api.JobInterviewStagesApi(api_client)
    #x_account_token = "TEST_ACCOUNT_TOKEN"
    x_account_token = profile.merge_public_token
    jobs_api_response = {}
    applications_api_response = {}
    stage_api_response = {}
    try:
        jobs_api_response = jobs_api_instance.jobs_retrieve(
            x_account_token, merge_job_id)
        applications_api_response = applications_api_instance.applications_list(
            x_account_token, current_stage_id=merge_stage_id, job_id=merge_job_id)
        stage_api_response = stage_api_instance.job_interview_stages_retrieve(x_account_token, merge_stage_id)
    except MergeATSClient.ApiException as e:
        print('Exception: %s' % e)

    job_name = "External: " + \
        jobs_api_response['name']+" ("+merge_stage_title+")"
    positions = Positions.objects.filter(user=user, job_title=job_name)
    jobs = Jobs.objects.filter(user=user, job_title=job_name)
    if len(positions) > 0:
        position = positions[0]
    if len(jobs) > 0:
        job = jobs[0]
    else:
        if len(applications_api_response['results']) > 0:
            # create postion
            position = Positions.objects.create(user=user, job_title="External: "+merge_job_title +
                                                " ("+merge_stage_title+")", job_description=jobs_api_response['description'], job_id="")
            # get company name and overview
            try:
                # update personal information
                employer_profile = EmployerProfileDetail.objects.get(user=user)
                company_name = employer_profile.name
                company_overview = employer_profile.summary
                company_logo = employer_profile.logo_url
            except ObjectDoesNotExist:
                company_overview = ""
                company_name = ""
                company_logo = ""

            if greenhouse_api_key != "":
                job = Jobs.objects.create(user=user, positions=position, job_title="External: "+merge_job_title+" ("+merge_stage_title+")", job_id="", job_description=jobs_api_response['description'],
                                          company_overview=company_overview, company_name=company_name, company_logo=company_logo,
                                          loc_req="1", pho_req="1", lin_req="1", job_post=0, eeo_req="1", eeo_ques_req="1", gh_current_stage_id=stage_api_response['remote_id'], gh_job_id=jobs_api_response['remote_id'], is_closed=2)
            else:
                job = Jobs.objects.create(user=user, positions=position, job_title="External: "+merge_job_title+" ("+merge_stage_title+")", job_id="", job_description=jobs_api_response['description'],
                                          company_overview=company_overview, company_name=company_name, company_logo=company_logo,
                                          loc_req="1", pho_req="1", lin_req="1", job_post=0, eeo_req="1", eeo_ques_req="1", is_closed=2)
            # save job link
            encode_url_id = str(base64.b64encode(bytes(str(job.id), "utf-8")), "utf-8")
            job_url = "https://app.hirebeat.co/apply-job/"+company_name+"?id="+encode_url_id
            job.job_url = job_url
            job.save()
            # Create jobs apply candidates
    # create applicants
    for a in range(len(applications_api_response['results'])):
        candidate_id = applications_api_response['results'][a]['candidate']
        gh_applications_id = applications_api_response['results'][a]['remote_id']
        emailAddress = ""
        location = ""
        phone = ""
        resume_url = ""
        try:
            candidates_api_response = candidates_api_instance.candidates_retrieve(
                x_account_token, candidate_id)
        except MergeATSClient.ApiException as e:
            print('Exception: %s' % e)
        if candidates_api_response['email_addresses'] != None:
            if len(candidates_api_response['email_addresses']) > 0:
                emailAddress = candidates_api_response['email_addresses'][0]['value']
        if candidates_api_response['locations'] != None:
            if len(candidates_api_response['locations']) > 0:
                location = candidates_api_response['locations'][0].split('\n')[
                    1]
        if candidates_api_response['phone_numbers'] != None:
            if len(candidates_api_response['phone_numbers']) > 0:
                phone = candidates_api_response['phone_numbers'][0]['value']
        # create resume for candidate
        attachments_id = candidates_api_response['attachments']
        if len(attachments_id) > 0:
            for a in range(len(attachments_id)):
                attachments_api_response = attachments_api_instance.attachments_retrieve(
                    x_account_token, attachments_id[a])
                if attachments_api_response['attachment_type'] == 'RESUME':
                    resume_url = attachments_api_response['file_url']
        
        if len(emailAddress) > 0:
            candidatesInterview = CandidatesInterview.objects.filter(
                email=emailAddress, positions=position)
            if len(candidatesInterview) <= 0:
                remote_user_id = ""
                remote_user_remote_id = ""
                CandidatesInterview.objects.create(
                    email=emailAddress, positions=position)
                if greenhouse_api_key != "":
                    InvitedCandidates.objects.create(positions=position, email=emailAddress, name=candidates_api_response[
                        'first_name']+" "+candidates_api_response['last_name'], location=location, phone=phone, resume_url=resume_url, current_stage="Video Interview", gh_applications_id=gh_applications_id)
                else:
                    InvitedCandidates.objects.create(positions=position, email=emailAddress, name=candidates_api_response[
                        'first_name']+" "+candidates_api_response['last_name'], location=location, phone=phone, resume_url=resume_url)
                ApplyCandidates.objects.create(jobs=job, first_name=candidates_api_response['first_name'], last_name=candidates_api_response['last_name'], phone=phone,
                                               email=emailAddress, location=location, current_stage="Video Interview", gender="N/A", race="N/A", resume_url=resume_url)
                # try:
                #     user_api_response = user_api_instance.users_list(x_account_token)
                #     for u in range(len(user_api_response['results'])):
                #         if user_api_response['results'][u]['access_role'] ==  'ADMIN':
                #             remote_user_id = user_api_response['results'][u]["id"]
                #             remote_user_remote_id = user_api_response['results'][u]['remote_id']
                #             print(remote_user_id)
                # except MergeATSClient.ApiException as e:
                #     print('Exception: %s' % e)
                # attachment_request = AttachmentRequest(
                #     remote_id=remote_user_remote_id,
                #     file_name="Candidate Evaluation",
                #     file_url="https://hirebeat-test-video-bucket.s3.amazonaws.com/Evaluations.pdf",
                #     candidate=candidate_id,
                # )
                # try:
                #      attachments_api_instance.attachments_create(x_account_token, remote_user_id, attachment_request=attachment_request)
                # except MergeATSClient.ApiException as e:
                #     print("Exception when calling ApplicationsApi->applications_create: %s\n" % e)
    return Response("Create candidates from merge success", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def check_interview_candidates_num(request):
    intCanNumBo = False
    curJobKey = request.data['curJobKey']
    jobs = Jobs.objects.get(pk=curJobKey)
    positions = Positions.objects.get(pk=jobs.positions_id)
    invitedCandidates = InvitedCandidates.objects.filter(positions=positions)
    if len(invitedCandidates) > 0:
        intCanNumBo = True
    return Response({
        "intCanNumBo": intCanNumBo
    })


@api_view(['POST'])
def get_pipeline_analytics(request):
    analytics = {}
    job_id = request.data['job_id']
    job = Jobs.objects.get(pk=job_id)
    applyc = ApplyCandidates.objects.filter(jobs=job)
    all_can_num = len(applyc)
    all_can_act_num = len(
        ApplyCandidates.objects.filter(jobs=job, is_active=True))
    all_can_rej_num = len(
        ApplyCandidates.objects.filter(jobs=job, is_active=False))
    resume_num = len(ApplyCandidates.objects.filter(
        jobs=job, current_stage="Resume Review"))
    resume_num_act_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=True, current_stage="Resume Review"))
    resume_num_rej_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=False, current_stage="Resume Review"))
    video_num = len(ApplyCandidates.objects.filter(
        jobs=job, current_stage="Video Interview"))
    video_num_act_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=True, current_stage="Video Interview"))
    video_num_rej_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=False, current_stage="Video Interview"))
    live_num = len(ApplyCandidates.objects.filter(
        jobs=job, current_stage="Live Interview"))
    live_num_act_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=True, current_stage="Live Interview"))
    live_num_rej_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=False, current_stage="Live Interview"))
    short_num = len(ApplyCandidates.objects.filter(
        jobs=job, current_stage="Short List"))
    short_num_act_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=True, current_stage="Short List"))
    short_num_rej_num = len(ApplyCandidates.objects.filter(
        jobs=job, is_active=False, current_stage="Short List"))
    analytics = {
        "all_can_num": all_can_num,
        "resume_num": resume_num,
        "video_num": video_num,
        "live_num": live_num,
        "short_num": short_num,
        "all_can_act_num": all_can_act_num,
        "all_can_rej_num": all_can_rej_num,
        "resume_num_act_num": resume_num_act_num,
        "resume_num_rej_num": resume_num_rej_num,
        "video_num_act_num": video_num_act_num,
        "video_num_rej_num": video_num_rej_num,
        "live_num_act_num": live_num_act_num,
        "live_num_rej_num": live_num_rej_num,
        "short_num_act_num": short_num_act_num,
        "short_num_rej_num": short_num_rej_num,
    }

    return Response({
        "analytics": analytics
    })


@api_view(['POST'])
def check_id_master_active(request):
    master_is_active = True
    subreviewers = []
    ext_reviewers = []
    user_id = request.data['user_id']
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    if profile.is_subreviwer or profile.is_external_reviewer:
        subreviewers = SubReviewers.objects.filter(r_email=user.email)
        if len(subreviewers) > 0:
            job = Jobs.objects.get(pk=subreviewers[0].jobs_id)
            master_user = User.objects.get(pk=job.user.id)
            master_profile = Profile.objects.get(user=master_user)
            if master_profile.membership != "Premium":
                master_is_active = False
        ext_reviewers = ExternalReviewers.objects.filter(r_email=user.email)
        if len(ext_reviewers) > 0:
            job = Jobs.objects.get(pk=ext_reviewers[0].jobs_id)
            master_user = User.objects.get(pk=job.user.id)
            master_profile = Profile.objects.get(user=master_user)
            if master_profile.membership != "Premium":
                master_is_active = False

    return Response({
        "master_is_active": master_is_active
    })


@api_view(['POST'])
def check_subreviewer_currentstage(request):
    current_stage = []
    job_id = request.data['job_id']
    email = request.data['email']
    subreviewers = SubReviewers.objects.filter(r_email=email, jobs_id=job_id)
    if len(subreviewers) > 0:
        for s in range(len(subreviewers)):
            current_stage.append(subreviewers[s].current_stage)

    return Response({
        "current_stage": current_stage
    })


@api_view(['GET'])
def greenhouse_api_test(request):
    # url = "https://harvest.greenhouse.io/v1/applications/6451411004/move"
    # data = {"from_stage_id": '4306101004', "to_stage_id": '4306103004'}
    # headers = {'Content-type': 'application/json', 'Accept': 'text/plain', 'On-Behalf-Of': '4010069004'}
    # res = requests.post(url, data=json.dumps(data), headers=headers, auth=('6b64f9aca07ae1f18ee0a63276358594-4', ''))
    # print(res.json())

    # url = "https://harvest.greenhouse.io/v1/applications/6451492004/reject"
    # data = {"notes": "123123123123"}
    # headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    # res = requests.post(url, data=json.dumps(data), headers=headers, auth=('6b64f9aca07ae1f18ee0a63276358594-4', ''))
    # print(res.json())

    # url = "https://harvest.greenhouse.io/v1/users"
    # headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    # res = requests.get(url, headers=headers, auth=('6b64f9aca07ae1f18ee0a63276358594-4', ''))
    # print(res.json())

    return Response("POST Greenhouse requst success", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def greenhouse_update_invite_status(request):
    remote_user_id = ""
    positionId = request.data["positionId"]
    candidates = request.data['candidates']
    is_reject = request.data["is_reject"]
    rejectNotes = request.data["rejectNotes"]
    gh_current_stage_id = request.data["gh_current_stage_id"]
    gh_next_stage_id = request.data["gh_next_stage_id"]
    position = Positions.objects.get(pk=positionId)
    user =  position.user
    profile = Profile.objects.get(user_id=user.id)

    #get userid from greenhouse
    user_url = "https://harvest.greenhouse.io/v1/users"
    user_headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    user_res = requests.get(user_url, headers=user_headers, auth=(profile.ats_api_token, ''))
    for u in range(len(user_res.json())):
        if user_res.json()[u]['site_admin']:
            remote_user_id = user_res.json()[u]['id']

    for i in range(len(candidates)):
        candidate = InvitedCandidates.objects.get(id=candidates[i])
        if is_reject:
            #post reject
            url = "https://harvest.greenhouse.io/v1/applications/"+candidate.gh_applications_id+"/reject"
            data1 = {"notes": rejectNotes}
            headers = {'Content-type': 'application/json', 'Accept': 'text/plain', 'On-Behalf-Of': str(remote_user_id)}
            res = requests.post(url, data=json.dumps(data1), headers=headers, auth=(profile.ats_api_token, ''))
        else:
            url = "https://harvest.greenhouse.io/v1/applications/"+candidate.gh_applications_id+"/move"
            data = {"from_stage_id": str(gh_current_stage_id), "to_stage_id": str(gh_next_stage_id)}
            headers = {'Content-type': 'application/json', 'Accept': 'text/plain', 'On-Behalf-Of': str(remote_user_id)}
            res = requests.post(url, data=json.dumps(data), headers=headers, auth=(profile.ats_api_token, ''))
            print(res.json())
    return Response("Update Greenhouse job successfully", status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def greenhouse_get_interview_stages(request):
    stages = []
    positionId = request.query_params.get("positionId")
    position = Positions.objects.get(pk=positionId)
    user =  position.user
    profile = Profile.objects.get(user_id=user.id)
    job = Jobs.objects.get(positions_id=positionId)

    url = "https://harvest.greenhouse.io/v1/jobs/"+job.gh_job_id+"/stages"
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    res = requests.get(url, headers=headers, auth=(profile.ats_api_token, ''))

    if len(res.json()) > 0:
        for r in range(len(res.json())):
            data = {"id": res.json()[r]['id'], "name": res.json()[r]['name']}
            stages.append(data)

    print(stages)

    return Response({
        "stages": stages
    })

# below function is used for updating candidate information in review window
@api_view(['POST'])
def update_applicant_basic_info(request):
    job_id = request.data["job_id"]
    email = request.data["email"]
    phone = request.data["phone"]
    location = request.data["location"]
    linkedinurl = request.data["linkedinurl"]
    # update ApplyCandidates model
    if ApplyCandidates.objects.filter(jobs_id=job_id, email=email).exists():
        apply_candidate =ApplyCandidates.objects.get(jobs_id=job_id, email=email)
        apply_candidate.phone = phone
        apply_candidate.location = location
        apply_candidate.linkedinurl = linkedinurl
        apply_candidate.save()

    # update InvitedCandidates model
    if Positions.objects.filter(job_id_in_jobs=job_id).exists():
        position = Positions.objects.get(job_id_in_jobs=job_id)
        if InvitedCandidates.objects.filter(positions=position, email=email).exists():
            invited_candidate =InvitedCandidates.objects.get(positions=position, email=email)
            invited_candidate.phone = phone
            invited_candidate.location = location
            invited_candidate.save()

    return Response("Update applicant information successfully", status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def switch_job_closed_status(request):
    job_id = request.data["job_id"]
    next_status = request.data["next_status"]
    job = Jobs.objects.get(pk=job_id)
    job.is_closed = next_status
    job.save()

    return Response("Update job closed status successfully", status=status.HTTP_202_ACCEPTED)