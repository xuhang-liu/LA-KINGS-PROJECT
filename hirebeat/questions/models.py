from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
import datetime

class SubCategory(models.Model):
    sub_category = models.CharField(max_length=300, default="Not Provided", null=True)

    def __str__(self):
        return self.sub_category


class Question(models.Model):
    class QuestionCategory(models.TextChoices):
        PositiveAttitude = 'Positive Attitude', _('Positive Attitude')
        WorkCommitment = 'Work Commitment', _('Work Commitment')
        TeamWork = 'Teamwork Skill', _('Teamwork Skill')
        Leadership = 'Leadership', _('Leadership')
        PressureHandling = 'Pressure Handling', _('Pressure Handling')
        ProactiveSkill = 'Proactive Skill', _('Proactive Skill')
        WorkEthic = 'Work Ethic', _('Work Ethic')
        Creativity = 'Creativity', _('Creativity')
        Reliability = 'Reliability', _('Reliability')
        DetailOriented = 'Detail Oriented', _('Detail Oriented')
        CommunicationSkill = 'Communication Skill', _('Communication Skill')
        ProblemSolving = 'Problem Solving', _('Problem Solving')

        # TQ categories
        Accounting = 'Accounting', _('Accounting')
        AdministrateSupport = 'Administrate Support', _('Administrate Support')
        Consulting = 'Consulting', _('Consulting')
        Finance = 'Finance', _('Finance')
        HumanResources = 'Human Resources', _('Human Resources')
        Marketing = 'Marketing', _('Marketing')
        ProductManagement = 'Product Management', _('Product Management')
        Retail = 'Retail', _('Retail')
    # id is auto created
    def __str__(self):
        return self.category + '|' + self.description
        
    title = models.CharField(max_length=300, default="BQ")
    description = models.TextField(default="No description",null=True)
    category = models.CharField(
        max_length=50,
        choices=QuestionCategory.choices,
        default=QuestionCategory.PositiveAttitude
    )
    answer = models.TextField(blank=True, null=True)
    explain = models.TextField(blank=True, null=True)
    level = models.IntegerField(default=1)

class Positions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=300, null=True, blank=True)
    job_id = models.CharField(max_length=100, null=True, blank=True)
    job_description = models.TextField(blank=True, null=True)
    is_closed = models.BooleanField(default=False)
    invite_date = models.DateTimeField(auto_now_add=True)
    questionTime = models.IntegerField(default=60)
    def __str__(self):
        return self.job_title


class InterviewQuestions(models.Model): 
    description = models.TextField(default="No description",null=True)
    positions = models.ForeignKey(Positions, on_delete=models.CASCADE)
    def __str__(self):
        return self.description

class InvitedCandidates(models.Model):
    positions = models.ForeignKey(Positions, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=300, null=True, blank=True)
    invite_date = models.DateTimeField(auto_now_add=True)
    accept_date = models.DateTimeField(auto_now_add=True)
    comment_status = models.IntegerField(default=0)  # 1 is accept， 2 is hold, 3 is reject
    secondround_status = models.IntegerField(default=0)
    is_recorded = models.BooleanField(default=False)
    video_count = models.IntegerField(default=0)
    is_viewed = models.BooleanField(default=False)

    def __str__(self):
        return self.name + '|' + self.email

class InterviewFeedback(models.Model):
    rating = models.BigIntegerField()
    feedback = models.TextField(default="Not Provided",null=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    def __str__(self):
        return self.rating + '|' + self.feedback

class Categorys(models.Model):

    subCategorys = models.CharField(max_length=300, null=True, blank=True)
    category_des = models.CharField(max_length=100, null=True, blank=True)
    questions = models.CharField(max_length=500, null=True, blank=True)
    def __str__(self):
        return self.category_des + '|' + self.subCategorys

class InterviewResumes(models.Model):
    positionId = models.ForeignKey(Positions, on_delete=models.CASCADE)
    candidateId = models.ForeignKey(User, on_delete=models.CASCADE)
    resumeURL = models.URLField(max_length=200)
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
    invite_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.resumeURL

class SubReviewers(models.Model):
    r_name = models.CharField(max_length=30, null=True, blank=True)
    r_email = models.CharField(max_length=50, null=True, blank=True)
    company_name = models.CharField(max_length=30,null=True, blank=True)
    position = models.ForeignKey(Positions, null=True, blank=True, on_delete=models.CASCADE)
    def __str__(self):
        return self.r_email

class ExternalReviewers(models.Model):
    r_name = models.CharField(max_length=30, null=True, blank=True)
    r_email = models.CharField(max_length=50, null=True, blank=True)
    company_name = models.CharField(max_length=30,null=True, blank=True)
    position = models.ForeignKey(Positions, null=True, blank=True, on_delete=models.CASCADE)

