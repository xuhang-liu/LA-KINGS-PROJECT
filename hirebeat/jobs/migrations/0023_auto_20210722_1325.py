# Generated by Django 3.0.7 on 2021-07-22 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0022_auto_20210715_1117'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applycandidates',
            name='result_rate',
            field=models.CharField(blank=True, default='0', max_length=50, null=True),
        ),
    ]