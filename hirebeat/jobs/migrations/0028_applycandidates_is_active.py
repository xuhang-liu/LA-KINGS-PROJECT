# Generated by Django 3.0.7 on 2021-09-16 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0027_auto_20210916_1055'),
    ]

    operations = [
        migrations.AddField(
            model_name='applycandidates',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]