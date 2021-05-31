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

def blogemployer18(request):
    return render(request, 'frontend/blogemployer18.html')

def blogemployer17(request):
    return render(request, 'frontend/blogemployer17.html')

def blogemployer16(request):
    return render(request, 'frontend/blogemployer16.html')

def blogemployer15(request):
    return render(request, 'frontend/blogemployer15.html')

def blogemployer14(request):
    return render(request, 'frontend/blogemployer14.html')

def blogemployer13(request):
    return render(request, 'frontend/blogemployer13.html')

def blogemployer12(request):
    return render(request, 'frontend/blogemployer12.html')

def blogemployer11(request):
    return render(request, 'frontend/blogemployer11.html')

def blogemployer10(request):
    return render(request, 'frontend/blogemployer10.html')

def blogemployer9(request):
    return render(request, 'frontend/blogemployer9.html')

def blogemployer8(request):
    return render(request, 'frontend/blogemployer8.html')

def blogemployer7(request):
    return render(request, 'frontend/blogemployer7.html')

def blogemployer6(request):
    return render(request, 'frontend/blogemployer6.html')

def blogemployer5(request):
    return render(request, 'frontend/blogemployer5.html')

def blogemployer4(request):
    return render(request, 'frontend/blogemployer4.html')

def blogemployer3(request):
    return render(request, 'frontend/blogemployer3.html')

def blogemployer2(request):
    return render(request, 'frontend/blogemployer2.html')

def blogemployer1(request):
    return render(request, 'frontend/blogemployer1.html')

def blog27(request):
    return render(request, 'frontend/blog27.html')

def blog26(request):
    return render(request, 'frontend/blog26.html')

def blog25(request):
    return render(request, 'frontend/blog25.html')

def blog24(request):
    return render(request, 'frontend/blog24.html')

def blog23(request):
    return render(request, 'frontend/blog23.html')

def blog22(request):
    return render(request, 'frontend/blog22.html')

def blog21(request):
    return render(request, 'frontend/blog21.html')

def blog20(request):
    return render(request, 'frontend/blog20.html')