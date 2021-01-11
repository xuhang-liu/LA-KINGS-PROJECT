from django.urls import path
from .views import QuestionAPIView, get_subcategories, get_random_question, get_interview_questions
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('questions',QuestionAPIView.as_view()),  # when in root path, run that index method to render the html
    path('subcategories', get_subcategories),
    path('random-question', get_random_question),
    path('get-interview-questions', get_interview_questions),
]
# The API URLs are now determined automatically by the router.
