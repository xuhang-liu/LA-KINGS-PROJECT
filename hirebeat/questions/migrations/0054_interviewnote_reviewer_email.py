# Generated by Django 3.0.7 on 2021-10-25 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0053_auto_20211025_1152'),
    ]

    operations = [
        migrations.AddField(
            model_name='interviewnote',
            name='reviewer_email',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]