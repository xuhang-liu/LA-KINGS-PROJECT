from django.contrib import admin
from .models import Jobs
from .models import ApplyCandidates

# Register your models here.
admin.site.register(Jobs)
admin.site.register(ApplyCandidates)