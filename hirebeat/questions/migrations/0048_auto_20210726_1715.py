# Generated by Django 3.0.7 on 2021-07-26 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0047_merge_20210715_1224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interviewresumes',
            name='result_rate',
            field=models.CharField(default='-1', max_length=50),
        ),
        migrations.AlterField(
            model_name='invitedcandidates',
            name='result_rate',
            field=models.CharField(default='-1', max_length=50),
        ),
    ]