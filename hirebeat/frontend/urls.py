from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),  # when in root path, run that index method to render the html
]

# This url needs to be included in the hirebeat/urls.py to work