from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),  # when in root path, run that index method to render the html
    path('job-seekers',views.jobseeker),
    path('apply-job',views.applyjob),
    path('company-branding/<str:companyName>', views.companybranding),
    path('employer_blog-employer-branding-vs-recruitment-marketing', views.blogemployer19),
    path('employer_blog-how-ATS-works-in-the-recruitment-process', views.blogemployer18),
    path('employer_blog-personality-assessment-tools-employers-must-know-about', views.blogemployer17),
    path('employer_blog-red-flags-you-should-look-out-in-candidates-during-the-interview', views.blogemployer16),
    path('employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today', views.blogemployer15),
    path('employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern', views.blogemployer14),
    path('employer_blog-how-to-write-a-termination-letter-right', views.blogemployer13),
    path('employer_blog-workplace-camaraderie-your-powerful-tool-for-success', views.blogemployer12),
    path('employer_blog-how-covid-has-changed-the-recruitment-process', views.blogemployer11),
    path('employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy', views.blogemployer10),
    path('employer_blog-boost-up-your-roi-using-video-interviews', views.blogemployer9),
    path('employer_blog-how-to-get-your-job-postings-noticed', views.blogemployer8),
    path('employer_blog-millennials-we-want-you', views.blogemployer7),
    path('employer_blog-how-gender-pronouns-change-the-way-we-work', views.blogemployer6),
    path('employer_blog-how-the-pandemic-sparked-a-new-way-of-interviewing', views.blogemployer5),
    path('employer_blog-interview-questions-every-recruiter-should-ask', views.blogemployer4),
    path('employer_blog-writing-a-good-job-posting-that-will-attract-employees', views.blogemployer3),
    path('employer_blog-benefits-of-hiring-diverse-candidates-in-your-company', views.blogemployer2),
    path('employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring', views.blogemployer1),
    path('blog-ace-your-zoom-job-interview', views.blog27),
    path('blog-how-to-stay-competitive-in-your-job-search-as-a-candidate', views.blog26),
    path('blog-4-most-commonly-asked-questions-in-an-interview', views.blog25),
    path('blog-how-to-answer-the-question-what-makes-you-stand-out-from-other-candidates', views.blog24),
    path('blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview', views.blog23),
    path('blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years', views.blog22),
    path('blog-4-amazing-tips-to-effectively-networking-during-covid-19', views.blog21),
    path('blog-how-to-handle-the-question-you-donot-know', views.blog20),
    path('blog-wha-is-your-expected-salary', views.blog28),
    path('employer_blog-8-tips-to-increase-resume-screening-effectiveness', views.blogemployer20),
    path('employer_blog-what-is-resume-screening-and-why-does-it-matter', views.blogemployer21),
    path('employer_blog-8-ways-to-automate-recruiting-processes', views.blogemployer22),
    path("blog-the-4c's-that-you-need-for-your-resume", views.blog29),
    path('employer_blog-what-is-broken-in-the-talent-acquisition-process', views.blogemployer23),
    path('employer_blog-three-steps-to-fix-your-broken-talent-acquisition-process', views.blogemployer24),
    path('employer_blog-4-challenges-campus-recruiters-could-meet', views.blogemployer25),
    path('employer_talent_sourcing', views.hubspot_form)
]

# This url needs to be included in the hirebeat/urls.py to work