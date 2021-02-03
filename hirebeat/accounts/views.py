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
from .models import Profile, CandidatesInterview
from questions.models import Positions, InterviewQuestions, InvitedCandidates
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.template.loader import get_template
from django.core.mail import EmailMessage
from rest_framework import status
load_dotenv()
import requests

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
    from_email = 'HireBeat Team'
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
    user_id = position.user_id
    profile = Profile.objects.get(user_id=user_id)
    company_name = profile.company_name

    return Response({"company_name": company_name})

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
    }
    from_email = 'HireBeat Team'
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
