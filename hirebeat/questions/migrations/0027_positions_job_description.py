# Generated by Django 3.0.7 on 2021-02-16 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0026_interviewresumes'),
    ]

    operations = [
        migrations.AddField(
            model_name='positions',
            name='job_description',
            field=models.TextField(blank=True, null=True),
        ),
    ]