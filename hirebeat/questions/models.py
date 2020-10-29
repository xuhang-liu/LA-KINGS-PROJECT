from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

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

class Categorys(models.Model):

    subCategorys = models.CharField(max_length=300, null=True, blank=True)
    category_des = models.CharField(max_length=100, null=True, blank=True)
    questions = models.CharField(max_length=500, null=True, blank=True)
    def __str__(self):
        return self.category_des + '|' + self.subCategorys