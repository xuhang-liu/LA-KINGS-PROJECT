# Generated by Django 3.0.7 on 2022-05-23 20:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0069_profile_jobt_job_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='jobt_job_id',
        ),
    ]