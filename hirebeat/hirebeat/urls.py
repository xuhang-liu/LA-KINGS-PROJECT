from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView
from django_email_verification import urls as mail_urls

urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("videos.urls")), 
    path("", include("accounts.urls")), 
    path("", include("questions.urls")),
    path("", include("resume.urls")),
    # This is visible to all on Github. Consider make the repo private later.
    # The trailing slash is required in browser.
    path("dontdobadthings/", admin.site.urls),
    path("email/", include(mail_urls)),
    ### let react router handle all other routes ###
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="frontend/index.html")), 
]
