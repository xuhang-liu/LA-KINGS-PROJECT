# Generated by Django 3.0.7 on 2022-01-20 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0056_invitedcandidates_shortcat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitedcandidates',
            name='invite_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]