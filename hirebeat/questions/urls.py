from django.urls import path
from .views import QuestionAPIView, get_subcategories, get_random_question, get_interview_questions, add_position, \
    get_posted_jobs, add_interviews
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('questions',QuestionAPIView.as_view()),  # when in root path, run that index method to render the html
    path('subcategories', get_subcategories),
    path('random-question', get_random_question),
    path('get-interview-questions', get_interview_questions),
    path('add-position', add_position),
    path('get-posted-jobs', get_posted_jobs),
    path('add-interviews', add_interviews),
]
# The API URLs are now determined automatically by the router.
