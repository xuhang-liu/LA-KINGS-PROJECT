# Generated by Django 3.0.7 on 2021-06-22 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0042_invitedcandidates_resume_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='invitedcandidates',
            name='location',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='invitedcandidates',
            name='phone',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]