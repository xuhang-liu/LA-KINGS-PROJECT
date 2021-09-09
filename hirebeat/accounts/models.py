from django.db import models
from django.contrib.auth.models import User
from questions.models import Positions
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class ReviewerInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    review_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username

class CandidatesInterview(models.Model):
    positions = models.ForeignKey(Positions, on_delete=models.CASCADE)
    email = models.CharField(max_length=50, null=True, blank=True)
    is_recorded = models.BooleanField(default=False)
    url_clicked = models.BooleanField(default=False)

class Profile(models.Model):
    class MembershipCategory(models.TextChoices):
        Regular = 'Regular', _('Regular')
        Premium = 'Premium', _('Premium')
        Prestige = 'Prestige', _('Prestige')
    membership = models.CharField(
        max_length=20,
        choices=MembershipCategory.choices,
        default=MembershipCategory.Regular
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_employer = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=12, default="Not provided")
    summary = models.TextField(default="Not provided")
    intro_video_link = models.URLField(null=True, blank=True)
    education = models.CharField(max_length=50,default="Not provided")
    location = models.CharField(max_length=50,default="Not provided")
    profession = models.CharField(max_length=50,default="Not provided")
    save_limit = models.IntegerField(default=3,validators=[
            MaxValueValidator(1000),
            MinValueValidator(5)
        ])
    saved_video_count = models.IntegerField(default=0,validators=[
            MaxValueValidator(1000)
        ])
    save_resume_limit = models.IntegerField(default=1,validators=[
            MaxValueValidator(1000),
            MinValueValidator(1)
        ])
    saved_resume_count = models.IntegerField(default=0,validators=[
            MaxValueValidator(1000)
        ])
    feedback_limit = models.IntegerField(default=2, validators=[
        MaxValueValidator(1000),
        MinValueValidator(2)
    ])
    feedback_count = models.IntegerField(default=0, validators=[
        MaxValueValidator(1000)
    ])
    email_confirmed = models.BooleanField(default=False)
    customer_id = models.CharField(max_length=30,null=True, blank=True)
    sub_id = models.CharField(max_length=30,null=True, blank=True)
    plan_interval = models.CharField(max_length=30, null=True, blank=True)
    company_name = models.CharField(max_length=30,null=True, blank=True)
    is_subreviwer = models.BooleanField(default=False)
    is_external_reviewer = models.BooleanField(default=False)
    reviewer_count = models.IntegerField(default=1, validators=[
        MaxValueValidator(1000)
    ])
    external_reviewer_count = models.IntegerField(default=1, validators=[
        MaxValueValidator(1000)
    ])
    position_count = models.IntegerField(default=0, validators=[
        MaxValueValidator(1000)
    ])
    position_limit = models.IntegerField(default=1000, validators=[
        MaxValueValidator(1000)
    ])
    candidate_limit = models.IntegerField(default=1000, validators=[
        MaxValueValidator(1000)
    ])
    viewed_tutorial = models.BooleanField(default=False)
    merge_public_token = models.TextField(null=True, blank=True)
    is_freetrial = models.BooleanField(default=True)
    datejoined = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()

class ProfileDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, default="")
    f_name = models.CharField(max_length=100, default="")
    l_name = models.CharField(max_length=100, default="")
    self_description = models.TextField(null=True, blank=True)
    logo_url = models.CharField(max_length=100, null=True, blank=True)
    profile_rate = models.IntegerField(default=5)
    info_rate = models.IntegerField(default=0)

    linkedin = models.CharField(max_length=100, null=True, blank=True)
    website = models.CharField(max_length=100, null=True, blank=True)
    github = models.CharField(max_length=100, null=True, blank=True)

    year_of_exp = models.CharField(max_length=10, null=True, blank=True)
    current_company = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)

    video_url = models.CharField(max_length=100, null=True, blank=True)
    summary = models.TextField(null=True, blank=True)

    school1 = models.CharField(max_length=100, null=True, blank=True)
    graduation_date1 = models.CharField(max_length=100, null=True, blank=True)
    degree1 = models.CharField(max_length=100, null=True, blank=True)
    major1 = models.CharField(max_length=100, null=True, blank=True)
    extra_major1 = models.CharField(max_length=100, null=True, blank=True)
    gpa1 = models.CharField(max_length=100, null=True, blank=True)
    school2 = models.CharField(max_length=100, null=True, blank=True)
    graduation_date2 = models.CharField(max_length=100, null=True, blank=True)
    degree2 = models.CharField(max_length=100, null=True, blank=True)
    major2 = models.CharField(max_length=100, null=True, blank=True)
    extra_major2 = models.CharField(max_length=100, null=True, blank=True)
    gpa2 = models.CharField(max_length=100, null=True, blank=True)
    school3 = models.CharField(max_length=100, null=True, blank=True)
    graduation_date3 = models.CharField(max_length=100, null=True, blank=True)
    degree3 = models.CharField(max_length=100, null=True, blank=True)
    major3 = models.CharField(max_length=100, null=True, blank=True)
    extra_major3 = models.CharField(max_length=100, null=True, blank=True)
    gpa3 = models.CharField(max_length=100, null=True, blank=True)

    company1 = models.CharField(max_length=100, null=True, blank=True)
    title1 = models.CharField(max_length=100, null=True, blank=True)
    start_date1 = models.CharField(max_length=100, null=True, blank=True)
    end_date1 = models.CharField(max_length=100, null=True, blank=True)
    work_description1 = models.TextField(null=True, blank=True)
    company2 = models.CharField(max_length=100, null=True, blank=True)
    title2 = models.CharField(max_length=100, null=True, blank=True)
    start_date2 = models.CharField(max_length=100, null=True, blank=True)
    end_date2 = models.CharField(max_length=100, null=True, blank=True)
    work_description2 = models.TextField(null=True, blank=True)
    company3 = models.CharField(max_length=100, null=True, blank=True)
    title3 = models.CharField(max_length=100, null=True, blank=True)
    start_date3 = models.CharField(max_length=100, null=True, blank=True)
    end_date3 = models.CharField(max_length=100, null=True, blank=True)
    work_description3 = models.TextField(null=True, blank=True)
    company4 = models.CharField(max_length=100, null=True, blank=True)
    title4 = models.CharField(max_length=100, null=True, blank=True)
    start_date4 = models.CharField(max_length=100, null=True, blank=True)
    end_date4 = models.CharField(max_length=100, null=True, blank=True)
    work_description4 = models.TextField(null=True, blank=True)
    company5 = models.CharField(max_length=100, null=True, blank=True)
    title5 = models.CharField(max_length=100, null=True, blank=True)
    start_date5 = models.CharField(max_length=100, null=True, blank=True)
    end_date5 = models.CharField(max_length=100, null=True, blank=True)
    work_description5 = models.TextField(null=True, blank=True)

    resume_name = models.CharField(max_length=100, null=True, blank=True)
    resume_url = models.CharField(max_length=100, null=True, blank=True)

    skills = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    languages = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    job_type = models.CharField(max_length=100, default="")
    current_job_title = models.CharField(max_length=150, default="")
    share_profile = models.BooleanField(default=False)
    open_to_hr = models.BooleanField(default=False)

class EmployerPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class EmployerProfileDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    self_description = models.TextField(null=True, blank=True)

    linkedin = models.CharField(max_length=100, null=True, blank=True)
    website = models.CharField(max_length=100, null=True, blank=True)
    twitter = models.CharField(max_length=100, null=True, blank=True)
    facebook = models.CharField(max_length=100, null=True, blank=True)

    company_type = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    company_size = models.CharField(max_length=100, null=True, blank=True)

    video_url = models.CharField(max_length=100, null=True, blank=True)
    summary = models.TextField(null=True, blank=True)
    logo_url = models.CharField(max_length=100, null=True, blank=True)

    f_name = models.CharField(max_length=100, default="")
    l_name = models.CharField(max_length=100, default="")


class ProfileDetailEducation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    school = models.CharField(max_length=100, null=True, blank=True)
    graduation_date = models.CharField(max_length=100, null=True, blank=True)
    degree = models.CharField(max_length=100, null=True, blank=True)
    major = models.CharField(max_length=100, null=True, blank=True)
    extra_major = models.CharField(max_length=100, null=True, blank=True)
    gpa = models.CharField(max_length=100, null=True, blank=True)

class ProfileDetailExperience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    company = models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.CharField(max_length=100, null=True, blank=True)
    end_date = models.CharField(max_length=100, null=True, blank=True)
    work_description = models.TextField(null=True, blank=True)