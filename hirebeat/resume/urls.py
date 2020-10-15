from rest_framework import routers
from resume.api.viewsets import RessumeViewSet
from django.urls import path
from .views import sign_s3_upload_cv

router = routers.DefaultRouter()
router.register(
    "api/resume", RessumeViewSet, "resume"
)  # Tell django this path is mapped to Resumes in the database
router.register(
    "api/resume/:pk", RessumeViewSet, "resume update"
)

urlpatterns=router.urls
urlpatterns.append(path('sign_cv',sign_s3_upload_cv))


