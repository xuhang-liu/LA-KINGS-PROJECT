from rest_framework import generics,permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer
from accounts.models import Profile
from rest_framework import status
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.contrib.auth.tokens import PasswordResetTokenGenerator

#Register API

class ResgisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        ## email
        # account_activation_token = PasswordResetTokenGenerator()
        # current_site = get_current_site(request)
        # subject = 'Please Activate Your Hirebeat Account'
        # message = get_template("accounts/account_activation_email.txt")
        # context = {
        #     'user': user,
        #     'domain': current_site.domain,
        #     'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        #     'token': account_activation_token.make_token(user),
        # }
        # from_email = 'hirebeat.tech@gmail.com'
        # to_list = [user.email]
        # content = message.render(context)
        # email = EmailMessage(
        #     subject,
        #     content,
        #     from_email,
        #     to_list,
        # )
        # email.send()
        ### token
        _, token = AuthToken.objects.create(user)
        ### profile is autocreated
        profile = Profile.objects.filter(user=user.id)[0]
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
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
        ### token
        _, token = AuthToken.objects.create(user)
        ### profile
        profile_data = {}
        if Profile.objects.filter(user=user):
            profile = Profile.objects.filter(user=user)[0]
            profile_data = ProfileSerializer(profile).data
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
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
    




