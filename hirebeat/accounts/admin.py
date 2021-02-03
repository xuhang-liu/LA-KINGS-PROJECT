from django.contrib import admin
from .models import ReviewerInfo
from .models import Profile
from .models import CandidatesInterview
# Register your models here.

admin.site.register(ReviewerInfo)
admin.site.register(Profile)
admin.site.register(CandidatesInterview)