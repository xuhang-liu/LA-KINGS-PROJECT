from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer
from accounts.models import Profile
import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import permission_classes, authentication_classes

# Register API

class ResgisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        ### token
        _, token = AuthToken.objects.create(user)
        ### profile is autocreated
        profile = Profile.objects.filter(user=user.id)[0]
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token,
            "profile": ProfileSerializer(profile).data,
        })


# Login API
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
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