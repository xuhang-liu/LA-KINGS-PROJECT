# Generated by Django 3.0.7 on 2021-03-05 19:54

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0040_auto_20210304_1809'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wpvideo',
            name='video_comment',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=500, null=True), default=list, size=None),
        ),
    ]