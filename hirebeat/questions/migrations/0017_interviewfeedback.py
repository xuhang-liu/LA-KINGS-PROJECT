# Generated by Django 3.0.7 on 2021-01-17 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0016_interviewquestions_invitedcandidates_positions'),
    ]

    operations = [
        migrations.CreateModel(
            name='InterviewFeedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.BigIntegerField()),
                ('feedback', models.TextField(default='Not Provided', null=True)),
            ],
        ),
    ]
