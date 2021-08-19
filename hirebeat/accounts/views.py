import boto
import mimetypes
import json
from django.http import HttpResponse
import os
from dotenv import load_dotenv
from django.views.generic import View
from django.contrib.auth.models import User
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Profile, CandidatesInterview, ProfileDetail, EmployerPost, EmployerProfileDetail
from questions.models import Positions, InterviewQuestions, InvitedCandidates
from videos.models import WPVideo
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.template.loader import get_template
from django.core.mail import EmailMessage
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
load_dotenv()
import requests
from django.forms.models import model_to_dict
from datetime import date, timedelta

if not boto.config.get('s3', 'use-sigv4'):
    boto.config.add_section('s3')
    boto.config.set('s3', 'use-sigv4', 'True')
boto.config.set('s3', 'host', 's3.amazonaws.com')

conn = boto.connect_s3(os.getenv("AWSAccessKeyId"), os.getenv("AWSSecretKey"))
 
def sign_s3_upload(request):
    print("===== sign api called =======")
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###
 
    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("Bucket"),
        object_name,
        headers = {'Content-Type': content_type, 'x-amz-acl':'public-read'})
    
    return HttpResponse(json.dumps({'signedUrl': signed_url}))


class ActivateAccount(View):

    def get(self, request, uidb64, token, *args, **kwargs):
        account_activation_token = PasswordResetTokenGenerator()
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if user is not None and account_activation_token.check_token(user, token):
            # user.is_active = True
            user.profile.email_confirmed = True
            user.save()
            return render(request, 'accounts/activation_success.html')
        else:
            return render(request, 'accounts/activation_failure.html')

@api_view(['POST'])
def upgrade_accounts(request):
    print("===Upgrade Account Called===")
    premiums = []
    # retrieve satisfying users
    email_suffix = request.data["email_suffix"]
    users = User.objects.filter(email__contains=email_suffix)

    # upgrade accounts(change save limit & membership)
    num = len(users)
    for i in range(num):
        user_name = users[i].username
        user_id = users[i].id
        account = {"id": user_id, "username": user_name}
        premiums.append(account)
        user_profile = Profile.objects.get(user_id=user_id)

        user_profile.membership = "Premium"
        user_profile.plan_interval = "month"
        user_profile.save_limit = 1000
        user_profile.save()

    return Response({
        "premiums": premiums
    })

