from rest_framework import routers
from videos.api.viewsets import VideoViewSet
from .views import get_unreviewed_video, mark_video_as_needed_review, \
    add_video_label, get_video_sentences, get_video_user, get_unreviewed_video_list, get_review_count, delete_video, \
    add_wp_video, sign_s3_upload_wp_video, get_videos_applicant
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
urlpatterns.append(path('get-unreviewed-video-list', get_unreviewed_video_list))
urlpatterns.append(path('get-review-count', get_review_count))
urlpatterns.append(path('mark_video_as_needed_review', mark_video_as_needed_review))
urlpatterns.append(path('api/video-labels', add_video_label))
urlpatterns.append(path('api/video-sentences', get_video_sentences))
urlpatterns.append(path('api/video-user', get_video_user))
urlpatterns.append(path('api/video/deletion', delete_video))
urlpatterns.append(path('api/wp-videos', add_wp_video))
urlpatterns.append(path('sign-wp-video',sign_s3_upload_wp_video))
urlpatterns.append(path('/api/videos/applicant', get_videos_applicant))

