# Generated by Django 3.0.7 on 2023-01-30 01:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_delete_djangouser'),
    ]

    operations = [
        migrations.AddField(
            model_name='items',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='password',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
