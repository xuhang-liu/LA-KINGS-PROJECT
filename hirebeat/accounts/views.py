import stripe
from django.db.models import Q
from django.db.models.functions import Length
import math
from django.contrib.postgres.search import SearchVector
from datetime import date, timedelta
from django.forms.models import model_to_dict
import requests
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
from .models import Profile, CandidatesInterview, ProfileDetail, EmployerPost, EmployerProfileDetail, ProfileDetailEducation, ProfileDetailExperience, RedeemCode, DeletedAccount
from questions.models import Positions, InterviewQuestions, InvitedCandidates
from videos.models import WPVideo
from questions.models import SubReviewers, ExternalReviewers
from jobs.models import Jobs
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.conf import settings
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

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
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

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
def check_user_login(request):
    print("==check user login")
    login_suc = False
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if "@" in username:
        print(username)
        users = User.objects.filter(email=username)
        user1 = authenticate(username=users[0].username, password=password)
        if user1 is not None:
            login_suc = True
        else:
            login_suc = False
    else:
        if user is not None:
            login_suc = True
        else:
            login_suc = False
    return Response({"data": login_suc})


@api_view(['POST'])
def get_user_fullname(request):
    print("==get user fullname")
    user = User.objects.get(pk=request.data["id"])
    return Response({user.get_full_name()})


@api_view(['GET'])
def get_ziprecruiter_jobs(request):
    url = 'https://api.ziprecruiter.com/jobs/v1?search={}&location={}&jobs_per_page={}&days_ago={}&refine_by_salary={}&api_key={}'
    search = request.query_params.get("search")
    location = request.query_params.get("location")
    jobs_per_page = 500
    days_ago = request.query_params.get("days_ago")
    refine_by_salary = request.query_params.get("refine_by_salary")
    api_key = os.getenv('REACT_APP_ZR_API_KEY')
    data = requests.get(url.format(
        search, location, jobs_per_page, days_ago, refine_by_salary, api_key)).json()

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


@api_view(['POST'])
def check_user_name(request):
    is_registered = False
    username_registered = False
    email_registered = False

    username = request.data["username"]
    email = request.data["email"]
    username_obj = User.objects.filter(username=username)
    email_obj = User.objects.filter(email=email)

    # queryset is empty if user not exist
    if len(email_obj) == 1:
        email_registered = True
        is_registered = True
    if len(username_obj) == 1:
        username_registered = True
        is_registered = True

    return Response({"is_registered": is_registered,
                     "email_registered": email_registered,
                     "username_registered": username_registered
                     })


@api_view(['GET'])
def get_company_name(request):
    position_id = request.query_params.get("position_id")
    position = Positions.objects.get(id=position_id)
    job = Jobs.objects.get(pk=position.job_id_in_jobs)
    job_title = job.job_title
    user_id = position.user_id
    profile = Profile.objects.get(user_id=user_id)
    company_name = profile.company_name
    return Response({"company_name": company_name, "job_title": job_title, })


