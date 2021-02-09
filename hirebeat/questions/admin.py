from django.contrib import admin
from .models import Question
from .models import Positions
from .models import InvitedCandidates
from .models import InterviewFeedback
from .models import InterviewResumes

# Register your models here.
admin.site.register(Question)
admin.site.register(Positions)
admin.site.register(InvitedCandidates)
admin.site.register(InterviewFeedback)
admin.site.register(InterviewResumes)