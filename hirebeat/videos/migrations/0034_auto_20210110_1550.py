# Generated by Django 3.0.7 on 2021-01-10 23:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0033_wpvideo_owner_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wpvideo',
            old_name='owner_id',
            new_name='owner',
        ),
    ]