from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from questions.models import Positions

class Jobs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    positions = models.ForeignKey(Positions, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=300, null=True, blank=True)
    job_id = models.CharField(max_length=100, null=True, blank=True)
    job_description = models.TextField(blank=True, null=True)
    job_location = models.CharField(max_length=300, null=True, blank=True)
    job_level = models.CharField(max_length=100, null=True, blank=True)
    is_closed = models.BooleanField(default=False)
    job_status = models.CharField(max_length=100, default="Published")
    job_url = models.CharField(max_length=100, null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)
    job_type = models.CharField(max_length=100, null=True, blank=True)
    company_overview = models.TextField(null=True, blank=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)


class ApplyCandidates(models.Model):
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    resume_url = models.CharField(max_length=100, null=True, blank=True)
    apply_date = models.DateTimeField(auto_now_add=True)
    is_invited = models.BooleanField(default=False)
    result_rate = models.CharField(max_length=50, null=True, blank=True)
    hard_skill_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    hard_skill_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    hard_skill_info_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    soft_skill_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    soft_skill_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    soft_skill_info_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    other_keyword_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    other_keyword_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    other_keyword_info_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    basic_cri_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    basic_cri_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    basic_cri_info_list = ArrayField(models.TextField(blank=True), blank=True, null=True)