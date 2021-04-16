from django.urls import path
from .views import add_new_job, get_all_jobs, update_job, archive_job

urlpatterns = [
    path('add-new-job', add_new_job),
    path('get-all-jobs', get_all_jobs),
    path('update-job', update_job),
    path('archive-job', archive_job),
]