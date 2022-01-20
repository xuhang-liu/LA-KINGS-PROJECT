from django.urls import path
from .views import QuestionAPIView, get_subcategories, get_random_question, get_interview_questions, add_position, \
    get_posted_jobs, add_interviews, update_secondround_status, submit_feedback, resend_invitation, update_comment_status, \
    close_job, delete_job, add_interview_resume, get_resume_url, get_applicants_data, get_stars_list, add_sub_reviewer, \
    remove_sub_reviewer, get_question_list, update_view_status, get_analytics_info, delete_interview_questions, \
    add_external_reviewer, delete_external_reviewer, move_candidate_to_interview, send_video_interviews, add_review_note, \
    get_review_note, add_or_update_reviewer_evaluation, get_reviewer_evaluation, get_current_reviewer_evaluation, get_reviewers_list, \
    remove_reviewer_from_list, update_live_interview_categories, update_live_interview_candidate_status, update_shortlist_candidate_offer_status
# from rest_framework.routers import DefaultRouter

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
    path('remove_sub_reviewer', remove_sub_reviewer),
    path('get-question-list', get_question_list),
    path('update-view-status', update_view_status),
    path('get-analytics-info', get_analytics_info),
    path('questions/delete-interview-questions', delete_interview_questions),
    path('questions/add-external-reviewer', add_external_reviewer),
    path('questions/delete-external-reviewer', delete_external_reviewer),
    path('questions/move-candidate-to-interview', move_candidate_to_interview),
    path('questions/send-video-interviews', send_video_interviews),
    path('questions/add-review-note', add_review_note),
    path('questions/get-review-note', get_review_note),
    path('questions/add-or-update-reviewer-evaluation', add_or_update_reviewer_evaluation),
    path('questions/get-reviewer-evaluation', get_reviewer_evaluation),
    path('questions/get-current-reviewer-evaluation', get_current_reviewer_evaluation),
    path('questions/get-reviewers-list', get_reviewers_list),
    path('questions/remove-reviewer-from-list', remove_reviewer_from_list),
    path('questions/update-live-interview-categories', update_live_interview_categories),
    path('questions/update-live-interview-candidate-status', update_live_interview_candidate_status),
    path('questions/update-shortlist-candidate-offer-status', update_shortlist_candidate_offer_status)
]
# The API URLs are now determined automatically by the router.
