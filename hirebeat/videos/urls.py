from rest_framework import routers
from videos.api.viewsets import VideoViewSet
from .views import get_unreviewed_video, mark_video_as_needed_review, add_video_label
from django.urls import path

router = routers.DefaultRouter()
router.register(
    "api/videos", VideoViewSet, "videos"
)  # Tell django this path is mapped to Videos in the database
router.register(
    "api/videos/:pk", VideoViewSet, "videos update"
)

urlpatterns=router.urls
urlpatterns.append(path('get_unreviewed_video', get_unreviewed_video))
urlpatterns.append(path('mark_video_as_needed_review', mark_video_as_needed_review))
urlpatterns.append(path('api/video-labels', add_video_label))


