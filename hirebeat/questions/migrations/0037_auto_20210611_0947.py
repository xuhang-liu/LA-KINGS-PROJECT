# Generated by Django 3.0.7 on 2021-06-11 13:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0036_auto_20210607_1727'),
    ]

    operations = [
        migrations.RenameField(
            model_name='positions',
            old_name='questionTime',
            new_name='response_time',
        ),
    ]