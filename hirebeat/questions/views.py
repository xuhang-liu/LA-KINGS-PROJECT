from re import T
from django.db.models.aggregates import Count
from .models import Question, Categorys, SubCategory, Positions, InterviewQuestions, InvitedCandidates, InterviewFeedback, \
    InterviewResumes, SubReviewers, ExternalReviewers, InterviewNote, ReviewerEvaluation
from accounts.models import CandidatesInterview, Profile
from videos.models import WPVideo
from jobs.models import ApplyCandidates, Jobs
from rest_framework import generics, permissions
from .serializers import QuestionSerializer, SubcategorySerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
import random
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.core.exceptions import ObjectDoesNotExist
from datetime import timedelta
from django.utils import timezone
import math
from django.forms.models import model_to_dict
import base64
from itertools import chain
import time
from django.db.models import Q
from datetime import date, timedelta
import os
import requests
import json


class QuestionAPIView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        number = self.request.query_params.get('number')
        category = self.request.query_params.get('category')
        level = self.request.query_params.get('level')
        if category != 'Random':
            questions = Question.objects.filter(category=category, level=level)
        else:
            questions = Question.objects.filter(title='BQ')
        questions = random.sample(list(questions), int(number))
        return questions


@api_view(['GET'])
def get_subcategories(request):
    # print("===Get Question Subcategories Called===")
    category = request.query_params.get('category')
    queryset = Categorys.objects.filter(
        category_des=category).values('subCategorys')
    sub_list = queryset[0]["subCategorys"].split(",")

    subcategories = []
    num = len(sub_list)
    for i in range(num):
        id = int(sub_list[i])
        s = SubCategory.objects.filter(id=id)
        serializer = SubcategorySerializer(s[0])
        subcategory = serializer.data
        subcategories.append(subcategory)

    return Response({
        "subcategories": subcategories,
    })


@api_view(['GET'])
def get_random_question(request):
    queryset = Question.objects.all()
    question = random.sample(list(queryset), int(1))
    return Response({
        "question": question[0].description,
        "id": question[0].id,
    })


@api_view(['GET'])
def get_interview_questions(request):
    questions = []
    question_ids = []
    position_id = request.query_params.get("position_id")
    position = Positions.objects.filter(pk=position_id).values()[0]

    interview_questions = InterviewQuestions.objects.filter(
        positions_id=position_id)
    for i in range(len(interview_questions)):
        obj = interview_questions[i]
        questions.append(obj.description)
        question_ids.append(obj.id)

    return Response({
        "questions": questions,
        "question_ids": question_ids,
        "questionTime": position["prepare_time"],
        "position": position,
    })

# create a position record in Position table, which is used for video interview reference
@api_view(['POST'])
def add_position(request):
    # print("==add position==")
    jobtitle = request.data['jobtitle']
    jobid = request.data['jobid']
    jobdescription = request.data['jobdescription']
    questionTime = request.data['questionTime']
    user = User.objects.get(pk=request.data["userid"])
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count += 1
    profile.save()
    questions = request.data['questions']
    position = Positions.objects.create(
        user=user, job_title=jobtitle, job_id=jobid, job_description=jobdescription, questionTime=questionTime)
    for i in range(len(questions)):
        InterviewQuestions.objects.create(
            description=questions[i], positions=position)
    return Response({
        "jobtitle": jobtitle
    })