@api_view(['POST'])
def update_record(request):
    email = request.data["email"]
    positions = request.data["positions"]
    interview_obj = CandidatesInterview.objects.get(
        email=email, positions=positions)
    interview_obj.is_recorded = True
    interview_obj.save()

    invited_obj = InvitedCandidates.objects.get(
        email=email, positions=positions)
    invited_obj.is_recorded = True
    # update saved video count
    invited_obj.save()

    return Response("Update record status successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def employer_notification(request):
    email = request.data["email"]
    positions = request.data["positions"]
    invited_obj = InvitedCandidates.objects.get(
        email=email, positions=positions)
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
    interview_obj = CandidatesInterview.objects.get(
        email=email, positions=positions)
    interview_obj.is_recorded = True
    interview_obj.save()

    invited_obj = InvitedCandidates.objects.get(
        email=email, positions=positions)
    invited_obj.is_recorded = True
    invited_obj.save()

    return Response("Update record status successfully after reloading", status=status.HTTP_200_OK)


@api_view(['GET'])
def get_record_status(request):
    position_id = request.query_params.get("position_id")
    email = request.query_params.get("email")
    interview_info = CandidatesInterview.objects.get(
        positions=position_id, email=email)
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
        job = Jobs.objects.get(pk=position.job_id_in_jobs)
        interview_questions = InterviewQuestions.objects.filter(
            positions_id=obj.positions_id)
        iq_count = len(interview_questions)
        create_date = InvitedCandidates.objects.get(
            email=email, positions_id=obj.positions_id).invite_date
        user = User.objects.get(pk=position.user_id)
        profile = Profile.objects.get(user_id=user.id)
        company_name = profile.company_name
        int_info = {"job_title": job.job_title, "is_recorded": obj.is_recorded, "position_id": obj.positions_id,
                    "iq_count": iq_count, "create_date": create_date, "company_name": company_name}
        received_interview.append(int_info)

    return Response({"received_interview": received_interview})


@api_view(['GET'])
def get_profile_detail(request):
    user_id = request.query_params.get("user_id")
    data = model_to_dict(ProfileDetail(user_id=user_id))
    data["educations"] = []
    data["experiences"] = []
    try:
        profile = ProfileDetail.objects.get(user_id=user_id)
        # get registered email
        if profile.email == "":
            user = User.objects.get(id=user_id)
            profile.email = user.email
            profile.save()
        data = model_to_dict(profile)
        # get education and experience here
        data["educations"] = list(ProfileDetailEducation.objects.filter(
            user_id=user_id).order_by("id").values())
        data["experiences"] = list(ProfileDetailExperience.objects.filter(
            user_id=user_id).order_by("id").values())
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
    logo_url = request.data["logo_url"]
    try:
        # update personal information
        user_profile = ProfileDetail.objects.get(user_id=user_id)
        user_profile.f_name = f_name
        user_profile.l_name = l_name
        user_profile.current_job_title = current_job_title
        user_profile.current_company = current_company
        user_profile.location = location
        user_profile.logo_url = logo_url
        user_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        ProfileDetail.objects.create(user_id=user_id, f_name=f_name, l_name=l_name, current_job_title=current_job_title,
                                     current_company=current_company, location=location, logo_url=logo_url)
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
        ProfileDetail.objects.create(
            user_id=user_id, email=email, linkedin=linkedin, website=website, github=github)
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
        ProfileDetail.objects.create(
            user_id=user_id, year_of_exp=year_of_exp, current_company=current_company, location=location)
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
        ProfileDetail.objects.create(
            user_id=user_id, resume_name=resume_name, resume_url=resume_url)
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
        ProfileDetail.objects.create(
            user_id=user_id, profile_rate=profile_rate, info_rate=info_rate)
    return Response("Create or Update profile rate successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def create_or_update_education(request):
    user_id = request.data["user_id"]
    data = request.data["data"]
    try:
        # update education
        education = ProfileDetailEducation.objects.get(id=data["educationId"])
        education.school = data["school"]
        education.graduation_date = data["graduationDate"]
        education.degree = data["degree"]
        education.major = data["major"]
        education.extra_major = data["extraMajor"]
        education.gpa = data["gpa"]
        education.save()

    except ObjectDoesNotExist:
        # create education
        education = ProfileDetailEducation.objects.create(user_id=user_id)
        education.school = data["school"]
        education.graduation_date = data["graduationDate"]
        education.degree = data["degree"]
        education.major = data["major"]
        education.extra_major = data["extraMajor"]
        education.gpa = data["gpa"]
        education.save()

    return Response("Create or Update education successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def delete_profile_detail_education(request):
    id = request.data["id"]
    ProfileDetailEducation.objects.filter(id=id).delete()
    return Response("Delete education successfully", status=status.HTTP_200_OK)


@api_view(['POST'])
def create_or_update_work_exp(request):
    user_id = request.data["user_id"]
    data = request.data["data"]
    try:
        # update work experience
        work_exp = ProfileDetailExperience.objects.get(id=data["workExpId"])
        work_exp.company = data["company"]
        work_exp.title = data["title"]
        work_exp.start_date = data["startDate"]
        work_exp.end_date = data["endDate"]
        work_exp.work_description = data["workDescription"]
        work_exp.save()
    except ObjectDoesNotExist:
        # add new work experience
        work_exp = ProfileDetailExperience.objects.create(user_id=user_id)
        work_exp.company = data["company"]
        work_exp.title = data["title"]
        work_exp.start_date = data["startDate"]
        work_exp.end_date = data["endDate"]
        work_exp.work_description = data["workDescription"]
        work_exp.save()
    return Response("Create or Update work experience successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def delete_profile_detail_work_exp(request):
    id = request.data["id"]
    ProfileDetailExperience.objects.filter(id=id).delete()
    return Response("Delete work experience successfully", status=status.HTTP_200_OK)


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
    employerprofiledetail = EmployerProfileDetail.objects.filter(
        user_id=user_id)
    if len(employerprofiledetail) > 0:
        data = EmployerProfileDetail.objects.filter(
            user_id=user_id).values()[0]
    else:
        EmployerProfileDetail.objects.create(user_id=user_id)
        data = EmployerProfileDetail.objects.filter(
            user_id=user_id).values()[0]
    # post = EmployerPost.objects.filer(user_id=user_id).values()  # todo append post here
    return Response({"data": data})

@api_view(['POST'])
def create_or_update_employer_name(request):
    user_id = request.data["user_id"]
    firstname = request.data["firstname"]
    lastname = request.data["lastname"]
    # self_description = request.data["self_description"]
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user_id=user_id)
        employer_profile.f_name = firstname
        # employer_profile.self_description = self_description
        employer_profile.l_name = lastname
        employer_profile.save()
    except ObjectDoesNotExist:
        # create personal information
        EmployerProfileDetail.objects.create(
            user_id=user_id, f_name=firstname, l_name=lastname)
    return Response("Create or Update employer name successfully", status=status.HTTP_201_CREATED)

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
        EmployerProfileDetail.objects.create(
            user_id=user_id, name=name, website=website)
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
        EmployerProfileDetail.objects.create(
            user_id=user_id, logo_url=logo_url)
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
        EmployerProfileDetail.objects.create(
            user_id=user_id, linkedin=linkedin, facebook=facebook, twitter=twitter)
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
        EmployerProfileDetail.objects.create(
            user_id=user_id, company_type=company_type, email=email, location=location, company_size=company_size)
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
        EmployerProfileDetail.objects.create(
            user_id=user_id, video_url=video_url)
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


@api_view(['POST'])
def update_employer_onboard(request):
    user_id = request.data["user_id"]
    viewed_employer_tutorial = request.data["viewed_employer_tutorial"]
    employer_profile = Profile.objects.get(user_id=user_id)
    employer_profile.viewed_employer_tutorial = viewed_employer_tutorial
    employer_profile.save()
    return Response("Update employer onboard successfully", status=status.HTTP_201_CREATED)


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
        data = list(EmployerPost.objects.filter(
            user_id=user_id).order_by('-created_at').values())

    else:
        # slice data, only fetch 2 records
        data = list(EmployerPost.objects.filter(user_id=user_id).order_by(
            '-created_at').values())[index:index+2]
    return Response({"data": data,
                     "total": count})


@api_view(['POST'])
def update_employer_post(request):
    post_id = request.data["post_id"]
    content = request.data["content"]
    post = EmployerPost.objects.get(id=post_id)
    post.content = content
    post.save()
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
            if (not profile.is_subreviwer) and (not profile.is_external_reviewer):
                data = True
            else:
                data = False
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
        ProfileDetail.objects.create(
            user_id=user_id, share_profile=share_profile, open_to_hr=open_to_hr)
    return Response("Update user profile sharing successfully", status=status.HTTP_200_OK)


# @api_view(['POST'])
# def create_employer_profile(request):
#     email = request.data["email"]
#     f_name = request.data["f_name"]
#     l_name = request.data["l_name"]
#     company_size = request.data["company_size"]
#     company_type = request.data["company_type"]
#     location = request.data["location"]
#     company_name = request.data["company_name"]
#     company_website = request.data["company_website"]
#     # user exists
#     try:
#         user = User.objects.filter(email=email)[0]
#         print(user)
#         # profile = EmployerProfileDetail.objects.filter(user=user)
#         # for i in range(len(profile)):
#         #     profile[i].email = email
#         #     profile[i].f_name = f_name
#         #     profile[i].l_name = l_name
#         #     profile[i].company_size = company_size
#         #     profile[i].company_type = company_type
#         #     profile[i].location = location
#         #     profile[i].name = company_name
#         #     profile[i].website = company_website
#         #     profile[i].save()
#     # user not exist
#     except ObjectDoesNotExist:
#         return Response("User not exist", status=status.HTTP_200_OK)

#     return Response("Create employer profile successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def check_freetrial_expire(request):
    expired = False
    user_id = request.data["user_id"]
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    expire_date = profile.datejoined.date()+timedelta(days=14)
    today = date.today()
    if profile.is_freetrial and not profile.is_external_reviewer and not profile.is_subreviwer:
        if(today > expire_date):
            expired = True
            try:
                profile.is_freetrial = False
                profile.candidate_limit = 25
                profile.position_limit = 0
                profile.plan_interval = "Regular"
                profile.membership = "Regular"
                profile.save()
            except ObjectDoesNotExist:
                return Response("User not exist", status=status.HTTP_201_CREATED)
    else:
        expired = False
    return Response({"data": expired})


@api_view(['POST'])
def get_sourcing_data(request):
    keywords = request.data["keywords"]
    location = request.data["location"]
    skills = request.data["skills"]
    position = request.data["position"]
    has_video = request.data["has_video"]
    page = request.data["page"]
    has_filter = request.data["has_filter"]
    loc_radius = request.data["loc_radius"]
    data = {
        "total_page": 0,
        "total_records": 0,
        "profiles": []
    }
    if has_filter:
        res = []
        # has video
        if has_video:
            res = ProfileDetail.objects.annotate(
                keywords=SearchVector('f_name', 'l_name',
                                      'current_job_title', 'current_company'),
                video_url_len=Length('video_url')
            ).filter(keywords__icontains=keywords, video_url_len__gt=0, open_to_hr=True)
            # further select skill, location and position
            if len(skills) > 0:
                res = res.filter(skills__contains=skills)
            if len(location) > 0:
                if loc_radius == 0:
                    res = res.filter(location=location)
                else:
                    for p in range(len(res)):
                        destination = res[p].location
                        if destination is not None and len(destination) > 0:
                            url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins={location}&destinations={destination}&units=imperial&key=AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U".format(location=location, destination=destination)
                            payload={}
                            headers = {}
                            response = requests.request("GET", url, headers=headers, data=payload)
                            if float(response.json()["rows"][0]["elements"][0]["distance"]["text"].split(" ")[0].replace(",", "")) > float(loc_radius):
                                res = res.exclude(pk=res[p].id)
            if len(position) > 0:
                res = res.filter(current_job_title__icontains=position)
            res = res.values()
        # no video
        else:
            res = ProfileDetail.objects.annotate(
                keywords=SearchVector('f_name', 'l_name',
                                      'current_job_title', 'current_company'),
            ).filter(keywords__icontains=keywords, open_to_hr=True)
            # further select skill, location and position
            if len(skills) > 0:
                res = res.filter(skills__contains=skills)
            if len(location) > 0:
                if loc_radius == 0:
                    res = res.filter(location=location)
                else:
                    for p in range(len(res)):
                        destination = res[p].location
                        if destination is not None and len(destination) > 0:
                            url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins={location}&destinations={destination}&units=imperial&key=AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U".format(location=location, destination=destination)
                            payload={}
                            headers = {}
                            response = requests.request("GET", url, headers=headers, data=payload)
                            if float(response.json()["rows"][0]["elements"][0]["distance"]["text"].split(" ")[0].replace(",", "")) > float(loc_radius):
                                res = res.exclude(pk=res[p].id)
            if len(position) > 0:
                res = res.filter(current_job_title__icontains=position)
            res = res.values()

        data["total_records"] = len(res)
        data["total_page"] = math.ceil(len(res) / 20)
        if data["total_records"] <= 20:
            data["profiles"] = list(res)
        else:
            begin = (page - 1) * 20
            end = page * 20
            data["profiles"] = list(res)[begin:end]
    else:
        res = ProfileDetail.objects.filter(open_to_hr=True).values()
        data["total_records"] = len(res)
        data["total_page"] = math.ceil(len(res) / 20)
        if data["total_records"] <= 20:
            data["profiles"] = list(res)
        else:
            begin = (page - 1) * 20
            end = page * 20
            data["profiles"] = list(res)[begin:end]
    return Response({"data": data})


@api_view(['POST'])
def go_stripe_customer_portal(request):
    id = request.data["id"]
    user = User.objects.get(pk=id)
    profile = Profile.objects.get(user=user)
    session = stripe.billing_portal.Session.create(
        customer=profile.customer_id,
        return_url='https://app.hirebeat.co/employer_dashboard',
    )

    return Response({"session_url": session.url})

@api_view(['GET'])
def check_if_it_reviewer(request):
    email = request.query_params.get("email")
    is_reviewer = False
    subreviewer = SubReviewers.objects.filter(r_email = email)
    exreviewer = ExternalReviewers.objects.filter(r_email = email)
    if (len(subreviewer)>0 or len(exreviewer)>0):
        is_reviewer = True

    return Response({"is_reviewer": is_reviewer})

@api_view(['POST'])
def add_credit_to_user(request):
    user_id = request.data["user_id"]
    user = User.objects.get(pk=user_id)
    profile = Profile.objects.get(user=user)
    profile.payg_credit += 1
    profile.save()

    return Response("Add credit to user successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def check_code(request):
    code = request.data['code']
    redeemrow= RedeemCode.objects.filter(code=code).first()
    
    try:
        if redeemrow is not None:
            if redeemrow.is_redeemed == True:
                return Response({"error": "Code was already redeemed, please try another code!"})
            else:
                users = Profile.objects.filter(user_id=request.data["id"]) 
                user = users[0]
                redeemrow.is_redeemed = True
                redeemrow.dateredeemed = date.today()
                redeemrow.save()
                plan = redeemrow.plan
                # Employer plans
                if plan == 'Basic':
                    user.membership = 'Premium'
                    user.plan_interval = 'Pro'
                    user.position_limit = 1
                elif plan == 'Pro':
                    user.membership = 'Premium'
                    user.plan_interval = 'Pro'
                    user.position_limit = 5
                elif plan == 'Pro Plus':
                    user.membership = 'Premium'
                    user.plan_interval = 'Pro'
                    user.position_limit = 10
                elif plan == 'Premium Lite':
                    user.membership = 'Premium'
                    user.plan_interval = 'Pro'
                    user.position_limit = 50
                elif plan == 'Premium Ultimate':
                    user.membership = 'Premium'
                    user.plan_interval = "Premium"
                    user.position_limit = 1000
                # job seeker plan
                elif plan == "Life Bundle":
                    user.membership = 'Premium'
                    user.plan_interval = "Premium"
                    user.feedback_limit = 1000
                    user.save_limit = 1000
                    user.save_resume_limit = 1000
                user.is_freetrial = False
                user.save()
                return Response({"msg" : "Add a redeem code!", "plan": user.plan_interval})
        else:
            return Response({"error" : "Invalid Code. Please try again!"})
    except ObjectDoesNotExist:
        return Response({"error" : redeemrow})
  

@api_view((['POST']))
def create_request_email(request):
    # get data from frontend
    category = request.data["category"]
    firstName = request.data["firstName"]
    lastName = request.data["lastName"]
    companyName = request.data["companyName"]
    email = request.data["email"]
    phone = request.data["phone"]
    ticket = request.data["ticket"]
    feedback = request.data["feedback"]

    subject = "You have new feedback from client"
    message = get_template("accounts/request_support_email.html")
    context = {
        'email': email,
        'firstName': firstName,
        'lastName': lastName,
        'companyName': companyName,
        'phone': phone,
        'ticket': ticket,
        'category': category,
        'feedback': feedback,
    }
    from_email = email
    to_list = ['ning.wei@hirebeat.co']
    content = message.render(context)
    emailsent = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    emailsent.content_subtype = "html"
    emailsent.send()
    
    return Response({
        "msg": "Email sent successfully"
    })
    

@api_view(['POST'])
def delete_account(request):
    user = User.objects.get(pk=request.data["id"])
    try:
        if user is not None:
            # find company name
            user_profile = Profile.objects.get(user_id=request.data["id"])
            user_profile.request_delete = True
            user_profile.save()
            
            # store delete account
            delete_date = date.today()
            email = user.email
            company_name = user_profile.company_name
            DeletedAccount.objects.create(email=email, company_name=company_name, delete_date=delete_date)
            
            # write email to admin
            subject = "Account Deletion Request"
            message = get_template("accounts/request_delete_email.html")
            context = {
                'id': user.id,
                'email': email,
                'company': company_name,
                'date': delete_date
            }
            to_list = ['ning.wei@hirebeat.co']
            bcc_list = ['xuhang.liu@hirebeat.co']
            content = message.render(context)
            emailsent = EmailMessage(
                subject,
                content,
                settings.DEFAULT_FROM_EMAIL,
                to_list,
                bcc_list
            )
            emailsent.content_subtype = "html"
            emailsent.send()
            
            return Response({
                "msg": "Acccount deleted successfully"
            })
            
    except ObjectDoesNotExist:
        return Response({"error": "Acount does not exist"})

@api_view((['POST']))
def deactivate_fraud_user(request):
    email = request.data["email"]
    user_found = False
    user = User.objects.filter(email=email)
    if (len(user)>0):
        user_found = True
        profile = Profile.objects.filter(user=user[0])
        if (len(profile)>0):
            profile[0].membership = "Regular"
            profile[0].plan_interval = "fraud"
            profile[0].candidate_limit = 25
            profile[0].position_limit = 0
            profile[0].is_freetrial = False
            profile[0].save()
        jobs = Jobs.objects.filter(user=user[0])
        if (len(jobs)>0):
            for j in range(len(jobs)):
                jobs[j].is_closed = 1
                jobs[j].save()
        user[0].is_active = False
        user[0].save()

    return Response({
        "user_found": user_found
    })
