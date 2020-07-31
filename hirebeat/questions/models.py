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
        LoyaltyCommitment = 'Loyalty & Commitment', _('Loyalty & Commitment')
        TeamPlayer = 'Team Player Spirit', _('Team Player Spirit')
        Leadership = 'Leadership', _('Leadership')
        PressureHandling = 'Pressure Handling', _('Pressure Handling')
        SelfMotivated = 'Self-Motivated', _('Self-Motivated')
        WorkEthic = 'Strong Work Ethic', _('Strong Work Ethic')
        Creativity = 'Creativity', _('Creativity')
        Dependable = 'Dependable & Reliable', _('Dependable & Reliable')
        DetailOriented = 'Detail Oriented', _('Detail Oriented')
        Communication = 'Good Communication', _('Good Communication')
        ProblemSolving = 'Problem Solving', _('Problem Solving')
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

class Categorys(models.Model):

    subCategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    def __str__(self):
        return self.question.category + '|' + self.subCategory.sub_category