from django.urls import path
from .views import QuestionAPIView, get_subcategories, get_random_question, get_interview_questions, add_position, \
    get_posted_jobs, add_interviews, update_secondround_status, submit_feedback, resend_invitation, update_comment_status, close_job, delete_job, add_interview_resume, get_resume_url, get_applicants_data, get_stars_list, add_sub_reviewer
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('questions',QuestionAPIView.as_view()),  # when in root path, run that index method to render the html
    path('subcategories', get_subcategories),
    path('random-question', get_random_question),
    path('get-interview-questions', get_interview_questions),
    path('add-position', add_position),
    path('get-posted-jobs', get_posted_jobs),
    path('add-interviews', add_interviews),
    path('submit-feedback', submit_feedback),
    path('resend-invitation', resend_invitation),
    path('update-comment-status', update_comment_status),
    path('update-secondround-status', update_secondround_status),
    path('close-job', close_job),
    path('delete-job', delete_job),
    path('add-interview-resume', add_interview_resume),
    path('get-resume-url', get_resume_url),
    path('get-applicants-data', get_applicants_data),
    path('get-the-star-list', get_stars_list),
    path('add_sub_reviewer', add_sub_reviewer),
]
# The API URLs are now determined automatically by the router.
