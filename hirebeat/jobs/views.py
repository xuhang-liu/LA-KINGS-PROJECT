from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Jobs, ApplyCandidates
from questions.models import Positions, InterviewQuestions
from accounts.models import Profile, EmployerProfileDetail
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

@api_view(['POST'])
def add_new_job(request):
    job_title = request.data['jobTitle']
    job_id = request.data['jobId']
    job_description = request.data['jobDescription']
    job_location = request.data['jobLocation']
    job_level = request.data['jobLevel']
    job_type = request.data['jobType']
    user = User.objects.get(pk=request.data["userId"])
    company_name = ""
    company_overview = ""
    company_logo = ""
    # update user profile
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count += 1
    profile.save()
    # create position
    position = Positions.objects.create(user=user, job_title=job_title, job_id=job_id, job_description=job_description)
    # get company name and overview
    try:
        # update personal information
        employer_profile = EmployerProfileDetail.objects.get(user=user)
        company_name = employer_profile.name
        company_overview = employer_profile.summary
        company_logo = employer_profile.logo_url
    except ObjectDoesNotExist:
        company_overview = ""
        company_name = ""
        company_logo = ""
    # create job
    job = Jobs.objects.create(user=user, positions=position, job_title=job_title, job_id=job_id, job_description=job_description,
            job_location=job_location, job_level=job_level, job_type=job_type, company_overview=company_overview,company_name=company_name, company_logo=company_logo)
    # save job link
    job_url = "https://hirebeat.co/apply-job?id=" + str(job.id)
    job.job_url = job_url
    job.save()
    return Response("Create new job successfully", status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_all_jobs(request):
    data = {}
    user_id = request.query_params.get("userId")
    jobs = list(Jobs.objects.filter(user_id=user_id).values())
    for i in range(len(jobs)):
        job_id = jobs[i]["id"]
        positions_id = jobs[i]["positions_id"]
        # get each position applicants
        applicants = list(ApplyCandidates.objects.filter(jobs_id=job_id).values())
        questions = list(InterviewQuestions.objects.filter(positions_id=positions_id).values())
        job_details = {
            "job_details": jobs[i],
            "applicants": applicants,
            "questions": questions,
        }
        data[job_id] = job_details

    return Response({
        "data": data,
    })

@api_view(['POST'])
def update_job(request):
    id = request.data['id']
    job_title = request.data['jobTitle']
    job_id = request.data['jobId']
    job_location = request.data['jobLocation']
    job_level = request.data['jobLevel']
    job_description = request.data['jobDescription']
    job_type = request.data['jobType']

    job = Jobs.objects.get(id=id)
    job.job_title = job_title
    job.job_id = job_id
    job.job_location = job_location
    job.job_level = job_level
    job.job_description = job_description
    job.job_type = job_type
    # save update to db
    job.save()

    return Response("Update new job successfully", status=status.HTTP_205_RESET_CONTENT)


@api_view(['POST'])
def archive_job(request):
    id = request.data['id']
    is_closed = request.data['isClosed']

    job = Jobs.objects.get(id=id)
    job.is_closed = is_closed
    # save update to db
    job.save()

    return Response("Archive new job successfully", status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def add_new_apply_candidate(request):
    job_id = request.data['job_id']
    firstname = request.data['firstname']
    lastname = request.data['lastname']
    phone = request.data['phone']
    email = request.data['email']
    location = request.data['location']
    resume_url = request.data['resume_url']
    jobs = Jobs.objects.get(pk=job_id)
    applyCandidates = ApplyCandidates.objects.create(jobs=jobs, first_name=firstname, last_name=lastname, phone=phone, email=email, location=location, resume_url=resume_url)

    return Response("Add new apply candidate successfully", status=status.HTTP_202_ACCEPTED)

@api_view(['GET'])
def get_current_jobs(request):
    emails = []
    job_id = request.query_params.get("jobid")
    jobs = Jobs.objects.get(pk=job_id)
    applyCandidates = ApplyCandidates.objects.filter(jobs=jobs)
    for i in range(len(applyCandidates)):
        emails.append(applyCandidates[i].email)
    data = {
        "job_title": jobs.job_title,
        "job_level": jobs.job_level,
        "job_id": jobs.job_id,
        "job_location": jobs.job_location,
        "create_date": jobs.create_date,
        "job_description": jobs.job_description,
        "job_type": jobs.job_type,
        "company_name": jobs.company_name,
        "company_overview": jobs.company_overview,
        "job_url": jobs.job_url,
        "id": jobs.id,
        "emails": emails,
        "company_logo": jobs.company_logo,
    }

    return Response({
        "data": data,
    })

@api_view(['POST'])
def add_interview_question(request):
    questions = request.data['questions']
    position_id = request.data['positionId']
    for i in range(len(questions)):
        InterviewQuestions.objects.create(description=questions[i], positions_id=position_id)
    return Response("Add new questions successfully", status=status.HTTP_201_CREATED)


@api_view(['POST'])
def update_invite_status(request):
    candidates = request.data['candidates']
    is_invited = request.data['isInvited']
    for i in range(len(candidates)):
        candidate = ApplyCandidates.objects.get(id=candidates[i])
        candidate.is_invited = is_invited
        # save update to db
        candidate.save()
    return Response("Archive new job successfully", status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def delete_job(request):
    id = request.data['id']
    user = User.objects.get(pk=request.data["userId"])
    # update user profile
    profile = Profile.objects.get(user_id=user.id)
    profile.position_count -= 1
    profile.save()
    # delete job and position
    job = Jobs.objects.get(id=id)
    position_id = job.positions_id
    Positions.objects.filter(id=position_id).delete()
    job.delete()
    return Response("Delete current job successfully", status=status.HTTP_202_ACCEPTED)