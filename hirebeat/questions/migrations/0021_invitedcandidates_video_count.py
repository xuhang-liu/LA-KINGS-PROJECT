# Generated by Django 3.0.7 on 2021-01-26 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0020_merge_20210120_1144'),
    ]

    operations = [
        migrations.AddField(
            model_name='invitedcandidates',
            name='video_count',
            field=models.IntegerField(default=0),
        ),
    ]