# get position objects from Position table
@api_view(['GET'])
def get_posted_jobs(request):
    data = {}
    job_dots = 0
    user_id = int(request.GET.get("user_id", 0))
    page = int(request.GET.get("page", 1))
    stage = request.GET.get("stage", "")
    if stage == "undefined":
        stage = ""
    video_filter = request.GET.get("video_filter", "")
    if video_filter == "undefined":
        video_filter = ""
    reviewed = request.GET.get("reviewed", "")
    if reviewed == "undefined":
        reviewed = ""
    live_filter = request.GET.get("live_filter", "")
    if live_filter == "undefined":
        live_filter = ""
    short_filter = request.GET.get("short_filter", "")
    if short_filter == "undefined":
        short_filter = ""
    job_filter = request.GET.get("job_filter", "")
    if job_filter == "undefined":
        job_filter = ""
    search_filter = request.GET.get("search_filter", "")
    if search_filter == "undefined":
        search_filter = ""

    # get user profile
    profile = Profile.objects.get(user_id=user_id)
    # get user object
    user = User.objects.get(pk=user_id)

    # employer role
    if profile.is_subreviwer is False and profile.is_external_reviewer is False:
        # get all positions posted by current user
        positions = Positions.objects.filter(user_id=user_id)

        for i in range(len(positions)):
            positions_id = positions[i].id
            job_dot = InvitedCandidates.objects.filter(
                    positions_id=positions_id, is_viewed=False).count()
            job_dots += job_dot

        if job_filter != "":
            positions = positions.filter(job_id_in_jobs = int(job_filter))
        for i in range(len(positions)):
            positions_id = positions[i].id
            position = positions[i]

            # Get general orange dots and tab orange dots
            stage_dots = {}
            Invited_Unviewed = InvitedCandidates.objects.filter(
                    positions_id=positions_id, is_viewed=False, is_active=True)
            stage_dots["video_interview"] = Invited_Unviewed.filter(current_stage="Video Interview").count()

            stage_dots["resume_review"] = ApplyCandidates.objects.filter(
                        jobs_id=position.job_id_in_jobs, is_invited=0, is_viewed=False, is_active=True, current_stage="Resume Review").count()

            # get each position applicants by current stage
            applicants = []
            # get all candidates for each position at the specific stage: current_stage=stage
            if stage == "":
                applicants = InvitedCandidates.objects.filter(
                    positions=position, is_active=True)
            else:
                applicants = InvitedCandidates.objects.filter(
                    positions=position, current_stage=stage, is_active=True)
            # filter by video
            if video_filter != "":
                # Uninvited case
                if video_filter == "Uninvited":
                    applicants = applicants.filter(is_invited=False, is_recorded=False)
                # finished video interview
                elif video_filter == "Completed":
                    applicants = applicants.filter(is_recorded=True, video_count__gt=0)
                # waiting for video recording
                elif video_filter == "Pending":
                    applicants = applicants.filter(is_invited=True, is_recorded=False)
                # ghosted case
                elif video_filter == "Withdrawn":
                    applicants = applicants.filter(is_recorded=True, video_count__lte=0)
            # filter by live interview
            if live_filter != "" and live_filter != "All":
                applicants = applicants.filter(livcat=live_filter)
            # filter by shortlist interview
            if short_filter != "" and short_filter != "All":
                applicants = applicants.filter(shortcat=short_filter)
            # convert queryset to list， order applicants by id descending

            if search_filter != "":
                applicants = applicants.filter(name__icontains = search_filter)

            # begin pagination, each single page should have at most 15 applicants
            total_records = applicants.count()
            #print(total_records)
            total_page = math.ceil(len(applicants) / 15)
            if total_records > 15:
                begin = (page - 1) * 15
                end = page * 15
                applicants = list(applicants.order_by('-id').values()[begin:end])
            else:
                applicants = list(applicants.order_by('-id').values())
            
            # get linkedin and is_active values from ApplyCandidates model
            for applicant in applicants:
                applicant["linkedinurl"] = ""
                applicant["apply_candidate_id"] = 0
                # get vote rate
                applicant["num_vote_yes"] = 0
                applicant["num_votes"] = 0
                if stage != "":
                    applicant["num_vote_yes"] = ReviewerEvaluation.objects.filter(
                        applicant_email=applicant["email"], position_id=positions_id, evaluation=1, current_stage=stage).count()
                    applicant["num_votes"] = ReviewerEvaluation.objects.filter(
                        applicant_email=applicant["email"], position_id=positions_id, current_stage=stage).count()
                # get applicant application information from ApplyCandidates table
                jobs = Jobs.objects.filter(positions=position, user_id=user_id)
                if len(jobs) > 0:
                    candidate = ApplyCandidates.objects.filter(
                        email=applicant["email"], jobs_id=jobs[0].id)
                    if len(candidate) > 0:
                        applicant["linkedinurl"] = candidate[0].linkedinurl
                        applicant["apply_candidate_id"] = candidate[0].id
                        applicant["questions"] = candidate[0].questions
                        applicant["answers"] = candidate[0].answers
                        applicant["qualifications"] = candidate[0].qualifications
                        applicant["must_haves"] = candidate[0].must_haves


            # get each applicant user_id, if not registered, the user_id will be -1
            if stage == "Short List":
                for j in range(len(applicants)):
                    applicant_info = User.objects.filter(
                        email=applicants[j]["email"]).values()
                    if len(applicant_info) == 1:
                        applicants[j]["user_id"] = applicant_info[0]["id"]
                    else:
                        applicants[j]["user_id"] = -1
                        
            # get interview questions for current job
            questions = list(InterviewQuestions.objects.filter(
                positions_id=positions_id).values())

            # get subreviewers and external reviews(hiring manager) for this position
            subreviewers = list(SubReviewers.objects.filter(
                position_id=positions_id).values())
            ex_reviewers = list(ExternalReviewers.objects.filter(
                position_id=positions_id).values())
            # get position detail
            position = Positions.objects.filter(id=positions_id).values()[0]
            #print(positions[i].job_id_in_jobs)
            job_details = {
                "position_id": positions_id,
                "job_id": positions[i].job_id,
                "job_title": positions[i].job_title,
                "is_closed": positions[i].is_closed,
                "invite_date": positions[i].invite_date,
                "applicants": applicants,
                "questions": questions,
                "subreviewers": subreviewers,
                "ex_reviewers": ex_reviewers,
                "position": position,
                "total_records": total_records,
                "current_page": page - 1,
                "total_page": total_page,
                "stage_dots": stage_dots
            }
            # convert to json
            data[positions_id] = job_details

        # count the number of applicants that haven't been reviewed
        jobs = Jobs.objects.filter(user_id=user_id)
        for i in range(len(jobs)):
            jobs_id = jobs[i].id
            job_dot = ApplyCandidates.objects.filter(
                jobs_id=jobs_id, is_invited=0, is_viewed=False).count()
            job_dots += job_dot

    # reviewer
    else:
        # get the combinations of subreviewers and external reviewers using user.email
        ex_reviewers = list(chain(SubReviewers.objects.filter(
            r_email=user.email), ExternalReviewers.objects.filter(r_email=user.email)))
        for i in range(len(ex_reviewers)):
            # check reviewer type
            reviewer_type = ""
            position_id = ex_reviewers[i].position.id
            if (ExternalReviewers.objects.filter(r_email=user.email, position_id=position_id).exists()):
                reviewer_type = "extr"
            elif (SubReviewers.objects.filter(r_email=user.email, position_id=position_id).exists()):
                reviewer_type = "subr"

            # Get general orange dots and tab orange dots
            stage_dots = {}
            Invited_Unviewed = InvitedCandidates.objects.filter(
                    positions_id=position_id, is_viewed=False, is_active=True)
            stage_dots["video_interview"] = Invited_Unviewed.filter(current_stage="Video Interview").count()
            stage_dots["resume_review"] = 0

            # get each position applicants by current stage
            applicants = []
            # get all candidates for each position at the specific stage: current_stage=stage
            if stage == "":
                applicants = InvitedCandidates.objects.filter(
                    positions_id=position_id, is_active=True)
            else:
                applicants = InvitedCandidates.objects.filter(
                    positions_id=position_id, current_stage=stage, is_active=True)
            # filter by video
            if video_filter != "":
                # Uninvited case
                if video_filter == "Uninvited":
                    applicants = applicants.filter(is_invited=False)
                # finished video interview
                elif video_filter == "Completed":
                    applicants = applicants.filter(is_recorded=True, video_count__gt=0)
                # waiting for video recording
                elif video_filter == "Pending":
                    applicants = applicants.filter(is_invited=True, is_recorded=False)
                # ghosted case
                elif video_filter == "Withdrawn":
                    applicants = applicants.filter(is_recorded=True, video_count__lte=0)
            
            if search_filter != "":
                applicants = applicants.filter(name__icontains = search_filter)

            # convert queryset to list， order applicants by id descending
            applicants = list(applicants.order_by('-id').values())
            company_name = ex_reviewers[i].company_name

            # and get review evaluation for each applicant
            for applicant in applicants:
                applicant["linkedinurl"] = ""
                applicant["is_active"] = False
                applicant["apply_candidate_id"] = 0
                # get vote evaluation
                applicant["num_vote_yes"] = 0
                applicant["num_votes"] = 0
                if stage != "":
                    applicant["num_vote_yes"] = ReviewerEvaluation.objects.filter(
                        applicant_email=applicant["email"], position_id=position_id, evaluation=1, current_stage=stage).count()
                    applicant["num_votes"] = ReviewerEvaluation.objects.filter(
                        applicant_email=applicant["email"], position_id=position_id, current_stage=stage).count()
                    # get each applicant review status
                    applicant["reviewer_review_status"] = ReviewerEvaluation.objects.filter(
                        reviewer_email=user.email, applicant_email=applicant["email"], current_stage=stage).exists()
                # get each applicant answers to each position screen questions
                jobs = Jobs.objects.filter(
                    positions_id=position_id, user_id=ex_reviewers[i].master_user)
                if len(jobs) > 0:
                    candidate = ApplyCandidates.objects.filter(
                        email=applicant["email"], jobs_id=jobs[0].id)
                    if len(candidate) > 0:
                        applicant["linkedinurl"] = candidate[0].linkedinurl
                        applicant["is_active"] = candidate[0].is_active
                        applicant["apply_candidate_id"] = candidate[0].id
                        applicant["questions"] = candidate[0].questions
                        applicant["answers"] = candidate[0].answers
                        applicant["qualifications"] = candidate[0].qualifications
                        applicant["must_haves"] = candidate[0].must_haves
            # filter by reviewed status
            if reviewed == "Reviewed":
                applicants = [a for a in applicants if a["reviewer_review_status"]]
            elif reviewed == "Pending":
                applicants = [a for a in applicants if not a["reviewer_review_status"]]
            # begin pagination, each single page should have at most 15 applicants
            total_records = len(applicants)
            total_page = math.ceil(len(applicants) / 15)
            if total_records > 15:
                begin = (page - 1) * 15
                end = page * 15
                applicants = applicants[begin:end]
            # get each applicant user_id, if not registered, the user_id will be -1
            if stage == "Short List":
                for j in range(len(applicants)):
                    applicant_info = User.objects.filter(
                        email=applicants[j]["email"]).values()
                    if len(applicant_info) == 1:
                        applicants[j]["user_id"] = applicant_info[0]["id"]
                    else:
                        applicants[j]["user_id"] = -1
            # get interview questions for current job
            questions = list(InterviewQuestions.objects.filter(
                positions_id=position_id).values())
            # get subreviewers and external reviews(hiring manager) for this position
            subs = list(SubReviewers.objects.filter(
                position_id=position_id).values())
            exts = list(ExternalReviewers.objects.filter(
                position_id=position_id).values())
            # get position detail
            position = Positions.objects.filter(id=position_id).values()[0]
            job_details = {
                "position_id": position_id,
                "job_id": ex_reviewers[i].position.job_id,
                "job_title": ex_reviewers[i].position.job_title,
                "is_closed": ex_reviewers[i].position.is_closed,
                "invite_date": ex_reviewers[i].position.invite_date,
                "applicants": applicants,
                "questions": questions,
                "subreviewers": subs,
                "ex_reviewers": exts,
                "position": position,
                "company_name": company_name,
                "total_records": total_records,
                "current_page": page - 1,
                "total_page": total_page,
                "reviewer_type": reviewer_type,
                "stage_dots": stage_dots
            }
            # convert to json
            data[position_id] = job_details
    return Response({
        "data": data,
        "job_dots": job_dots,
    })

