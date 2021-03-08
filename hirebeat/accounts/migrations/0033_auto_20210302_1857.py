# Generated by Django 3.0.7 on 2021-03-02 18:57

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0032_auto_20210226_2202'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='is_subreviwer',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='reviewer_count',
            field=models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(3)]),
        ),
    ]