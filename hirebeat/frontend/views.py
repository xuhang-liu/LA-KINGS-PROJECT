from django.shortcuts import render
from django.utils.html import strip_tags
from jobs.models import Jobs
from accounts.models import EmployerProfileDetail

# Create your views here.
# pointer to the template

def index(request):
    return render(request,'frontend/index.html')
    # auto looks for a templates folder and the index.html file in it

def jobseeker(request):
    return render(request,'frontend/jobseeker.html')

def applyjob(request):
    job_id = request.GET.get('id', '')
    jobs = Jobs.objects.get(pk=job_id)
    employerp = EmployerProfileDetail.objects.get(user_id = jobs.user_id)
    context = {
        "jobid": request.GET.get('id', ''),
        "job_title": jobs.job_title,
        "company_overview": strip_tags(employerp.summary).replace('\n', ' '),
        "company_name": jobs.company_name,
        "company_logo": jobs.company_logo,
    }
    return render(request,'frontend/applyjob.html', context)

def blogemployer19(request):
    return render(request, 'frontend/blogemployer19.html')