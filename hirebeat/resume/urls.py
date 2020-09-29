from rest_framework import routers
from resume.api.viewsets import RessumeViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register(
    "api/resume", RessumeViewSet, "resume"
)  # Tell django this path is mapped to Videos in the database

urlpatterns=router.urls


