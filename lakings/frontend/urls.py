from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),  # when in root path, run that index method to render the html
]