@api_view(['POST'])
def resend_activation_email(request):
    print("===Resend Email Called===")
    user = User.objects.get(pk=request.data["id"])
    account_activation_token = PasswordResetTokenGenerator()
    current_site = get_current_site(request)
    subject = 'Please Activate Your Hirebeat Account'
    message = get_template("accounts/account_activation_email.html")
    context = {
        'user': user,
        'domain': current_site.domain,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
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

    return Response({
        "msg": "Email Sent Successfully"
    })

@api_view(['POST'])
def update_user_email(request):
    print("===Update User Email Called===")
    email = request.data["email"]
    user = User.objects.get(pk=request.data["id"])
    user.email = email
    user.save()
    return Response({
        "email": email
    })

@api_view(['POST'])
def update_user_password(request):
    print("===Update User Password Called===")
    newPassword = request.data["newPassword"]
    user = User.objects.get(pk=request.data["id"])
    user.set_password(newPassword)
    user.save()
    return Response({
        "newPassword": newPassword
    })

@api_view(['POST'])
def check_password(request):
    print("==check password")
    user = User.objects.get(pk=request.data["id"])
    password = request.data['password']
    return Response({user.check_password(password)})

@api_view(['POST'])
def get_user_fullname(request):
    print("==get user fullname")
    user = User.objects.get(pk=request.data["id"])
    return Response({user.get_full_name()})

@api_view(['GET'])
def get_ziprecruiter_jobs(request):
    url = 'https://api.ziprecruiter.com/jobs/v1?search={}&location={}&jobs_per_page={}&days_ago={}&refine_by_salary={}&api_key={}'
    search= request.query_params.get("search")
    location=request.query_params.get("location")
    jobs_per_page = 500
    days_ago = request.query_params.get("days_ago")
    refine_by_salary = request.query_params.get("refine_by_salary")
    api_key = os.getenv('REACT_APP_ZR_API_KEY')
    data = requests.get(url.format(search, location, jobs_per_page, days_ago, refine_by_salary, api_key)).json()

    return Response({"data": data})

@api_view(['POST'])
def check_user_registration(request):
    is_registered = False
    email = request.data["email"]
    user = User.objects.filter(email=email)
    # queryset is empty if user not exist
    if len(user) == 1:
        is_registered = True

    return Response({"is_registered": is_registered})

@api_view(['GET'])
def get_company_name(request):
    position_id = request.query_params.get("position_id")
    position = Positions.objects.get(id=position_id)
    job_title = position.job_title
    user_id = position.user_id
    profile = Profile.objects.get(user_id=user_id)
    company_name = profile.company_name
    return Response({"company_name": company_name, "job_title": job_title,})

@api_view(['POST'])
def update_record(request):
    email = request.data["email"]
    positions = request.data["positions"]
    interview_obj = CandidatesInterview.objects.get(email=email, positions=positions)
    interview_obj.is_recorded = True
    interview_obj.save()

    invited_obj = InvitedCandidates.objects.get(email=email, positions=positions)
    invited_obj.is_recorded = True
    # update saved video count
    invited_obj.save()

    return Response("Update record status successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def employer_notification(request):
    email = request.data["email"]
    positions = request.data["positions"]
    invited_obj = InvitedCandidates.objects.get(email=email, positions=positions)
    can_name = invited_obj.name
    position = Positions.objects.get(id=positions)
    user = User.objects.get(pk=position.user_id)
    print("===Employer Notify Email Called===")
    subject = 'Interview Completed: ' + position.job_title + " from " + can_name
    message = get_template("accounts/employer_notification_email.html")
    context = {
        'name': can_name,
        'email': email,
        'title': position.job_title,
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

    return Response("Send employer notification successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def update_record_refresh(request):
    email = request.data["email"]
    positions = request.data["positions"]
    interview_obj = CandidatesInterview.objects.get(email=email, positions=positions)
    interview_obj.is_recorded = True
    interview_obj.save()

    invited_obj = InvitedCandidates.objects.get(email=email, positions=positions)
    invited_obj.is_recorded = True
    invited_obj.save()

    return Response("Update record status successfully after reloading", status=status.HTTP_200_OK)

@api_view(['GET'])
def get_record_status(request):
    position_id = request.query_params.get("position_id")
    email = request.query_params.get("email")
    interview_info = CandidatesInterview.objects.get(positions=position_id, email=email)
    is_recorded = interview_info.is_recorded
    url_clicked = interview_info.url_clicked

    return Response({
        "is_recorded": is_recorded,
         "url_clicked": url_clicked,
         })

@api_view(['GET'])
def get_received_interview(request):
    received_interview = []
    email = request.query_params.get("email")
    can_int = CandidatesInterview.objects.filter(email=email)
    for i in range(len(can_int)):
        obj = can_int[i]
        position = Positions.objects.get(pk=obj.positions_id)
        interview_questions = InterviewQuestions.objects.filter(positions_id=obj.positions_id)
        iq_count = len(interview_questions)
        create_date = InvitedCandidates.objects.get(email=email, positions_id=obj.positions_id).invite_date
        user = User.objects.get(pk=position.user_id)
        profile = Profile.objects.get(user_id=user.id)
        company_name = profile.company_name
        int_info = {"job_title": position.job_title, "is_recorded": obj.is_recorded, "position_id": obj.positions_id, "iq_count": iq_count, "create_date": create_date, "company_name": company_name}
        received_interview.append(int_info)

    return Response({"received_interview": received_interview})

@api_view(['GET'])
def get_profile_detail(request):
    user_id = request.query_params.get("user_id")
    data = model_to_dict(ProfileDetail(user_id=user_id))
    try:
        profile = ProfileDetail.objects.get(user_id=user_id)
        # get registered email
        if profile.email == "":
            user = User.objects.get(id=user_id)
            profile.email = user.email
            profile.save()
        data = model_to_dict(profile)
    except ObjectDoesNotExist:
        return Response({"data": data})
    return Response({"data": data})

@api_view(['POST'])
def create_or_update_personal_info(request):
    user_id = request.data["user_id"]
    f_name = request.data["f_name"]
    l_name = request.data["l_name"]
    current_job_title = request.data["current_job_title"]
    current_company = request.data["current_company"]
    location = request.data["location"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.f_name = f_name
        user_profile.l_name = l_name
        user_profile.current_job_title = current_job_title
        user_profile.current_company = current_company
        user_profile.location = location
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, f_name=f_name, l_name=l_name, current_job_title=current_job_title,
                                     current_company=current_company, location=location)
    return Response("Create or Update personal info successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_social_media(request):
    user_id = request.data["user_id"]
    email = request.data["email"]
    linkedin = request.data["linkedin"]
    website = request.data["website"]
    github = request.data["github"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.email = email
        user_profile.linkedin = linkedin
        user_profile.website = website
        user_profile.github = github
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, email=email, linkedin=linkedin, website=website, github=github)
    return Response("Create or Update social media successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_job_type(request):
    user_id = request.data["user_id"]
    job_type = request.data["job_type"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.job_type = job_type
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, job_type=job_type)
    return Response("Create or Update job type successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_skills(request):
    user_id = request.data["user_id"]
    skills = request.data["skills"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.skills = skills
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, skills=skills)
    return Response("Create or Update skills successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_languages(request):
    user_id = request.data["user_id"]
    languages = request.data["languages"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.languages = languages
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, languages=languages)
    return Response("Create or Update languages successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_basic_info(request):
    user_id = request.data["user_id"]
    year_of_exp = request.data["year_of_exp"]
    current_company = request.data["current_company"]
    location = request.data["location"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.year_of_exp = year_of_exp
        user_profile.current_company = current_company
        user_profile.location = location
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, year_of_exp=year_of_exp, current_company=current_company, location=location)
    return Response("Create or Update basic info successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_video(request):
    user_id = request.data["user_id"]
    video_url = request.data["video_url"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.video_url = video_url
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, video_url=video_url)
    return Response("Create or Update video successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_summary(request):
    user_id = request.data["user_id"]
    summary = request.data["summary"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.summary = summary
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, summary=summary)
    return Response("Create or Update summary successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_resume(request):
    user_id = request.data["user_id"]
    resume_name = request.data["resume_name"]
    resume_url = request.data["resume_url"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.resume_name = resume_name
        user_profile.resume_url = resume_url
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, resume_name=resume_name, resume_url=resume_url)
    return Response("Create or Update resume successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_profile_rate(request):
    user_id = request.data["user_id"]
    profile_rate = request.data["profile_rate"]
    info_rate = request.data["info_rate"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.profile_rate = profile_rate
        user_profile.info_rate = info_rate
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, profile_rate=profile_rate, info_rate=info_rate)
    return Response("Create or Update profile rate successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_education(request):
    user_id = request.data["user_id"]
    data = request.data["data"]
    try:
        # first education
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.school1 = data[0]["school1"]
        user_profile.graduation_date1 = data[0]["graduation_date1"]
        user_profile.degree1 = data[0]["degree1"]
        user_profile.major1 = data[0]["major1"]
        user_profile.extra_major1 = data[0]["extra_major1"]
        user_profile.gpa1 = data[0]["gpa1"]
        # second education
        user_profile.school2 = data[1]["school2"]
        user_profile.graduation_date2 = data[1]["graduation_date2"]
        user_profile.degree2 = data[1]["degree2"]
        user_profile.major2 = data[1]["major2"]
        user_profile.extra_major2 = data[1]["extra_major2"]
        user_profile.gpa2 = data[1]["gpa2"]
        # third education
        user_profile.school3 = data[2]["school3"]
        user_profile.graduation_date3 = data[2]["graduation_date3"]
        user_profile.degree3 = data[2]["degree3"]
        user_profile.major3 = data[2]["major3"]
        user_profile.extra_major3 = data[2]["extra_major3"]
        user_profile.gpa3 = data[2]["gpa3"]
        user_profile.save()

    except ObjectDoesNotExist:
        # first education
        user_profile = ProfileDetail.objects.create(user_id=user_id)
        user_profile.school1 = data[0]["school1"]
        user_profile.graduation_date1 = data[0]["graduation_date1"]
        user_profile.degree1 = data[0]["degree1"]
        user_profile.major1 = data[0]["major1"]
        user_profile.extra_major1 = data[0]["extra_major1"]
        user_profile.gpa1 = data[0]["gpa1"]
        # second education
        user_profile.school2 = data[1]["school2"]
        user_profile.graduation_date2 = data[1]["graduation_date2"]
        user_profile.degree2 = data[1]["degree2"]
        user_profile.major2 = data[1]["major2"]
        user_profile.extra_major2 = data[1]["extra_major2"]
        user_profile.gpa2 = data[1]["gpa2"]
        # third education
        user_profile.school3 = data[2]["school3"]
        user_profile.graduation_date3 = data[2]["graduation_date3"]
        user_profile.degree3 = data[2]["degree3"]
        user_profile.major3 = data[2]["major3"]
        user_profile.extra_major3 = data[2]["extra_major3"]
        user_profile.gpa3 = data[2]["gpa3"]
        user_profile.save()
    return Response("Create or Update education successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_work_exp(request):
    user_id = request.data["user_id"]
    data = request.data["data"]
    try:
        # first education
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.company1 = data[0]["company1"]
        user_profile.title1 = data[0]["title1"]
        user_profile.start_date1 = data[0]["start_date1"]
        user_profile.end_date1 = data[0]["end_date1"]
        user_profile.work_description1 = data[0]["work_description1"]

        user_profile.company2 = data[1]["company2"]
        user_profile.title2 = data[1]["title2"]
        user_profile.start_date2 = data[1]["start_date2"]
        user_profile.end_date2 = data[1]["end_date2"]
        user_profile.work_description2 = data[1]["work_description2"]

        user_profile.company3 = data[2]["company3"]
        user_profile.title3 = data[2]["title3"]
        user_profile.start_date3 = data[2]["start_date3"]
        user_profile.end_date3 = data[2]["end_date3"]
        user_profile.work_description3 = data[2]["work_description3"]

        user_profile.company4 = data[3]["company4"]
        user_profile.title4 = data[3]["title4"]
        user_profile.start_date4 = data[3]["start_date4"]
        user_profile.end_date4 = data[3]["end_date4"]
        user_profile.work_description4 = data[3]["work_description4"]

        user_profile.company5 = data[4]["company5"]
        user_profile.title5 = data[4]["title5"]
        user_profile.start_date5 = data[4]["start_date5"]
        user_profile.end_date5 = data[4]["end_date5"]
        user_profile.work_description5 = data[4]["work_description5"]
        user_profile.save()
    except ObjectDoesNotExist:
        user_profile = ProfileDetail.objects.create(user_id=user_id)
        user_profile.company1 = data[0]["company1"]
        user_profile.title1 = data[0]["title1"]
        user_profile.start_date1 = data[0]["start_date1"]
        user_profile.end_date1 = data[0]["end_date1"]
        user_profile.work_description1 = data[0]["work_description1"]

        user_profile.company2 = data[1]["company2"]
        user_profile.title2 = data[1]["title2"]
        user_profile.start_date2 = data[1]["start_date2"]
        user_profile.end_date2 = data[1]["end_date2"]
        user_profile.work_description2 = data[1]["work_description2"]

        user_profile.company3 = data[2]["company3"]
        user_profile.title3 = data[2]["title3"]
        user_profile.start_date3 = data[2]["start_date3"]
        user_profile.end_date3 = data[2]["end_date3"]
        user_profile.work_description3 = data[2]["work_description3"]

        user_profile.company4 = data[3]["company4"]
        user_profile.title4 = data[3]["title4"]
        user_profile.start_date4 = data[3]["start_date4"]
        user_profile.end_date4 = data[3]["end_date4"]
        user_profile.work_description4 = data[3]["work_description4"]

        user_profile.company5 = data[4]["company5"]
        user_profile.title5 = data[4]["title5"]
        user_profile.start_date5 = data[4]["start_date5"]
        user_profile.end_date5 = data[4]["end_date5"]
        user_profile.work_description5 = data[4]["work_description5"]
        user_profile.save()
    return Response("Create or Update work experience successfully", status=status.HTTP_201_CREATED)


def upload_profile_resume(request):
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("Profile_Resume"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

def upload_profile_video(request):
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("Profile_Video"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

@api_view(['POST'])
def subreviewer_update_comment(request):
    video_pk = request.data["video_pk"]
    positionId = request.data["positionId"]
    profile_id = request.data["profile_id"]
    position = Positions.objects.get(id=positionId)
    wpvideo = WPVideo.objects.get(pk=video_pk)
    puser = User.objects.get(pk=position.user_id)
    rprofile = Profile.objects.get(pk=profile_id)
    ruser = User.objects.get(pk=rprofile.user_id)
    print("===Reviewer Update Comment Notify Email Called===")
    subject = 'New Sub-Reviewer comments for ' + position.job_title + ' position'
    message = get_template("accounts/reviewer_comment_notification_email.html")
    context = {
        'ruser': ruser.username,
        'ruser_email': ruser.email,
        'cuser': wpvideo.email,
        'title': position.job_title,
    }
    from_email = 'HireBeat Team <tech@hirebeat.co>'
    to_list = [puser.email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()

    return Response("Send employer notification successfully", status=status.HTTP_200_OK)

@api_view(['GET'])
def get_employer_profile_detail(request):
    user_id = request.query_params.get("user_id")
    data = {}
    employerprofiledetail = EmployerProfileDetail.objects.filter(user_id=user_id)
    if len(employerprofiledetail) > 0:
        data = EmployerProfileDetail.objects.filter(user_id=user_id).values()[0]
    else:
        EmployerProfileDetail.objects.create(user_id=user_id)
        data = EmployerProfileDetail.objects.filter(user_id=user_id).values()[0]
    # post = EmployerPost.objects.filer(user_id=user_id).values()  # todo append post here
    return Response({"data": data})

@api_view(['POST'])
def create_or_update_employer_info(request):
    user_id = request.data["user_id"]
    name = request.data["name"]
    website = request.data["website"]
    # self_description = request.data["self_description"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.name = name
        # employer_profile.self_description = self_description
        employer_profile.website = website
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, name=name, website=website)
    return Response("Create or Update employer info successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_employer_logo(request):
    user_id = request.data["user_id"]
    logo_url = request.data["logo_url"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.logo_url = logo_url
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, logo_url=logo_url)
    return Response("Create or Update employer logo successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_employer_social_media(request):
    user_id = request.data["user_id"]
    linkedin = request.data["linkedin"]
    facebook = request.data["facebook"]
    twitter = request.data["twitter"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.linkedin = linkedin
        employer_profile.facebook = facebook
        employer_profile.twitter = twitter
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, linkedin=linkedin, facebook=facebook, twitter=twitter)
    return Response("Create or Update employer social media successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_employer_basic_info(request):
    user_id = request.data["user_id"]
    company_type = request.data["company_type"]
    email = request.data["contactEmail"]
    location = request.data["location"]
    company_size = request.data["company_size"]
        
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.company_type = company_type
        employer_profile.email = email
        employer_profile.location = location
        employer_profile.company_size = company_size
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, company_type=company_type, email=email, location=location, company_size=company_size)
    return Response("Create or Update employer basic info successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_employer_video(request):
    user_id = request.data["user_id"]
    video_url = request.data["video_url"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.video_url = video_url
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, video_url=video_url)
    return Response("Create or Update video successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_employer_summary(request):
    user_id = request.data["user_id"]
    summary = request.data["summary"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.summary = summary
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(user_id=user_id, summary=summary)
    return Response("Create or Update employer summary successfully", status=status.HTTP_201_CREATED)


def upload_employer_profile_video(request):
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("Employer_Profile_Video"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

@api_view(['GET'])
def get_employer_post(request):
    user_id = request.query_params.get("user_id")
    index = int(request.query_params.get("index"))
    count = EmployerPost.objects.filter(user_id=user_id).count()
    if count <= 2:
        data = list(EmployerPost.objects.filter(user_id=user_id).order_by('-created_at').values())

    else:
        # slice data, only fetch 2 records
        data = list(EmployerPost.objects.filter(user_id=user_id).order_by('-created_at').values())[index:index+2]
    return Response({"data": data,
                     "total": count})

@api_view(['POST'])
def update_employer_post(request):
    post_id = request.data["post_id"]
    content = request.data["content"]
    post = EmployerPost.objects.get(id=post_id)
    post.content = content
    post.save();
    return Response("Update employer post successfully", status=status.HTTP_205_RESET_CONTENT)

@api_view(['POST'])
def add_employer_post(request):
    user_id = request.data["user_id"]
    content = request.data["content"]
    EmployerPost.objects.create(user_id=user_id, content=content)
    return Response("Create employer post successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def delete_employer_post(request):
    post_id = request.data["post_id"]
    EmployerPost.objects.filter(id=post_id).delete()
    return Response("Delete employer post successfully", status=status.HTTP_202_ACCEPTED)

def upload_employer_logo(request):
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("Employer_Logo"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

def upload_user_logo(request):
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("User_Logo"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

@api_view(['POST'])
def create_or_update_user_logo(request):
    user_id = request.data["user_id"]
    logo_url = request.data["logo_url"]
    try:
        # update profile detail information
        profile = ProfileDetail.objects.get(user_id=user_id)
        profile.logo_url = logo_url
        profile.save()
    except ObjectDoesNotExist:
        # create profile detail information
        ProfileDetail.objects.create(user_id=user_id, logo_url=logo_url)
    return Response("Create or Update user logo successfully", status=status.HTTP_201_CREATED)

@api_view(['GET'])
def check_user_existence(request):
    email = request.query_params.get("email")
    data = False
    user = User.objects.filter(email=email)
    if len(user) != 0:
        for i in range(len(user)):
            profile = Profile.objects.get(user=user[i])
            if profile.is_subreviwer or profile.is_external_reviewer:
                data = False
            else:
                data = True
    return Response({"data": data})

@api_view(['GET'])
def check_company_name_existence(request):
    companyName = request.query_params.get("companyName")
    data = False
    profile = Profile.objects.filter(company_name=companyName)
    if len(profile) != 0:
        data = True
    return Response({"data": data})

@api_view(['POST'])
def create_profile(request):
    email = request.data["email"]
    f_name = request.data["f_name"]
    l_name = request.data["l_name"]
    location = request.data["location"]
    resume_url = request.data["resume_url"]
    resume_name = request.data["resume_name"]
    logo_url = request.data["logo_url"]
    current_job_title = request.data["current_job_title"]
    current_company = request.data["current_company"]
    job_type = request.data["job_type"]
    open_to_hr = request.data["open_to_hr"]

    # user exists
    try:
        user = User.objects.get(email=email)
        profile = ProfileDetail(user_id=user.id)
        profile.email = email
        profile.f_name = f_name
        profile.l_name = l_name
        profile.location = location
        profile.resume_url = resume_url
        profile.resume_name = resume_name
        profile.logo_url = logo_url
        profile.current_job_title = current_job_title
        profile.current_company = current_company
        profile.job_type = job_type
        profile.open_to_hr = open_to_hr
        profile.save()
    # user not exist
    except ObjectDoesNotExist:
        return Response("User not exist", status=status.HTTP_201_CREATED)

    return Response("Create or Update user profile successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def create_or_update_profile_sharing(request):
    user_id = request.data["user_id"]
    share_profile = request.data["share_profile"]
    open_to_hr = request.data["open_to_hr"]

    try:
        # update profile detail information
        profile = ProfileDetail.objects.get(user_id=user_id)
        profile.share_profile = share_profile
        profile.open_to_hr = open_to_hr
        profile.save()
    except ObjectDoesNotExist:
        # create profile detail information
        ProfileDetail.objects.create(user_id=user_id, share_profile=share_profile, open_to_hr=open_to_hr)
    return Response("Update user profile sharing successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def create_employer_profile(request):
    email = request.data["email"]
    f_name = request.data["f_name"]
    l_name = request.data["l_name"]
    company_size = request.data["company_size"]
    company_type = request.data["company_type"]
    location = request.data["location"]

    # user exists
    try:
        user = User.objects.get(email=email)
        profile = EmployerProfileDetail(user_id=user.id)
        profile.email = email
        profile.f_name = f_name
        profile.l_name = l_name
        profile.company_size = company_size
        profile.company_type = company_type
        profile.location = location
        profile.save()
    # user not exist
    except ObjectDoesNotExist:
        return Response("User not exist", status=status.HTTP_200_OK)

    return Response("Create employer profile successfully", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def check_freetrial_expire(request):
    expired = False
    user_id = request.data["user_id"]
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    expire_date = profile.datejoined.date()+timedelta(days=14)
    today = date.today()
    if profile.is_freetrial:
        if(today > expire_date):
            expired = True
            try:
                profile.is_freetrial = False
                profile.candidate_limit = 25
                profile.position_limit = 1
                profile.plan_interval = "Regular"
                profile.membership = "Regular"
                profile.save()
            except ObjectDoesNotExist:
                return Response("User not exist", status=status.HTTP_201_CREATED)
    else:
        expired = False
    return Response({"data": expired})
