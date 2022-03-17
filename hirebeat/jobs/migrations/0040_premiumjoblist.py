# Generated by Django 3.0.7 on 2022-02-14 21:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('jobs', '0039_receivedemail'),
    ]

    operations = [
        migrations.CreateModel(
            name='PremiumJobList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_email', models.CharField(blank=True, max_length=100, null=True)),
                ('create_date', models.DateTimeField(auto_now_add=True)),
                ('is_paid', models.BooleanField(default=False)),
                ('jobs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobs.Jobs')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]