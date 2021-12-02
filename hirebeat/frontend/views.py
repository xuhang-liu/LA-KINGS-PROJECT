from django.shortcuts import render
from django.utils.html import strip_tags
from jobs.models import Jobs
from accounts.models import EmployerProfileDetail, ProfileDetail
from django.core.exceptions import ObjectDoesNotExist
import base64

# Create your views here.
# pointer to the template


def index(request):
    return render(request, 'frontend/index.html')
    # auto looks for a templates folder and the index.html file in it


def jobseeker(request):
    return render(request, 'frontend/jobseeker.html')


def applyjob(request, companyName):
    job_id = int(base64.b64decode(request.GET.get('id', '')))
    jobs = Jobs.objects.get(pk=job_id)
    employerp = EmployerProfileDetail.objects.get(user_id=jobs.user_id)
    context = {
        "jobid": request.GET.get('id', ''),
        "job_title": jobs.job_title,
        "company_overview": strip_tags(employerp.summary).replace('\n', ' ')[:152] + "...",
        "company_name": companyName,
        "company_logo": jobs.company_logo,
    }
    return render(request, 'frontend/applyjob.html', context)


def companybranding(request, companyName):
    context = {
        "company_overview": "HireBeat is an HR software company providing enterprise SaaS solutions that simplify talent recruiting and assessment with a digital video screening and interviewing. Our platform combines the power of one-way videos, ATS tools, and HR workflows, along with AI-powered analytics and collaboration, to optimize the hiring process while improving the candidate experience."[:152] + "...",
        "company_name": "HireBeat Inc.",
        "company_logo": "https://hirebeat-employer-logo.s3.amazonaws.com/1619807927000.png",
    }
    employerProfileDetail = EmployerProfileDetail.objects.filter(
        name=companyName)
    for i in range(len(employerProfileDetail)):
        if len(employerProfileDetail) > 0:
            context = {
                "company_overview": strip_tags(employerProfileDetail[i].summary).replace('\n', ' ')[:152] + "...",
                "company_name": employerProfileDetail[i].name,
                "company_logo": employerProfileDetail[i].logo_url,
            }
    return render(request, 'frontend/companybranding.html', context)


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


def blog30(request):
    return render(request, 'frontend/blog30.html')


def blogemployer26(request):
    return render(request, 'frontend/blogemployer26.html')


def blogemployer27(request):
    return render(request, 'frontend/blogemployer27.html')


def jobseekerscompanydata(request):
    return render(request, 'frontend/jobseekerscompanydata.html')


def absagroup(request):
    return render(request, 'frontend/absa-group.html')


def accenture(request):
    return render(request, 'frontend/accenture.html')


def abudhabiislamicbank(request):
    return render(request, 'frontend/abu-dhabi-islamic-bank.html')


def adp(request):
    return render(request, 'frontend/adp.html')


# def employerfeaturevideo(request):
#     return render(request, 'frontend/employer-feature-video.html')


def AIGInfo(request):
    return render(request, 'frontend/AIGInfo.html')


def EmployerDashboard(request):
    return render(request, 'frontend/EmployerDashboard.html')


def EmployerPricing(request):
    return render(request, 'frontend/EmployerPricing.html')


def Register(request):
    return render(request, 'frontend/Register.html')


def JacobsInfo(request):
    return render(request, 'frontend/JacobsInfo.html')


def QuizHome(request):
    return render(request, 'frontend/QuizHome.html')


def blog6(request):
    return render(request, 'frontend/blog6.html')


def HowItWorks(request):
    return render(request, 'frontend/HowItWorks.html')


def EmployerLogin(request):
    return render(request, 'frontend/EmployerLogin.html')


def ROICalculator(request):
    return render(request, 'frontend/ROICalculator.html')


# def employerabout(request):
#     return render(request, 'frontend/employerabout.html')


def CityInfo(request):
    return render(request, 'frontend/CityInfo.html')


def blog18(request):
    return render(request, 'frontend/blog18.html')


def QuestionTypeChoices(request):
    return render(request, 'frontend/QuestionTypeChoices.html')


def blog14(request):
    return render(request, 'frontend/blog14.html')


def SelectSimulate(request):
    return render(request, 'frontend/SelectSimulate.html')


def AlvarezMarsalInfo(request):
    return render(request, 'frontend/AlvarezMarsalInfo.html')


def MetLifeInfo(request):
    return render(request, 'frontend/MetLifeInfo.html')


