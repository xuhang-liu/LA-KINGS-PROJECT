from django.conf import settings

from rest_framework import serializers
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from knox.models import AuthToken
from requests.exceptions import HTTPError
from social_django.utils import psa

from .serializers import UserSerializer


class SocialSerializer(serializers.Serializer):
    """
    Serializer which accepts an OAuth2 access token.
    """
    access_token = serializers.CharField(
        allow_blank=False,
        trim_whitespace=True,
    )

@api_view(http_method_names=['POST'])
@permission_classes([AllowAny])
@psa()
def exchange_token(request, backend):
    serializer = SocialSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = request.backend.do_auth(serializer.validated_data['access_token'])
        if user:
            _, token = AuthToken.objects.create(user)
            return Response({
                   "user": UserSerializer(user).data,
                    "token": token,
            })
        else:
            return Response(
                {'errors': {'token': 'Invalid token'}},
                status=status.HTTP_400_BAD_REQUEST,
            )

