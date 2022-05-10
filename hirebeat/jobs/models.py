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
    is_closed = models.IntegerField(default=0) # 0 means active, 1 means archived, 2 means closed, 3 means draft
    job_status = models.CharField(max_length=100, default="Published")
    job_url = models.CharField(max_length=100, null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)
    job_type = models.CharField(max_length=100, null=True, blank=True)
    company_overview = models.TextField(null=True, blank=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)
    company_logo = models.CharField(max_length=100, null=True, blank=True)
    job_post = models.IntegerField(default=1)  # 0 means disabled, 1 means free zr post, 2 means paid zr post
    loc_req = models.CharField(max_length=10, default="1") # 0 means no required, 1 means optional, 2 means disabled
    pho_req = models.CharField(max_length=10, default="1")
    lin_req = models.CharField(max_length=10, default="1")
    eeo_req = models.CharField(max_length=10, default="1") # 0 means disabled, 1 means enabled
    eeo_ques_req = models.CharField(max_length=10, default="1") # 0 means disabled, 1 means enabled
    skills = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    gh_current_stage_id = models.TextField(null=True, blank=True)
    gh_job_id = models.TextField(null=True, blank=True)
    first_publish_date = models.DateTimeField(null=True, blank=True)
    first_close_date = models.DateTimeField(null=True, blank=True)


class ApplyCandidates(models.Model):
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    resume_url = models.TextField(null=True, blank=True)
    apply_date = models.DateTimeField(auto_now_add=True)
    is_invited = models.IntegerField(default=0) # 0 means no action, 1 means invited, 2 means hold, 3 means reject
    result_rate = models.CharField(max_length=50, default="-1")
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
    is_viewed = models.BooleanField(default=False)
    linkedinurl = models.CharField(max_length=100, null=True, blank=True)
    apply_source = models.CharField(max_length=100, default="HireBeat")
    gender = models.CharField(max_length=100, null=True)
    race = models.CharField(max_length=200, null=True)
    # new resume analysis fields
    required_skills_name = ArrayField(models.CharField(default=0, max_length=100), blank=True, null=True)
    required_skills_on_resume = ArrayField(models.BooleanField(default=False), blank=True, null=True)
    required_skills_occurrence = ArrayField(models.IntegerField(default=0), blank=True, null=True)
    extra_skills_name = ArrayField(models.CharField(default=0, max_length=100), blank=True, null=True)
    extra_skills_on_resume = ArrayField(models.BooleanField(default=False), blank=True, null=True)
    extra_skills_occurrence = ArrayField(models.IntegerField(default=0), blank=True, null=True)
    transferable_skills_name = ArrayField(models.CharField(default=0, max_length=100), blank=True, null=True)
    transferable_skills_on_resume = ArrayField(models.BooleanField(default=False), blank=True, null=True)
    transferable_skills_occurrence = ArrayField(models.IntegerField(default=0), blank=True, null=True)
    current_stage = models.CharField(max_length=100, default="Resume Review") # Resume Review, Video Interview, Live Interview, Short List
    is_active = models.BooleanField(default=True)
    questions = ArrayField(models.CharField(default="", max_length=500), blank=True, null=True)
    answers = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    qualifications = ArrayField(models.BooleanField(default=True), blank=True, null=True)
    must_haves = ArrayField(models.BooleanField(default=True), blank=True, null=True)

class JobQuestion(models.Model):
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    question = models.CharField(max_length=300, default="")
    answer_type = models.CharField(max_length=100, default="boolean")
    answer = models.CharField(max_length=100, default="yes")
    is_must = models.BooleanField(default=False)

class ReceivedEmail(models.Model):
    to_email = models.CharField(max_length=100, null=True, blank=True)
    from_email = models.CharField(max_length=100, null=True, blank=True)
    subject = models.TextField(null=True, blank=True)
    plain_text = models.TextField(null=True, blank=True)
    is_received = models.BooleanField(default=False)
    create_date = models.DateTimeField(auto_now_add=True)


class PremiumJobList(models.Model):
    user_email = models.CharField(max_length=100, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)
    paid_date = models.DateTimeField(null=True, blank=True)
    is_paid = models.BooleanField(default=False)

class SourcingRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    additionalComment = models.CharField(max_length=300, null=True, blank=True)
    year_of_exp = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    sen_level = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    req_skill_set = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    pre_skill_set = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    industry_set = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    education_level = ArrayField(models.CharField(default="", max_length=100), blank=True, null=True)
    create_date = models.DateTimeField(auto_now_add=True)
    paid_date = models.DateTimeField(null=True, blank=True)
    is_paid = models.BooleanField(default=False)

class SourcingCandidates(models.Model):
    sourcingRequest = models.ForeignKey(SourcingRequest, on_delete=models.CASCADE)
    jobs = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    linkedin_url = models.CharField(max_length=100, null=True, blank=True)
    current_title = models.CharField(max_length=100, null=True, blank=True)
    current_company_name = models.CharField(max_length=100, null=True, blank=True)
    current_location = models.CharField(max_length=100, null=True, blank=True)
    current_industry = models.CharField(max_length=100, null=True, blank=True)
    current_company_size = models.CharField(max_length=100, null=True, blank=True)
    skillsets = models.TextField(blank=True, null=True)
    prev_title1 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_name1 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_industry1 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_size1 = models.CharField(max_length=100, null=True, blank=True)
    prev_title2 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_name2 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_industry2 = models.CharField(max_length=100, null=True, blank=True)
    prev_company_size2 = models.CharField(max_length=100, null=True, blank=True)
    approval = models.IntegerField(default=1) #0 means approve, 1 means onHold, 2 means reject
    status = models.IntegerField(default=0) #0 means new, 1 means viewed, 2 means contacted
    notes = models.TextField(blank=True, null=True)