def EmployerContact(request):
    return render(request, 'frontend/EmployerContact.html')


def blog10(request):
    return render(request, 'frontend/blog10.html')


def PNCInfo(request):
    return render(request, 'frontend/PNCInfo.html')


# def IntergrationPage(request):
#     return render(request, 'frontend/IntergrationPage.html')


def EmailVerification(request):
    return render(request, 'frontend/EmailVerification.html')


def bloggridEmployer(request):
    return render(request, 'frontend/bloggridEmployer.html')


def ECInfo(request):
    return render(request, 'frontend/ECInfo.html')


# def ProductPage(request):
#     return render(request, 'frontend/ProductPage.html')


def BBInfo(request):
    return render(request, 'frontend/BBInfo.html')


def contact(request):
    return render(request, 'frontend/contact.html')


def TechFields(request):
    return render(request, 'frontend/TechFields.html')


def SEBInfo(request):
    return render(request, 'frontend/SEBInfo.html')


def MyVideoUploader(request):
    return render(request, 'frontend/MyVideoUploader.html')


def JSInfo(request):
    return render(request, 'frontend/JSInfo.html')


def AEInfo(request):
    return render(request, 'frontend/AEInfo.html')


def CareerResponseWindow(request):
    return render(request, 'frontend/CareerResponseWindow.html')


def MTBInfo(request):
    return render(request, 'frontend/MTBInfo.html')


def blog11(request):
    return render(request, 'frontend/blog11.html')


def BLUSAInfo(request):
    return render(request, 'frontend/BLUSAInfo.html')


def blog16(request):
    return render(request, 'frontend/blog16.html')


def BRInfo(request):
    return render(request, 'frontend/BRInfo.html')


def blog8(request):
    return render(request, 'frontend/blog8.html')


def blog2(request):
    return render(request, 'frontend/blog2.html')


def Dashboard(request):
    return render(request, 'frontend/Dashboard.html')


def blog19(request):
    return render(request, 'frontend/blog19.html')


def blog12(request):
    return render(request, 'frontend/blog12.html')


def ReviewListPreload(request):
    return render(request, 'frontend/ReviewListPreload.html')


def InterviewInfo(request):
    return render(request, 'frontend/InterviewInfo.html')


def EmployerRegister(request):
    return render(request, 'frontend/EmployerRegister.html')


# def ResumeScreening(request):
#     return render(request, 'frontend/ResumeScreening.html')


def Privacy(request):
    return render(request, 'frontend/Privacy.html')


def HSBCInfo(request):
    return render(request, 'frontend/HSBCInfo.html')


def Term(request):
    return render(request, 'frontend/Term.html')


def SearchPanel(request):
    return render(request, 'frontend/SearchPanel.html')


def Login(request):
    return render(request, 'frontend/Login.html')


def Resume(request):
    return render(request, 'frontend/Resume.html')


def LazardInfo(request):
    return render(request, 'frontend/LazardInfo.html')


def Payment(request):
    return render(request, 'frontend/Payment.html')


def ErnstYoungInfo(request):
    return render(request, 'frontend/ErnstYoungInfo.html')


def GSInfo(request):
    return render(request, 'frontend/GSInfo.html')


# def SolutionPage(request):
#     return render(request, 'frontend/SolutionPage.html')


def blog17(request):
    return render(request, 'frontend/blog17.html')


def blog15(request):
    return render(request, 'frontend/blog15.html')


def blog1(request):
    return render(request, 'frontend/blog1.html')


def blog3(request):
    return render(request, 'frontend/blog3.html')


def blog4(request):
    return render(request, 'frontend/blog4.html')


def blog5(request):
    return render(request, 'frontend/blog5.html')


def blog7(request):
    return render(request, 'frontend/blog7.html')


def blog9(request):
    return render(request, 'frontend/blog9.html')


def blog13(request):
    return render(request, 'frontend/blog13.html')


def talentProfile(request):
    uid = base64.b64decode(request.GET.get('id', ''))
    profileDetail = {}
    context = {
        "name": "",
        "photo": "",
    }
    try:
        profileDetail = ProfileDetail.objects.get(user_id=uid)
        context = {
            "name": profileDetail.name,
            "photo": profileDetail.logo_url,
        }
    except ObjectDoesNotExist:
        context = {
            "name": "",
            "photo": "",
        }
    return render(request, 'frontend/talent_profile.html', context)
