# Generated by Django 3.0.7 on 2022-05-02 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0065_auto_20220406_1326'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='viewed_employer_tutorial',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='viewed_employer_welcome',
            field=models.BooleanField(default=False),
        ),
    ]