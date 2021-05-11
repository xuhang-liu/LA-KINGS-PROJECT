from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer
from accounts.models import Profile, CandidatesInterview
from django.contrib.auth.models import User
from resume.models import Resume
from videos.models import Video
from questions.models import Positions, InvitedCandidates, SubReviewers
from rest_framework import status
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from django.db.models import Q
import datetime


# Register API

class ResgisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        ## welcome email
        # subject = 'Welcome letter from Hirebeat'
        # html_message = render_to_string('mail_template.html', {'context': 'values'})
        # plain_message = strip_tags(html_message)
        # from_email = 'hirebeat.tech@gmail.com'
        # to_list = [request.data['email']]
        # send_mail(subject,plain_message,from_email,to_list,html_message=html_message,fail_silently=True)

        ## email
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

        ### token
        _, token = AuthToken.objects.create(user)
        ### profile is autocreated
        profile = Profile.objects.filter(user=user.id)[0]
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token,
            "profile": ProfileSerializer(profile).data,
        })


# Employer Register API

class Employer_ResgisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        ## email
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

        ### token
        _, token = AuthToken.objects.create(user)
        ### profile is autocreated
        profile = Profile.objects.filter(user=user.id)[0]
        profile.is_employer = True
        profile.company_name = request.data["company_name"]
        subReviewer = SubReviewers.objects.filter(r_email=user.email)
        if (len(subReviewer)>0):
            profile.email_confirmed = True
            profile.is_subreviwer = True
            profile.company_name = subReviewer[0].company_name
        profile.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token,
            "profile": ProfileSerializer(profile).data,
        })


# Login API

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        user.last_login = datetime.datetime.now()
        user.save(update_fields=['last_login'])
        ### token
        _, token = AuthToken.objects.create(user)
        ### profile
        profile_data = {}
        if Profile.objects.filter(user=user):
            profile = Profile.objects.filter(user=user)[0]
            profile_data = ProfileSerializer(profile).data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token,
            "profile": profile_data,
        })


# GET User API

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class RetrieveProfileAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ProfileSerializer

    def get_object(self):
        profile = Profile.objects.filter(user=self.request.user)
        profile_obj = {}
        if profile:
            profile_obj = profile[0]
        return profile_obj


class UpdateProfileAPI(APIView):
    def get_object(self, id):
        try:
            return Profile.objects.get(id=id)
        except Profile.DoesNotExist:
            return Response({"Profile doesn't exist"})

    def get(self, request, id):
        profile = self.get_object(id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, id):
        profile = self.get_object(id)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrievePracticeInfoAPI(APIView):
    def get(self, request, userId):
        videos = Video.objects.filter(owner_id=userId)
        resumes = Resume.objects.filter(owner_id=userId)
        user = User.objects.get(pk=userId)
        interviews = CandidatesInterview.objects.filter(Q(email=user.email) & Q(is_recorded=True))
        videos_practiced = len(videos)
        videos_reviewed = len(videos.filter(Q(is_ai_reviewed=True) | Q(is_expert_reviewed=True)))
        resume_scanned = len(resumes)
        interviews_recorded = len(interviews)
        return Response(
            {
                "videos_practiced": videos_practiced,
                "videos_reviewed": videos_reviewed,
                "resume_scanned": resume_scanned,
                "interviews_recorded": interviews_recorded
            }
        )


class RetrieveInterviewJobAPI(APIView):
    def get(self, request, employerId):
        positions = Positions.objects.filter(user_id=employerId)
        jobs_posted = len(positions)
        total_applicants = 0
        videos_to_be_received = 0
        videos_received = 0
        recorded_rate = 0
        for position in positions:
            invited_candidates = InvitedCandidates.objects.filter(positions_id=position.id)
            total_applicants += len(invited_candidates)
            videos_to_be_received += len(invited_candidates)
            videos_received += len(invited_candidates.filter(Q(is_recorded=True) & (Q(video_count=1) | Q(video_count=2) | Q(video_count=3))))
        if videos_to_be_received > 0:
            recorded_rate = (videos_received / videos_to_be_received)
        return Response(
            {
                "jobs_posted": jobs_posted,
                "total_applicants": total_applicants,
                "videos_received": videos_received,
                "recorded_rate": recorded_rate * 100,
            }
        )
