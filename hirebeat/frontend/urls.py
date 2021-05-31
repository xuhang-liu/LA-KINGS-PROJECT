from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),  # when in root path, run that index method to render the html
    path('job-seekers',views.jobseeker),
    path('apply-job',views.applyjob),
    path('employer_blog-employer-branding-vs-recruitment-marketing', views.blogemployer19)
]

# This url needs to be included in the hirebeat/urls.py to work