# Generated by Django 3.0.7 on 2022-02-09 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0038_auto_20220126_1229'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReceivedEmail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to_email', models.CharField(blank=True, max_length=100, null=True)),
                ('from_email', models.CharField(blank=True, max_length=100, null=True)),
                ('plain_text', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
