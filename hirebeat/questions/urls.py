from django.urls import path
from .views import QuestionAPIView, get_subcategories
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('questions',QuestionAPIView.as_view()),  # when in root path, run that index method to render the html
    path('subcategories', get_subcategories),
]
# The API URLs are now determined automatically by the router.