# for bulk interview invitation
@api_view(['POST'])
def add_interviews(request):
    company_name = request.data["company_name"]
    job_title = request.data["job_title"]
    position_id = request.data["position_id"]
    emails = request.data["emails"]
    names = request.data["names"]
    urls = request.data["urls"]
    expire = request.data["expire"]

    for i in range(len(emails)):
        if emails[i] != "" and names[i] != "":
            # avoid duplicate data
            try:
                candidate = CandidatesInterview.objects.get(
                    email=emails[i], positions_id=position_id)
                invited = InvitedCandidates.objects.get(
                    email=emails[i], positions_id=position_id)
            except ObjectDoesNotExist:
                # save data
                CandidatesInterview.objects.create(
                    email=emails[i], positions_id=position_id)
                InvitedCandidates.objects.create(
                    positions_id=position_id, email=emails[i], name=names[i], comment_status=0)
                # send email
                send_interviews(names[i], emails[i], urls[i],
                                job_title, company_name, expire)

    return Response("Add interviews data successfully", status=status.HTTP_200_OK)

# resend video interview for multiple candidates at one time
@api_view(['POST'])
def send_video_interviews(request):
    company_name = request.data["company_name"]
    job_title = request.data["job_title"]
    emails = request.data["emails"]
    names = request.data["names"]
    urls = request.data["urls"]
    expire = request.data["expire"]
    candidate_ids = request.data["candidate_ids"]

    for i in range(len(emails)):
        if emails[i] != "" and names[i] != "":
            # update candidate invite status and date
            candidate = InvitedCandidates.objects.get(id=candidate_ids[i])
            if not candidate.is_invited:
                candidate.is_invited = True
                candidate.invite_date = timezone.now()
                candidate.save()
                # send email
                send_interviews(names[i], emails[i], urls[i],
                            job_title, company_name, expire)

    return Response("Send interviews successfully", status=status.HTTP_200_OK)

# move applicant to video interview or stages after video interview
@api_view(['POST'])
def move_candidate_to_interview(request):
    position_id = request.data["position_id"]
    emails = request.data["emails"]
    names = request.data["names"]
    job_id = request.data["job_id"]
    next_stage = request.data["nextStage"]
    candidates = request.data['candidates']

    for i in range(len(emails)):
        if emails[i] != "" and names[i] != "":
            applicant = ApplyCandidates.objects.get(
                email=emails[i], jobs_id=job_id)
            applicant.current_stage = next_stage
            applicant.save()
            # avoid duplicate data
            candidate = {}
            invitedCan = {}
            try:
                candidate = CandidatesInterview.objects.get(
                    email=emails[i], positions_id=position_id)
                invitedCan = InvitedCandidates.objects.get(
                    email=emails[i], positions_id=position_id)
                invitedCan.current_stage = next_stage
                invitedCan.save()
            except ObjectDoesNotExist:
                # manually add case
                if job_id == -1:
                    candidate = CandidatesInterview.objects.create(
                        email=emails[i], positions_id=position_id)
                    invitedCan = InvitedCandidates.objects.create(
                        positions_id=position_id, email=emails[i], name=names[i], comment_status=0, current_stage=next_stage, is_viewed=True)
                #  apply from career page case
                else:
                    # get resume url, phone, location, resume analysis
                    candidate_info = ApplyCandidates.objects.filter(
                        email=emails[i], jobs_id=job_id)[0]
                    resume_url = candidate_info.resume_url
                    location = candidate_info.location
                    phone = candidate_info.phone
                    result_rate = candidate_info.result_rate
                    hard_skill_jd_list = candidate_info.hard_skill_jd_list
                    hard_skill_resume_list = candidate_info.hard_skill_resume_list
                    hard_skill_info_list = candidate_info.hard_skill_info_list
                    soft_skill_resume_list = candidate_info.soft_skill_resume_list
                    soft_skill_jd_list = candidate_info.soft_skill_jd_list
                    soft_skill_info_list = candidate_info.soft_skill_info_list
                    other_keyword_resume_list = candidate_info.other_keyword_resume_list
                    other_keyword_jd_list = candidate_info.other_keyword_jd_list
                    other_keyword_info_list = candidate_info.other_keyword_info_list
                    basic_cri_resume_list = candidate_info.basic_cri_resume_list
                    basic_cri_jd_list = candidate_info.basic_cri_jd_list
                    basic_cri_info_list = candidate_info.basic_cri_info_list
                    # new resume analysis
                    required_skills_name = candidate_info.required_skills_name
                    required_skills_on_resume = candidate_info.required_skills_on_resume
                    required_skills_occurrence = candidate_info.required_skills_occurrence
                    extra_skills_name = candidate_info.extra_skills_name
                    extra_skills_on_resume = candidate_info.extra_skills_on_resume
                    extra_skills_occurrence = candidate_info.extra_skills_occurrence
                    transferable_skills_name = candidate_info.transferable_skills_name
                    transferable_skills_on_resume = candidate_info.transferable_skills_on_resume
                    transferable_skills_occurrence = candidate_info.transferable_skills_occurrence
                    # save data
                    if not CandidatesInterview.objects.filter(email=emails[i], positions_id=position_id).exists():
                        CandidatesInterview.objects.create(
                            email=emails[i], positions_id=position_id)
                    if not InvitedCandidates.objects.filter(email=emails[i], positions_id=position_id).exists():
                        invitedCan = InvitedCandidates.objects.create(positions_id=position_id, email=emails[i], name=names[i], comment_status=0,
                                                                      resume_url=resume_url, location=location, phone=phone, result_rate=result_rate,
                                                                      hard_skill_jd_list=hard_skill_jd_list, hard_skill_resume_list=hard_skill_resume_list,
                                                                      hard_skill_info_list=hard_skill_info_list, soft_skill_resume_list=soft_skill_resume_list,
                                                                      soft_skill_jd_list=soft_skill_jd_list, soft_skill_info_list=soft_skill_info_list,
                                                                      other_keyword_resume_list=other_keyword_resume_list, other_keyword_jd_list=other_keyword_jd_list,
                                                                      other_keyword_info_list=other_keyword_info_list, basic_cri_resume_list=basic_cri_resume_list,
                                                                      basic_cri_jd_list=basic_cri_jd_list, basic_cri_info_list=basic_cri_info_list,
                                                                      required_skills_name=required_skills_name, required_skills_on_resume=required_skills_on_resume,
                                                                      required_skills_occurrence=required_skills_occurrence, extra_skills_name=extra_skills_name,
                                                                      extra_skills_on_resume=extra_skills_on_resume, extra_skills_occurrence=extra_skills_occurrence,
                                                                      transferable_skills_name=transferable_skills_name, transferable_skills_on_resume=transferable_skills_on_resume,
                                                                      transferable_skills_occurrence=transferable_skills_occurrence, current_stage=next_stage, is_viewed=True
                                                                      )

    return Response("Move candidates to interview process successfully", status=status.HTTP_200_OK)

