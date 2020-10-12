from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Resume(models.Model):
    # id is auto created
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(User, related_name="resume", on_delete = models.CASCADE, null = True)
    resume_url = models.URLField(max_length=200)
    job_title = models.CharField(max_length=200, default="Not Provided", null=True)
    jd_text = models.TextField(blank=True)
    result_rate = models.CharField(max_length=50, null=True, blank=True)
    ats_findings_count = models.CharField(max_length=50, null=True, blank=True)
    rec_findings_count = models.CharField(max_length=50, null=True, blank=True)
    skills_match_count = models.CharField(max_length=50, null=True, blank=True)
    skills_keywords_bool = models.BooleanField(default=False, null=True)
    skills_keywords = models.TextField(blank=True, null=True)
    education_match_bool = models.BooleanField(default=False, null=True)
    education_match = models.TextField(blank=True, null=True)
    section_headings_bool = models.BooleanField(default=False, null=True)
    section_headings = models.TextField(blank=True, null=True)
    file_type_list_bool = ArrayField(models.BooleanField(default=False), blank=True, null=True)
    file_type_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    data_formating_bool = models.BooleanField(default=False, null=True)
    data_formating = models.TextField(blank=True, null=True)
    word_count_bool = models.BooleanField(default=False, null=True)
    word_count_text = models.TextField(blank=True, null=True)
    measureable_results_list_bool = ArrayField(models.BooleanField(default=False), blank=True, null=True)
    measureable_results_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    job_level_text_bool = models.BooleanField(default=False, null=True)
    job_level_text = models.TextField(blank=True, null=True)
    avoid_words_bool = models.BooleanField(default=False, null=True)
    avoid_words_text = models.TextField(blank=True, null=True)
    hard_skill_skills_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    hard_skill_variations_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    hard_skill_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    hard_skill_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    soft_skill_skills_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    soft_skill_variations_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    soft_skill_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    soft_skill_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    other_skill_skills_list = ArrayField(models.TextField(blank=True), blank=True, null=True)
    other_skill_resume_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)
    other_skill_jd_list = ArrayField(models.CharField(default=0, max_length=50), blank=True, null=True)

    def __str__(self):
        return self.owner.username + '|' + self.created_at.strftime("%m/%d/%Y")