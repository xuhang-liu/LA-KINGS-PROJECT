# Generated by Django 3.0.7 on 2022-01-13 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0055_auto_20220112_1507'),
    ]

    operations = [
        migrations.AddField(
            model_name='invitedcandidates',
            name='shortcat',
            field=models.CharField(default='TBD', max_length=50),
        ),
    ]