# send interview email notice via smtp
def send_interviews(name, email, url, job_title, company_name, expire):
    subject = 'Follow up on your application of ' + job_title + " at " + company_name
    message = get_template("questions/interview_email.html")
    context = {
        'name': name,
        'url': url,
        'job_title': job_title,
        'company_name': company_name,
        'expire': expire,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()

    # requestBody = {
    #         "to": [
    #             {
    #                 "name":name,
    #                 "email":email
    #             }
    #         ],
    #         "template": "VideoInterviewInvitation",

    #         "body": {
    #             "company_name": company_name,
    #             "name": name,
    #             "email": email,
    #             "interview_practice_link": "app.hirebeat.co/job-seekers-howitworks",
    #             "start_interview_link": url.replace("https://",""),
    #             "job_title": job_title,
    #         }
    # }

    # emailUrl = os.getenv('CUSTOMER_IO_WEBHOOK') + "/mail/send"
    # requests.post(emailUrl, data=json.dumps(requestBody))    

# resend video interview for a single person
@api_view(['POST'])
def resend_invitation(request):
    company_name = request.data["company_name"]
    job_title = request.data["job_title"]
    email = request.data["email"]
    name = request.data["name"]
    url = request.data["url"]
    expire = request.data["expire"]
    # update invite status and date
    candidate_id = request.data["candidate_id"]
    candidate = InvitedCandidates.objects.get(id=candidate_id)
    candidate.is_invited = True
    # candidate.invite_date = timezone.now()
    candidate.save()
    send_interviews(name, email, url, job_title, company_name, expire)

    return Response("Submit feedback data successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def submit_feedback(request):
    rating = request.data["rating"]
    feedback = request.data["feedback"]
    email = request.data["email"]
    InterviewFeedback.objects.create(
        rating=rating, feedback=feedback, email=email)

    return Response("Submit feedback data successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def update_comment_status(request):
    position_id = request.data["positionId"]
    email = request.data["email"]
    ss = request.data["status"]
    The_candidate = InvitedCandidates.objects.get(
        positions=position_id, email=email)
    The_candidate.comment_status = ss
    # update accept_date
    The_candidate.accept_date = timezone.now()
    The_candidate.save()

    data = {}
    return Response({
        "data": data,
    })


@api_view(['POST'])
def update_secondround_status(request):
    position_id = request.data["positionId"]
    email = request.data["email"]
    ss = request.data["status"]
    The_candidate = InvitedCandidates.objects.get(
        positions=position_id, email=email)
    The_candidate.secondround_status = ss
    The_candidate.save()

    data = {}
    user_id = request.data["userId"]
    positions = Positions.objects.filter(user_id=user_id)
    for i in range(len(positions)):
        positions_id = positions[i].id
        # get each position applicants
        applicants = list(InvitedCandidates.objects.filter(
            positions_id=positions_id).values())
        job_details = {
            "position_id": positions_id,
            "job_id": positions[i].job_id,
            "job_title": positions[i].job_title,
            "is_closed": positions[i].is_closed,
            "invite_date": positions[i].invite_date,
            "applicants": applicants,
        }
        # convert to json
        data[positions_id] = job_details

    return Response({
        "data": data,
    })


@api_view(['POST'])
def close_job(request):
    position_id = request.data["position_id"]
    position_obj = Positions.objects.get(id=position_id)
    if position_obj.is_closed:
        position_obj.is_closed = False
    else:
        position_obj.is_closed = True
    position_obj.save()
    return Response("Close current position successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def delete_job(request):
    position_id = request.data["position_id"]
    position_obj = Positions.objects.get(id=position_id)
    profile = Profile.objects.get(user_id=position_obj.user_id)
    position_obj.delete()
    profile.position_count -= 1
    profile.save()
    interview_que = InterviewQuestions.objects.filter(positions_id=position_id)
    interview_que.delete()
    return Response("Delete current position successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def add_interview_resume(request):
    position_id = request.data["positionId"]
    positions = Positions.objects.get(pk=position_id)
    candidate_id = request.data["candidateId"]
    candidates = User.objects.get(pk=candidate_id)
    resume_URL = request.data["resume_url"]
    interviewResume = InterviewResumes.objects.filter(
        positionId=positions, candidateId=candidates)
    if (len(interviewResume) == 0):
        InterviewResumes.objects.create(
            positionId=positions, candidateId=candidates, resumeURL=resume_URL)
    return Response("Added the interview resume", status=status.HTTP_200_OK)


@api_view(['POST'])
def get_resume_url(request):
    # print('Get Resume Called')
    data = {
        "result_rate": "-1",
        "hard_skill_jd_list": [],
        "hard_skill_resume_list": [],
        "hard_skill_info_list": [],
        "soft_skill_resume_list": [],
        "soft_skill_jd_list": [],
        "soft_skill_info_list": [],
        "other_keyword_resume_list": [],
        "other_keyword_jd_list": [],
        "other_keyword_info_list": [],
        "basic_cri_resume_list": [],
        "basic_cri_jd_list": [],
        "basic_cri_info_list": []
    }
    uploadTime = ""
    resumeURL = ""
    position_id = request.data["positionId"]
    positions = Positions.objects.get(pk=position_id)
    try:
        candidate_id = request.data["userId"]
        candidate = User.objects.get(pk=candidate_id)
        uploadedResume = InterviewResumes.objects.get(
            positionId=positions, candidateId=candidate)
        uploadTime = uploadedResume.invite_date
        resumeURL = uploadedResume.resumeURL
        data = {
            "result_rate": uploadedResume.result_rate,
            "hard_skill_jd_list": uploadedResume.hard_skill_jd_list,
            "hard_skill_resume_list": uploadedResume.hard_skill_resume_list,
            "hard_skill_info_list": uploadedResume.hard_skill_info_list,
            "soft_skill_resume_list": uploadedResume.soft_skill_resume_list,
            "soft_skill_jd_list": uploadedResume.soft_skill_jd_list,
            "soft_skill_info_list": uploadedResume.soft_skill_info_list,
            "other_keyword_resume_list": uploadedResume.other_keyword_resume_list,
            "other_keyword_jd_list": uploadedResume.other_keyword_jd_list,
            "other_keyword_info_list": uploadedResume.other_keyword_info_list,
            "basic_cri_resume_list": uploadedResume.basic_cri_resume_list,
            "basic_cri_jd_list": uploadedResume.basic_cri_jd_list,
            "basic_cri_info_list": uploadedResume.basic_cri_info_list
        }
    except ObjectDoesNotExist:
        return Response({
            "interviewResume": data,
            "resumeURL": resumeURL,
            "recordTime": uploadTime,
        })

    return Response({
        "interviewResume": data,
        "resumeURL": resumeURL,
        "recordTime": uploadTime,
    })


@api_view(['GET'])
def get_applicants_data(request):
    data = {
        "date": [],
        "total": [0, 0, 0, 0, 0, 0, 0],
        "accepted": [0, 0, 0, 0, 0, 0, 0],
        "recorded": [0, 0, 0, 0, 0, 0, 0],
    }

    week = []
    # get the most recent week dates
    for day in range(6, -1, -1):
        # use timezone.now() to get current time since timezone is enabled
        curr_date = timezone.now() - timedelta(days=day)
        week.append(curr_date.strftime("%Y-%m-%d"))
        data["date"].append(curr_date.strftime("%b %d"))

    employer_id = request.query_params.get('employerId')
    positions = Positions.objects.filter(
        user_id=employer_id, is_closed=False)  # ignore closed jobs
    # positions loop
    for i in range(len(positions)):
        position_id = positions[i].id
        # get current position each day total and accepted applicants
        total = []
        accepted = []
        recorded = []
        candidates = list(InvitedCandidates.objects.filter(
            positions_id=position_id).values())
        # dates loop
        for j in range(len(week)):
            day_total = InvitedCandidates.objects.filter(
                positions_id=position_id,
                invite_date__contains=week[j]).count()
            day_accepted = InvitedCandidates.objects.filter(
                positions_id=position_id,
                comment_status=1,
                accept_date__contains=week[j]).count()
            total.append(day_total)
            accepted.append(day_accepted)

            count = 0
            # candidates loop
            for c in range(len(candidates)):
                candidate = candidates[c]
                day_recorded = WPVideo.objects.filter(
                    email=candidate["email"],
                    created_at__contains=week[j]).count()
                count += day_recorded
            recorded.append(count)
        # sum loop
        for k in range(len(week)):
            data["total"][k] += total[k]
            data["accepted"][k] += accepted[k]
            data["recorded"][k] += recorded[k]

    return Response({
        "data": data,
    })


@api_view(['GET'])
def get_stars_list(request):
    pos_id = request.query_params.get("job_id")
    candidates = InvitedCandidates.objects.filter(positions=pos_id)
    data = {}  # star list
    data1 = {}  # resume score list
    for candidate in candidates:
        can_email = candidate.email
        # get average video star for each candidate
        unit_star_list = WPVideo.objects.filter(
            email=can_email, position_id=pos_id)
        star_sum = 0
        video_amount = len(unit_star_list)
        for star in unit_star_list:
            star_sum += star.video_stars
        if video_amount > 0:
            data[can_email] = round(star_sum / video_amount)
        else:
            data[can_email] = 0
        # get resume score for each candidate
        user = User.objects.filter(email=can_email)
        if len(user) > 0:
            unit_resume_list = InterviewResumes.objects.filter(
                positionId_id=pos_id, candidateId=user[0])
            # use uploaded resume
            if len(unit_resume_list) > 0:
                data1[can_email] = unit_resume_list[0].result_rate
            # use didn't upload resume
            else:
                data1[can_email] = "-1"
        else:
            data1[can_email] = "-1"
    return Response({"data": data, "data1": data1})


@api_view(['POST'])
def add_sub_reviewer(request):
    sub_name = request.data["sub_name"]
    sub_email = request.data["sub_email"]
    encoded_email = request.data["encoded_email"]
    company_name = request.data["company_name"]
    position_id = request.data["position_id"]
    master_email = request.data["master_email"]
    master_user = request.data["master_user"]
    jobs_id = request.data["jobs_id"]
    check_stage_array = request.data["check_stage_array"]
    subreviewers_length = 0
    positions = Positions.objects.get(pk=position_id)
    if len(check_stage_array) > 0:
        for c in range(len(check_stage_array)):
            subreviewers = []
            if (check_stage_array[c]):
                if c == 0:
                    subreviewers = SubReviewers.objects.filter(
                        company_name=company_name, r_email=sub_email, position=positions, current_stage="Resume Review")
                elif c == 1:
                    subreviewers = SubReviewers.objects.filter(
                        company_name=company_name, r_email=sub_email, position=positions, current_stage="Video Interview")
                elif c == 2:
                    subreviewers = SubReviewers.objects.filter(
                        company_name=company_name, r_email=sub_email, position=positions, current_stage="Live Interview")
                elif c == 3:
                    subreviewers = SubReviewers.objects.filter(
                        company_name=company_name, r_email=sub_email, position=positions, current_stage="Short List")
            if len(subreviewers) > 0:
                subreviewers_length += 1
    else:
        subreviewers = SubReviewers.objects.filter(
            company_name=company_name, r_email=sub_email, position=positions)
        if len(subreviewers) > 0:
            subreviewers_length += 1
    for c in range(len(check_stage_array)):
        if (check_stage_array[c]):
            if(subreviewers_length == 0):
                if c == 0:
                    created_sub_reviewer = SubReviewers.objects.create(r_name=sub_name, r_email=sub_email, company_name=company_name,
                                                                       position=positions, current_stage="Resume Review", master_user=master_user, jobs_id=jobs_id)
                elif c == 1:
                    created_sub_reviewer = SubReviewers.objects.create(r_name=sub_name, r_email=sub_email, company_name=company_name,
                                                                       position=positions, current_stage="Video Interview", master_user=master_user, jobs_id=jobs_id)
                elif c == 2:
                    created_sub_reviewer = SubReviewers.objects.create(r_name=sub_name, r_email=sub_email, company_name=company_name,
                                                                       position=positions, current_stage="Live Interview", master_user=master_user, jobs_id=jobs_id)
                elif c == 3:
                    created_sub_reviewer = SubReviewers.objects.create(r_name=sub_name, r_email=sub_email, company_name=company_name,
                                                                       position=positions, current_stage="Short List", master_user=master_user, jobs_id=jobs_id)
                ext_rev = ExternalReviewers.objects.filter(r_email=sub_email)
                sub_rev = SubReviewers.objects.filter(r_email=sub_email)
                if (len(ext_rev) > 0):
                    created_sub_reviewer.r_name = ext_rev[0].r_name
                    created_sub_reviewer.save()
                if (len(sub_rev) > 0):
                    created_sub_reviewer.r_name = sub_rev[0].r_name
                    created_sub_reviewer.save()
                send_sub_invitation(sub_name, sub_email, encoded_email,
                                    company_name, master_email, positions.job_title)
            else:
                send_sub_invitation(sub_name, sub_email, encoded_email,
                                    company_name, master_email, positions.job_title)
    return Response("Add sub reviewer successfully", status=status.HTTP_200_OK)


def send_sub_invitation(name, email, encoded_email, company_name, master_email, position_name):
    subject = 'Co-review Invitation to HireBeat for ' + company_name
    user = User.objects.filter(email=email)
    message = {}
    if len(user) == 0:
        message = get_template("questions/sub_reviewer_email.html")
    else:
        message = get_template("questions/external_reviewer_notice.html")
    link = "app.hirebeat.co/employer_register?" + encoded_email
    context = {
        'link': link,
        'name': name,
        'company_name': company_name,
        'master_email': master_email,
        'position_name': position_name,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()
    # requestBody = {
    #     "to": [
    #         {
    #             "name":name,
    #             "email":email
    #         }
    #     ],
    #     "template": "CoReviewInvitationToHirebeat",
    #     "body": {
    #         "company_name": company_name,
    #         "name": name,
    #         "position_name": position_name,
    #         "master_email": master_email,
    #         "login_account_link": link
    #     }
    # }

    # emailUrl = os.getenv('CUSTOMER_IO_WEBHOOK') + "/mail/send"
    # requests.post(emailUrl, data=json.dumps(requestBody))


@api_view(['POST'])
def remove_sub_reviewer(request):
    sub_id = request.data["sub_id"]
    SubReviewers.objects.get(pk=sub_id).delete()

    return Response("Remove sub reviewer successfully", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_question_list(request):
    questions = Question.objects.filter(title="BQ").values()
    return Response({"data": questions})


@api_view(['POST'])
def update_view_status(request):
    id = request.data["candidate_id"]
    if InvitedCandidates.objects.filter(id=id).exists():
        candidate = InvitedCandidates.objects.get(id=id)
        if Jobs.objects.filter(positions=candidate.positions).exists():
            jobs = Jobs.objects.filter(positions=candidate.positions)[0]
            if ApplyCandidates.objects.filter(jobs=jobs, email=candidate.email).exists():
                applyCandidates = ApplyCandidates.objects.filter(jobs=jobs, email=candidate.email)[0]
                applyCandidates.is_viewed = True
                applyCandidates.save()
        candidate.is_viewed = True
        candidate.save()
        return Response("Update is_reviewed successfully", status=status.HTTP_200_OK)
    return Response("The candidate may not exist", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_analytics_info(request):
    # Video Interview Analytics
    interview_session = {
        "date": []
    }
    analyticsInfo = {}
    invitation_total = 0
    interview_received = 0
    interview_received_rate = 0
    position_list = []
    week = []
    day1_count = 0
    day2_count = 0
    day3_count = 0
    day4_count = 0
    day5_count = 0
    day6_count = 0
    day7_count = 0
    # get the most recent week dates
    for day in range(6, -1, -1):
        # use timezone.now() to get current time since timezone is enabled
        curr_date = timezone.now() - timedelta(days=day)
        week.append(curr_date.strftime("%Y-%m-%d"))
        interview_session["date"].append(curr_date.strftime("%b %d"))
    user_id = request.query_params.get("user_id")
    positions = Positions.objects.filter(
        user_id=user_id, is_closed=False)  # ignore closed jobs
    # positions loop
    for i in range(len(positions)):
        position_id = positions[i].id
        position_info = {}
        job = Jobs.objects.get(positions=positions[i])
        position_info["title"] = job.job_title
        position_info["jobid"] = job.job_id
        candidates = InvitedCandidates.objects.filter(positions_id=position_id)
        candidates_recorded = InvitedCandidates.objects.filter(
            positions_id=position_id, is_recorded=True)
        invitation_total += len(candidates)
        interview_received += len(candidates_recorded)
        position_info["total_sent"] = len(candidates)
        position_info["total_received"] = len(candidates_recorded)
        if(len(candidates) != 0):
            position_info["conversion"] = float(
                math.ceil(len(candidates_recorded)/len(candidates)*100))
        else:
            position_info["conversion"] = 0
        record_comp = []
        record_sent =  []
        interQ = list(InterviewQuestions.objects.filter(
            positions_id=position_id).values())
        # dates loop
        for j in range(len(week)):
            count = 0
            # candidates loop
            for c in range(len(interQ)):
                day_recorded = 0
                interviewQ = interQ[c]
                day_recorded = WPVideo.objects.filter(
                    question_id=interviewQ["id"],
                    created_at__contains=week[j]).count()
                count += day_recorded
            record_comp.append(count)
            count1 = InvitedCandidates.objects.filter(positions=positions[i], is_invited=True, invite_date__contains=week[j]).count()
            record_sent.append(count1)
        position_info["recorded"] = record_comp
        position_info["vidsent"] = record_sent
        position_list.append(position_info)
        #response time
        wpVideo = WPVideo.objects.filter(position_id=position_id).distinct('email')
        for i in range(len(wpVideo)):
            invc = InvitedCandidates.objects.get(positions_id=wpVideo[i].position_id, email=wpVideo[i].email)
            res_time = ((wpVideo[i].created_at).date() - (invc.invite_date).date()).days
            if res_time <2:
                day1_count += 1
            elif res_time >= 2 and res_time <3:
                day2_count += 1
            elif res_time >= 3 and res_time <4:
                day3_count += 1
            elif res_time >= 4 and res_time <5:
                day4_count += 1
            elif res_time >= 5 and res_time <6:
                day5_count += 1
            elif res_time >= 6 and res_time <7:
                day6_count += 1
            elif res_time >= 7:
                day7_count += 1

    if(invitation_total != 0):
        interview_received_rate = interview_received/invitation_total*100
    analyticsInfo = {
        "invitation_total": invitation_total,
        "interview_received": interview_received,
        "interview_received_rate": interview_received_rate,
        "day1_count": day1_count,
        "day2_count": day2_count,
        "day3_count": day3_count,
        "day4_count": day4_count,
        "day5_count": day5_count,
        "day6_count": day6_count,
        "day7_count": day7_count,
    }

    #All Jobs Analytics
    active_jobs = 0
    archived_jobs = 0
    closed_jobs = 0
    draft_jobs = 0
    res_act_count = 0
    vid_act_count = 0
    liv_act_count = 0
    sho_act_count = 0
    job_titles = []
    job_open_days = []
    no_of_ques = []
    prep_times = []
    resp_times = []
    video_on = []
    resp_rate = []
    avg_res_time = []
    liv_active_pass_rate_array = []
    active_jobs = Jobs.objects.filter(user_id=user_id, is_closed=0, gh_job_id=None).count()
    archived_jobs = Jobs.objects.filter(user_id=user_id, is_closed=1, gh_job_id=None).count()
    closed_jobs = Jobs.objects.filter(user_id=user_id, is_closed=2, gh_job_id=None).count()
    draft_jobs = Jobs.objects.filter(user_id=user_id, is_closed=3, gh_job_id=None).count()
    jobs = Jobs.objects.filter(Q(user_id=user_id, is_closed=0, gh_job_id=None) | Q(user_id=user_id, is_closed=2, gh_job_id=None))
    for j in range(len(jobs)):
        res_act_count += ApplyCandidates.objects.filter(jobs=jobs[j], is_active=True, current_stage="Resume Review").count()
        vid_act_count += ApplyCandidates.objects.filter(jobs=jobs[j], is_active=True, current_stage="Video Interview").count()
        liv_act_count += ApplyCandidates.objects.filter(jobs=jobs[j], is_active=True, current_stage="Live Interview").count()
        sho_act_count += ApplyCandidates.objects.filter(jobs=jobs[j], is_active=True, current_stage="Short List").count()
        job_titles.append(jobs[j].job_title)
        today = date.today()
        job_open_days.append((today-(jobs[j].first_publish_date).date()).days)
        no_of_ques.append(InterviewQuestions.objects.filter(positions=jobs[j].positions).count())
        prep_times.append(jobs[j].positions.prepare_time)
        resp_times.append(jobs[j].positions.questionTime)
        video_on.append(jobs[j].positions.camera_on)
        int_sent = InvitedCandidates.objects.filter(positions=jobs[j].positions, is_invited=True).count()
        int_comp = InvitedCandidates.objects.filter(positions=jobs[j].positions, is_invited=True, is_recorded=True).count()
        if int_sent>0:
            resp_rate.append(round((int_comp/int_sent)*100))
        else:
            resp_rate.append(0)
        wpVideo = WPVideo.objects.filter(position_id=jobs[j].positions.id).distinct('email')
        total_res_time = 0
        for i in range(len(wpVideo)):
            invc = InvitedCandidates.objects.get(positions_id=wpVideo[i].position_id, email=wpVideo[i].email)
            res_time = ((wpVideo[i].created_at).date() - (invc.invite_date).date()).days
            total_res_time+=res_time
        if total_res_time>0:
            avg_res_time.append(round(total_res_time/len(wpVideo)))
        else:
            avg_res_time.append(0)
        vid_app_count = ApplyCandidates.objects.filter(jobs=jobs[j], current_stage="Video Interview").count()
        liv_app_count = ApplyCandidates.objects.filter(jobs=jobs[j], current_stage="Live Interview").count()
        sho_app_count = ApplyCandidates.objects.filter(jobs=jobs[j], current_stage="Short List").count()
        if (vid_app_count+liv_app_count+sho_app_count) > 0:
            liv_active_pass_rate_array.append(round(((liv_app_count+sho_app_count)/(vid_app_count+liv_app_count+sho_app_count))*100))
        else:
            liv_active_pass_rate_array.append(0)
    liv_active_pass_rate = 0
    if len(liv_active_pass_rate_array)>0:
        liv_active_pass_rate = round(sum(liv_active_pass_rate_array)/len(liv_active_pass_rate_array))

    ## For achived jobs
    arc_jobs = Jobs.objects.filter(user_id=user_id, is_closed=1)
    res_pass_rate_array = []
    vid_pass_rate_array = []
    liv_pass_rate_array = []
    sho_pass_rate_array = []
    for j in range(len(arc_jobs)):
        total_app_count = ApplyCandidates.objects.filter(jobs=arc_jobs[j]).count()
        res_app_count = ApplyCandidates.objects.filter(jobs=arc_jobs[j], current_stage="Resume Review").count()
        vid_app_count = ApplyCandidates.objects.filter(jobs=arc_jobs[j], current_stage="Video Interview").count()
        liv_app_count = ApplyCandidates.objects.filter(jobs=arc_jobs[j], current_stage="Live Interview").count()
        sho_app_count = ApplyCandidates.objects.filter(jobs=arc_jobs[j], current_stage="Short List").count()
        if total_app_count>0:
            res_pass_rate_array.append(round(((res_app_count+vid_app_count+liv_app_count+sho_app_count)/(total_app_count))*100))
        else:
            res_pass_rate_array.append(0)
        if (res_app_count+vid_app_count+liv_app_count+sho_app_count)>0:
            vid_pass_rate_array.append(round(((vid_app_count+liv_app_count+sho_app_count)/(res_app_count+vid_app_count+liv_app_count+sho_app_count))*100))
        else:
            vid_pass_rate_array.append(0)
        if (vid_app_count+liv_app_count+sho_app_count) > 0:
            liv_pass_rate_array.append(round(((liv_app_count+sho_app_count)/(vid_app_count+liv_app_count+sho_app_count))*100))
        else:
            liv_pass_rate_array.append(0)
        if (liv_app_count+sho_app_count) > 0:
            sho_pass_rate_array.append(round(((sho_app_count)/(liv_app_count+sho_app_count))*100))
        else:
            sho_pass_rate_array.append(0)

    res_pass_rate = 0
    vid_pass_rate = 0
    liv_pass_rate = 0
    sho_pass_rate = 0
    if len(res_pass_rate_array)>0:
        res_pass_rate = round(sum(res_pass_rate_array)/len(res_pass_rate_array))
    if len(vid_pass_rate_array)>0:
        vid_pass_rate = round(sum(vid_pass_rate_array)/len(vid_pass_rate_array))
    if len(liv_pass_rate_array)>0:
        liv_pass_rate = round(sum(liv_pass_rate_array)/len(liv_pass_rate_array))
    if len(sho_pass_rate_array)>0:
        sho_pass_rate = round(sum(sho_pass_rate_array)/len(sho_pass_rate_array))

    alljobAnaInfo={
        "active_jobs": active_jobs,
        "archived_jobs": archived_jobs,
        "closed_jobs": closed_jobs,
        "draft_jobs": draft_jobs,
        "res_act_count": res_act_count,
        "vid_act_count": vid_act_count,
        "liv_act_count": liv_act_count,
        "sho_act_count": sho_act_count,
        "job_titles": job_titles,
        "job_open_days": job_open_days,
        "no_of_ques": no_of_ques,
        "prep_times": prep_times,
        "resp_times": resp_times,
        "video_on": video_on,
        "resp_rate": resp_rate,
        "avg_res_time": avg_res_time,
        "res_pass_rate":  res_pass_rate,
        "vid_pass_rate": vid_pass_rate,
        "liv_pass_rate": liv_pass_rate,
        "liv_active_pass_rate": liv_active_pass_rate,
        "sho_pass_rate": sho_pass_rate,
    }

    return Response({
        "analyticsInfo": analyticsInfo,
        "position_list": position_list,
        "interview_session": interview_session,
        "alljobAnaInfo": alljobAnaInfo
    })


@api_view(['POST'])
def delete_interview_questions(request):
    position_id = request.data["position_id"]
    InterviewQuestions.objects.filter(positions_id=position_id).delete()
    return Response("Delete interview questions successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def add_external_reviewer(request):
    ex_reviewer_name = request.data["ex_reviewer_name"]
    ex_reviewer_email = request.data["ex_reviewer_email"]
    encoded_email = request.data["encoded_email"]
    company_name = request.data["company_name"]
    position_id = request.data["position_id"]
    master_email = request.data["master_email"]
    master_user = request.data["master_user"]
    jobs_id = request.data["jobs_id"]
    positions = Positions.objects.get(pk=position_id)
    externalReviewers = ExternalReviewers.objects.filter(
        company_name=company_name, r_email=ex_reviewer_email, position=positions)
    if (len(externalReviewers) == 0):
        created_ext_reviewer = ExternalReviewers.objects.create(r_name=ex_reviewer_name, r_email=ex_reviewer_email,
                                                                company_name=company_name, position=positions, master_user=master_user, jobs_id=jobs_id)
        ext_rev = ExternalReviewers.objects.filter(r_email=ex_reviewer_email)
        sub_rev = SubReviewers.objects.filter(r_email=ex_reviewer_email)
        if (len(ext_rev) > 0):
            created_ext_reviewer.r_name = ext_rev[0].r_name
            created_ext_reviewer.save()
        if (len(sub_rev) > 0):
            created_ext_reviewer.r_name = sub_rev[0].r_name
            created_ext_reviewer.save()
        send_ex_reviewer_invitation(ex_reviewer_name, ex_reviewer_email,
                                    encoded_email, company_name, master_email, positions.job_title)
    else:
        send_ex_reviewer_invitation(ex_reviewer_name, ex_reviewer_email,
                                    encoded_email, company_name, master_email, positions.job_title)
    return Response("Add external reviewer successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def delete_external_reviewer(request):
    ex_reviewer_id = request.data["ex_reviewer_id"]
    ExternalReviewers.objects.get(pk=ex_reviewer_id).delete()
    return Response("Remove external reviewer successfully", status=status.HTTP_200_OK)


def send_ex_reviewer_invitation(name, email, encoded_email, company_name, master_email, position_name):
    subject = "You've been added to the " + company_name + " recruiting team."
    # determine message template by email
    user = User.objects.filter(email=email)
    message = {}
    if len(user) == 0:
        message = get_template("questions/ex_reviewer_email.html")
    else:
        message = get_template("questions/external_reviewer_notice.html")
    link = "https://app.hirebeat.co/employer_register?" + encoded_email
    context = {
        'link': link,
        'name': name,
        'company_name': company_name,
        'master_email': master_email,
        'position_name': position_name,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()


@api_view(['POST'])
def add_review_note(request):
    comment = request.data["comment"]
    applicant_email = request.data["applicant_email"]
    position_id = request.data["position_id"]
    reviewer_email = request.data["reviewer_email"]
    reviewer_type = request.data["reviewer_type"]
    current_stage = request.data["current_stage"]
    reviewer = ""
    if reviewer_type == "sub_reviewer":
        sub_reviewer = SubReviewers.objects.filter(
            r_email=reviewer_email, position_id=position_id)[0]
        reviewer = sub_reviewer.r_name
    elif reviewer_type == "external_reviewer":
        external_reviewer = ExternalReviewers.objects.filter(
            r_email=reviewer_email, position_id=position_id)[0]
        reviewer = external_reviewer.r_name
    else:
        reviewer = request.data["reviewer"]
    InterviewNote.objects.create(reviewer=reviewer, comment=comment, current_stage=current_stage, reviewer_email=reviewer_email,
                                 applicant_email=applicant_email, position_id=position_id)

    return Response("Added review successfully", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_review_note(request):
    position_id = request.query_params.get('position_id')
    applicant_email = request.query_params.get('applicant_email')
    reviews = list(InterviewNote.objects.filter(
        position_id=position_id, applicant_email=applicant_email).values())
    return Response({"data": reviews})


@api_view(['POST'])
def add_or_update_reviewer_evaluation(request):
    evaluation = request.data["evaluation"]
    applicant_email = request.data["applicant_email"]
    position_id = request.data["position_id"]
    reviewer_email = request.data["reviewer_email"]
    reviewer_type = request.data["reviewer_type"]
    current_stage = request.data["current_stage"]
    # get reviewer name
    reviewer_name = ""
    sub_reviewer = SubReviewers.objects.filter(
        r_email=reviewer_email, position_id=position_id)
    external_reviewer = ExternalReviewers.objects.filter(
        r_email=reviewer_email, position_id=position_id)
    if len(sub_reviewer) > 0:
        reviewer_name = sub_reviewer[0].r_name
    elif len(external_reviewer) > 0:
        reviewer_name = external_reviewer[0].r_name
    else:
        reviewer_name = request.data["reviewer"]

    try:
        evaluation_obj = ReviewerEvaluation.objects.get(reviewer_email=reviewer_email, applicant_email=applicant_email,
                                                        position_id=position_id, current_stage=current_stage)
        evaluation_obj.evaluation = evaluation
        evaluation_obj.save()
    except ObjectDoesNotExist:
        ReviewerEvaluation.objects.create(reviewer_name=reviewer_name, reviewer_email=reviewer_email, evaluation=evaluation,
                                          position_id=position_id, applicant_email=applicant_email, current_stage=current_stage)

    return Response("Add or update reviewer evaluation successfully", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_reviewer_evaluation(request):
    position_id = request.query_params.get('position_id')
    applicant_email = request.query_params.get('applicant_email')
    evaluations = list(ReviewerEvaluation.objects.filter(
        position_id=position_id, applicant_email=applicant_email).values())
    return Response({"data": evaluations})


@api_view(['GET'])
def get_current_reviewer_evaluation(request):
    position_id = request.query_params.get('position_id')
    applicant_email = request.query_params.get('applicant_email')
    reviewer_email = request.query_params.get('reviewer_email')
    current_stage = request.query_params.get('current_stage')
    evaluation = ReviewerEvaluation(evaluation=0)
    try:
        evaluation = ReviewerEvaluation.objects.get(
            position_id=position_id, applicant_email=applicant_email, reviewer_email=reviewer_email, current_stage=current_stage)
        evaluation = model_to_dict(evaluation)
    except ObjectDoesNotExist:
        evaluation = model_to_dict(evaluation)
    return Response({"data": evaluation})


@api_view(['GET'])
def get_reviewers_list(request):
    sub_r_list = []
    ext_r_list = []
    user_id = request.query_params.get('user_id')
    user = User.objects.get(pk=user_id)
    position = Positions.objects.filter(user=user)
    s_r_email = set()
    e_r_email = set()
    for p in position:
        subreviewers = SubReviewers.objects.filter(position_id=p.id)
        ex_reviewers = ExternalReviewers.objects.filter(position_id=p.id)
        for s in subreviewers:
            if s.r_email in s_r_email:
                continue
            s_r_email.add(s.r_email)
            data1 = s.r_name + "&" + s.r_email
            sub_r_list.append(data1)
        for e in ex_reviewers:
            if e.r_email in e_r_email:
                continue
            e_r_email.add(e.r_email)
            data2 = e.r_name + "&" + e.r_email
            ext_r_list.append(data2)
    sub_r_list = list(set(list(sub_r_list)))
    ext_r_list = list(set(list(ext_r_list)))
    return Response({"sub_r_list": sub_r_list, "ext_r_list": ext_r_list})


@api_view(['POST'])
def remove_reviewer_from_list(request):
    r_email = request.data["r_email"]
    type = request.data["type"]
    if (type == "sub"):
        SubReviewers.objects.filter(r_email=r_email).delete()
    elif (type == "ext"):
        ExternalReviewers.objects.filter(r_email=r_email).delete()
    return Response("Remove Reviewer successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def update_live_interview_categories(request):
    liv1 = request.data["liv1"]
    liv2 = request.data["liv2"]
    liv3 = request.data["liv3"]
    liv4 = request.data["liv4"]
    liv5 = request.data["liv5"]
    oldliv1 = request.data["oldliv1"]
    oldliv2 = request.data["oldliv2"]
    oldliv3 = request.data["oldliv3"]
    oldliv4 = request.data["oldliv4"]
    oldliv5 = request.data["oldliv5"]
    position_id = request.data["position_id"]

    position = Positions.objects.get(pk=position_id)
    position.livcat1 = liv1
    position.livcat2 = liv2
    position.livcat3 = liv3
    position.livcat4 = liv4
    position.livcat5 = liv5
    position.save()

    if liv1 != oldliv1:
        for i in InvitedCandidates.objects.filter(positions=position, livcat=oldliv1):
            if i.livcat != "TBD":
                i.livcat = liv1
                i.save()
    if liv2 != oldliv2:
        for i in InvitedCandidates.objects.filter(positions=position, livcat=oldliv2):
            if i.livcat != "TBD":
                i.livcat = liv2
                i.save()
    if liv3 != oldliv3:
        for i in InvitedCandidates.objects.filter(positions=position, livcat=oldliv3):
            if i.livcat != "TBD":
                i.livcat = liv3
                i.save()
    if liv4 != oldliv4:
        for i in InvitedCandidates.objects.filter(positions=position, livcat=oldliv4):
            if i.livcat != "TBD":
                i.livcat = liv4
                i.save()
    if liv5 != oldliv5:
        for i in InvitedCandidates.objects.filter(positions=position, livcat=oldliv5):
            if i.livcat != "TBD":
                i.livcat = liv5
                i.save()

    return Response("Update Live Interview Categories successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def update_live_interview_candidate_status(request):
    candidate_id = request.data["candidate_id"]
    category = request.data["category"]
    invitedCandidates = InvitedCandidates.objects.get(pk=candidate_id)
    invitedCandidates.livcat = category
    invitedCandidates.save()

    return Response("Update Live Interview Candidate Status successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def update_shortlist_candidate_offer_status(request):
    candidate_id = request.data["candidate_id"]
    category = request.data["category"]
    invitedCandidates = InvitedCandidates.objects.get(pk=candidate_id)
    invitedCandidates.shortcat = category
    invitedCandidates.save()

    return Response("Update Live Interview Candidate Status successfully", status=status.HTTP_200_OK)
