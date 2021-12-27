# Generated by Django 3.0.7 on 2021-12-27 20:28

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0059_profile_ats_api_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='payg_credit',
            field=models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1000)]),
        ),
    ]
