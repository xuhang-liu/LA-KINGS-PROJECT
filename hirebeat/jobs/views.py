from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Jobs, ApplyCandidates
from questions.models import Positions, InterviewQuestions, InterviewResumes
from accounts.models import Profile, EmployerProfileDetail, ProfileDetail
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.template.loader import get_template
from django.core.mail import EmailMessage
import xml.etree.ElementTree as ET
from datetime import datetime
import base64
from boto.s3.key import Key
import time
import boto
import os
import requests
import MergeATSClient
from MergeATSClient.api import candidates_api
from MergeATSClient.model.paginated_candidate_list import PaginatedCandidateList
from pprint import pprint

# configure s3
if not boto.config.get('s3', 'use-sigv4'):
    boto.config.add_section('s3')
    boto.config.set('s3', 'use-sigv4', 'True')
boto.config.set('s3', 'host', 's3.amazonaws.com')

conn = boto.connect_s3(os.getenv("AWSAccessKeyId"), os.getenv("AWSSecretKey"))

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
    job_post = request.data['job_post']
    user = User.objects.get(pk=request.data["userId"])
    company_name = ""
    company_overview = ""
    company_logo = ""
    # update user profile
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count += 1
    profile.save()
    # create position
    position = Positions.objects.create(user=user, job_title=job_title, job_id=job_id, job_description=job_description)
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
            job_location=job_location, job_level=job_level, job_type=job_type, company_overview=company_overview,company_name=company_name, company_logo=company_logo,
            loc_req=loc_req, pho_req=pho_req, lin_req=lin_req, job_post=job_post, eeo_req=eeo_req)
    # save job link
    job_url = "https://hirebeat.co/apply-job?id=" + str(job.id)
    job.job_url = job_url
    job.save()
    # add to zrjobs.xml
    # if job_post:
    #     add_zr_feed_xml(job.id)
    return Response("Create new job successfully", status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_all_jobs(request):
    data = {}
    user_id = request.query_params.get("userId")
    jobs = list(Jobs.objects.filter(user_id=user_id).values())
    for i in range(len(jobs)):
        job_id = jobs[i]["id"]
        positions_id = jobs[i]["positions_id"]
        # get each position applicants
        applicants = list(ApplyCandidates.objects.filter(jobs_id=job_id).values())
        un_view = True if ApplyCandidates.objects.filter(jobs_id=job_id, is_viewed=False, is_invited=0).count() > 0 else False
        all_invited = True if ApplyCandidates.objects.filter(jobs_id=job_id, is_invited=1).count() == len(applicants) else False
        questions = list(InterviewQuestions.objects.filter(positions_id=positions_id).values())
        position = Positions.objects.filter(id=positions_id).values()[0]
        job_details = {
            "job_details": jobs[i],
            "applicants": applicants,
            "questions": questions,
            "un_view": un_view,
            "all_invited": all_invited,
            "position": position,
        }
        data[job_id] = job_details

    return Response({
        "data": data,
    })

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
    job.job_post = job_post
    # save update to db
    job.save()

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
    fullname = firstname + " " + lastname
    jobs = Jobs.objects.get(pk=job_id)
    user = User.objects.get(pk=jobs.user_id)
    applyCandidates = ApplyCandidates.objects.create(jobs=jobs, first_name=firstname, last_name=lastname, phone=phone,
                                                     email=email, location=location, resume_url=resume_url, linkedinurl=linkedinurl,
                                                     gender=gender, race=race)
    # add candidate resume url to prifile detail table
    applicant_registered = True if len(User.objects.filter(email=email)) == 1 else False
    if applicant_registered:
        applicant = User.objects.get(email=email)
        has_profile = True if len(ProfileDetail.objects.filter(user_id=applicant.id)) == 1 else False
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
def get_current_jobs(request):
    emails = []
    job_id = request.query_params.get("jobid")
    jobs = Jobs.objects.get(pk=job_id)
    employerp = EmployerProfileDetail.objects.get(user_id = jobs.user_id)
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
        "company_name": jobs.company_name,
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
        "company_website": employerp.website,
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
        InterviewQuestions.objects.create(description=questions[i], positions_id=position_id)
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
    is_invited = request.data['isInvited']
    for i in range(len(candidates)):
        candidate = ApplyCandidates.objects.get(id=candidates[i])
        candidate.is_invited = is_invited
        # save update to db
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
    publisher_url.text = 'https://hirebeat.co/'
    publisher.text = 'HibreBeat'
    # produce jobs dynamic here
    job_details = Jobs.objects.filter(job_post=1).values()
    for i in range(len(job_details)):
        # job description has min length of 25 and job is not closed
        if len(job_details[i]['job_description']) > 25 and job_details[i]['is_closed'] is False:
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
    publisher_url.text = 'https://hirebeat.co/'
    publisher.text = 'HibreBeat'
    # produce jobs dynamic here
    job_details = Jobs.objects.filter(job_post=2).values()
    for i in range(len(job_details)):
        # job description has min length of 25 and job is not closed
        if len(job_details[i]['job_description']) > 25 and job_details[i]['is_closed'] is False:
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

def upload_cv_to_s3(encoded_cv):
    # decode resume and convert to pdf file
    resume = base64.b64decode(encoded_cv)
    #content = resume.decode("utf-8")
    content = open("cv.pdf", "wb")
    content.write(resume)
    content.close()
    file_name = str(int(time.time())) + '.pdf'
    # upload txt file to s3
    b = conn.get_bucket(os.getenv("CV_Interview_Bucket"))
    k = Key(b)
    k.key = file_name
    k.set_contents_from_filename("cv.pdf")
    resume_url = "https://hirebeat-interview-resume.s3.amazonaws.com/" + file_name
    # delete cv.pdf cache
    if os.path.exists("cv.pdf"):
        os.remove("cv.pdf")
    return resume_url

@api_view(['POST'])
def add_new_apply_candidate_from_zr(request):
    job_id = request.data['job_id']
    firstname = request.data['first_name']
    lastname = request.data['last_name']
    phone = request.data['phone']
    email = request.data['email']
    # location = request.data['location']
    resume = request.data['resume']
    resume_url = upload_cv_to_s3(resume)
    # linkedinurl = request.data['linkedinurl']
    fullname = firstname + " " + lastname
    jobs = Jobs.objects.get(pk=job_id)
    user = User.objects.get(pk=jobs.user_id)
    applied = ApplyCandidates.objects.filter(email=email, jobs=jobs)
    if len(applied) == 0:
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
    data = list(Jobs.objects.filter(is_closed=False, company_name=companyName).values())
    employerProfileDetail = EmployerProfileDetail.objects.filter(name=companyName)
    for i in range(len(employerProfileDetail)):
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
        candidate_application = ApplyCandidates.objects.filter(jobs_id=job_obj.id, email=email)[0]
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
        "end_user_origin_id": user_id, # unique entity ID
        "end_user_organization_name": employer_profile.name,  # your user's organization name
        "end_user_email_address": user.email, # your user's email address
        "categories": ["hris", "ats"], # choose your category
    }

    headers = {"Authorization": f"Bearer {api_key}"}

    link_token_url = "https://api.merge.dev/api/integrations/create-link-token"
    link_token_result = requests.post(link_token_url, data=body, headers=headers)
    link_token = link_token_result.json().get("link_token")

    return Response({
        "link_token": link_token,
    })

@api_view(['POST'])
def retrive_merge_account_token(request):
    public_token = request.data['public_token']
    user_id = request.data['user_id']
    print(public_token)
    print(user_id)
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    profile.merge_public_token = public_token
    profile.save()

    return Response("Retrive merge token success", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def send_merge_api_request(request):
    configuration = MergeATSClient.Configuration()

    # Swap YOUR_API_KEY below with your production key from:
    # https://app.merge.dev/configuration/keys 
    configuration.api_key['tokenAuth'] = os.getenv("MERGE_API_KEY")
    configuration.api_key_prefix['tokenAuth'] = 'Bearer'

    api_client = MergeATSClient.ApiClient(configuration)

    candidates_api_instance = candidates_api.CandidatesApi(api_client)

    # The string 'TEST_ACCOUNT_TOKEN' below works to test your connection
    # to Merge and will return dummy data in the response.
    # In production, replace this with account_token from user.
    x_account_token = 'TEST_ACCOUNT_TOKEN'

    try:
        api_response = candidates_api_instance.candidates_list(x_account_token)
        pprint(api_response['results'])
    except MergeATSClient.ApiException as e:
        print('Exception when calling CandidatesApi->candidates_list: %s' % e)

    return Response({
        "api_response": api_response['results']
    })