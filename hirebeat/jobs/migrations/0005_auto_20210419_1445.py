# Generated by Django 3.0.7 on 2021-04-19 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_applycandidates_is_invited'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='company_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='jobs',
            name='company_overview',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='jobs',
            name='job_type',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
