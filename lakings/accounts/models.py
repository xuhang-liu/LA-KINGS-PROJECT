from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField


class UserProfile(models.Model):
    username = models.CharField(max_length=100, null=True, blank=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    datejoined = models.DateTimeField(auto_now_add=True)


class Items(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=100, null=True, blank=True)
    price = models.FloatField(default=0)
    quantity = models.IntegerField(default=0)
    last_edit_user_id = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, default=1)


class ShoppingList(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    item_id = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True) ##Foreign key can not go inside the array
    item_quantity = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    is_done = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True) ##Boolean can not go inside the array
    user_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=1)
