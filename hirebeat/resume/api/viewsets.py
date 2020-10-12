from rest_framework import viewsets, permissions
from .serializers import ResumeSerializer
from resume.models import Resume
from rest_framework.response import Response
from rest_framework import status
from accounts.models import Profile

class RessumeViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.AllowAny] allow all access
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ResumeSerializer

    # queryset = Resume.objects.all() get all videos
    def get_queryset(self):
        return self.request.user.resume.all().order_by('-created_at')

    def perform_create(self, serializer):
        profile = Profile.objects.filter(user=self.request.user)[0]
        profile.saved_resume_count += 1
        profile.save()
        serializer.save(owner=self.request.user)


