from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class ReviewerInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    review_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


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
    phone_number = models.CharField(max_length=12, null=True, blank=True)
    summary = models.TextField(default="Not provided")
    intro_video_link = models.URLField(null=True, blank=True)
    education = models.CharField(max_length=50,default="Not provided")
    location = models.CharField(max_length=50,default="Not provided")
    profession = models.CharField(max_length=50,default="Not provided")
    save_limit = models.IntegerField(default=5,validators=[
            MaxValueValidator(1000),
            MinValueValidator(5)
        ])
    saved_video_count = models.IntegerField(default=0,validators=[
            MaxValueValidator(1000)
        ])
    email_confirmed = models.BooleanField(default=False)
    customer_id = models.CharField(max_length=30,null=True, blank=True)

    def __str__(self):
        return self.user.username
        
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)
