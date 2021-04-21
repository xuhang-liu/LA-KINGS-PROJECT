from django.urls import path
from .views import add_new_job, get_all_jobs, update_job, archive_job, add_new_apply_candidate, get_current_jobs, \
    add_interview_question, update_invite_status

urlpatterns = [
    path('add-new-job', add_new_job),
    path('get-all-jobs', get_all_jobs),
    path('update-job', update_job),
    path('archive-job', archive_job),
    path('add-new-apply-candidate', add_new_apply_candidate),
    path('get-current-jobs', get_current_jobs),
    path('add-interview-question', add_interview_question),
    path('update-invite-status', update_invite_status)
]