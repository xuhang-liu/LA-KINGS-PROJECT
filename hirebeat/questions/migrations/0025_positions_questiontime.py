# Generated by Django 3.1.5 on 2021-02-03 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0024_auto_20210128_1943'),
    ]

    operations = [
        migrations.AddField(
            model_name='positions',
            name='questionTime',
            field=models.IntegerField(default=60),
        ),
    ]
