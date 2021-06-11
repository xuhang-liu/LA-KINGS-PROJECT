# Generated by Django 3.0.7 on 2021-06-07 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0035_externalreviewers'),
    ]

    operations = [
        migrations.AddField(
            model_name='positions',
            name='camera_on',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='positions',
            name='prepare_time',
            field=models.IntegerField(default=30),
        ),
        migrations.AlterField(
            model_name='positions',
            name='questionTime',
            field=models.IntegerField(default=120),
        ),
    ]
