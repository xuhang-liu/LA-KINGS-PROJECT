from rest_framework import routers
from resume.api.viewsets import RessumeViewSet
from django.urls import path
from .views import sign_s3_upload_cv, delete_resume, upload_interview_resume

router = routers.DefaultRouter()
router.register(
    "api/resume", RessumeViewSet, "resume"
)  # Tell django this path is mapped to Resumes in the database
router.register(
    "api/resume/:pk", RessumeViewSet, "resume update"
)

urlpatterns=router.urls
urlpatterns.append(path('sign_cv',sign_s3_upload_cv))
urlpatterns.append(path('interview_resumes',upload_interview_resume))
urlpatterns.append(path('api/resume/deletion', delete_resume))
