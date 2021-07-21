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

def applyjob(request, companyName):
    job_id = request.GET.get('id', '')
    jobs = Jobs.objects.get(pk=job_id)
    employerp = EmployerProfileDetail.objects.get(user_id = jobs.user_id)
    context = {
        "jobid": request.GET.get('id', ''),
        "job_title": jobs.job_title,
        "company_overview": strip_tags(employerp.summary).replace('\n', ' '),
        "company_name": companyName,
        "company_logo": jobs.company_logo,
    }
    return render(request,'frontend/applyjob.html', context)

def companybranding(request, companyName):
    context = {
        "company_overview": "HireBeat is an HR software company providing enterprise SaaS solutions that simplify talent recruiting and assessment with a digital video screening and interviewing. Our platform combines the power of one-way videos, ATS tools, and HR workflows, along with AI-powered analytics and collaboration, to optimize the hiring process while improving the candidate experience.",
        "company_name": "HireBeat Inc.",
        "company_logo": "https://hirebeat-employer-logo.s3.amazonaws.com/1619807927000.png",
    }
    employerProfileDetail = EmployerProfileDetail.objects.filter(name=companyName)
    for i in range(len(employerProfileDetail)):
        if len(employerProfileDetail) > 0:
            context = {
                "company_overview": strip_tags(employerProfileDetail[i].summary).replace('\n', ' '),
                "company_name": employerProfileDetail[i].name,
                "company_logo": employerProfileDetail[i].logo_url,
            }
    return render(request,'frontend/companybranding.html', context)

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

def blog28(request):
    return render(request, 'frontend/blog28.html')

def blogemployer20(request):
    return render(request, 'frontend/blogemployer20.html')

def blogemployer21(request):
    return render(request, 'frontend/blogemployer21.html')

def blogemployer22(request):
    return render(request, 'frontend/blogemployer22.html')

def blog29(request):
    return render(request, 'frontend/blog29.html')

def blogemployer23(request):
    return render(request, 'frontend/blogemployer23.html')

def blogemployer24(request):
    return render(request, 'frontend/blogemployer24.html')

def hubspot_form(request):
    return render(request, 'frontend/hubspot_form.html')

def blogemployer25(request):
    return render(request, 'frontend/blogemployer25.html')