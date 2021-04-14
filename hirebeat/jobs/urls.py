from django.urls import path
from .views import add_new_job

urlpatterns = [
    path('add-new-job',add_new_job),
]