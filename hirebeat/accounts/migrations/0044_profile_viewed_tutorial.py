# Generated by Django 3.0.7 on 2021-05-24 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0043_profiledetail_logo_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='viewed_tutorial',
            field=models.BooleanField(default=False),
        ),
    ]
