from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Jobs
from questions.models import Positions
from accounts.models import Profile
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def add_new_job(request):
    job_title = request.data['jobTitle']
    job_id = request.data['jobId']
    job_description = request.data['jobDescription']
    job_location = request.data['jobLocation']
    job_level = request.data['jobLevel']
    user = User.objects.get(pk=request.data["userId"])
    # update user profile
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count += 1
    profile.save()
    # create position
    position = Positions.objects.create(user=user, job_title=job_title, job_id=job_id, job_description=job_description)
    # create job
    Jobs.objects.create(user=user, positions=position, job_title=job_title, job_id=job_id, job_description=job_description,
                        job_location=job_location, job_level=job_level)
    return Response("Create new job successfully", status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_all_jobs(request):
    user_id = request.query_params.get("userId")
    data = {}
    return Response({
        "data": data,
    })