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
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Profile
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.template.loader import get_template
from django.core.mail import EmailMessage
load_dotenv()

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
    message = get_template("accounts/account_activation_email.txt")
    context = {
        'user': user,
        'domain': current_site.domain,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
    }
    from_email = 'hirebeat.tech@gmail.com'
    to_list = [user.email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.send()

    return Response({
        "msg": "Email Sent Successfully"
    })