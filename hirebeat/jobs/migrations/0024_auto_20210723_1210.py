# Generated by Django 3.0.7 on 2021-07-23 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0023_auto_20210722_1325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applycandidates',
            name='result_rate',
            field=models.CharField(default='0', max_length=50),
        ),
    ]
