# Generated by Django 3.0.7 on 2022-07-27 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0071_auto_20220725_1507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='is_freetrial',
            field=models.BooleanField(default=True),
        ),
    ]
