from rest_framework import viewsets, permissions
from .serializers import VideoSerializer
from videos.models import Video
from accounts.models import ReviewerInfo
from rest_framework.response import Response
from rest_framework import status
from accounts.models import Profile

class VideoViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.AllowAny] allow all access
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = VideoSerializer

    # queryset = Video.objects.all() get all videos
    def get_queryset(self):
        return self.request.user.videos.all().order_by('-created_at')

    def perform_create(self, serializer):
        # Don't update profile when uploading videos
        # profile = Profile.objects.filter(user=self.request.user)[0]
        # profile.saved_video_count += 1
        # profile.save()
        serializer.save(owner=self.request.user)
    
    def partial_update(self, request, pk=None):
        video = Video.objects.filter(id=pk)[0]
        reviewer_info = ReviewerInfo.objects.filter(user=request.user)[0]
        try:
            if request.data['expert_score']:
                video.expert_score = request.data['expert_score']
                video.comments = request.data['comments']
                video.expert_category_score = request.data['expert_category_score']
                video.is_expert_reviewed = True
            if request.data['ai_score']:
                video.ai_score = request.data['ai_score']
                video.ai_category_score = request.data['ai_category_score']
                video.is_ai_reviewed = True
            video.reviewer = request.user
            video.save()
            reviewer_info.review_count += 1
            reviewer_info.save()
        except:
            return Response("Can't update reviews",status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)


