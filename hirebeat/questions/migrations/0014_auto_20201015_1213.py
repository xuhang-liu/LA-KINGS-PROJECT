# Generated by Django 3.0.7 on 2020-10-15 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0013_question_explain'),
    ]

    operations = [
        migrations.AddField(
            model_name='categorys',
            name='category_des',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='categorys',
            name='questions',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='categorys',
            name='subCategorys',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
