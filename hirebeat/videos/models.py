from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
from questions.models import Question, SubCategory
from django.utils.translation import gettext_lazy as _

class Video(models.Model):
    # id is auto created
    url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="videos", on_delete = models.CASCADE, null = True)
    q_description = models.CharField(default="Sample question", max_length=500)
    class QuestionType(models.TextChoices):
        BehaviorQuestion = 'Behavior Question', _('Behavior Question')
        TechniqueQuestion = 'Technique Question', _('Technique Question')
    q_type= models.CharField(max_length=50, choices=QuestionType.choices,default=QuestionType.BehaviorQuestion)
    q_category = models.CharField(default="Random", max_length=100)
    # review related
    needed_expert_review = models.BooleanField(default=False)
    is_expert_reviewed = models.BooleanField(default=False)
    needed_ai_review = models.BooleanField(default=False)
    is_ai_reviewed = models.BooleanField(default=False)
    # expert
    comments = models.TextField(default="No comments yet")
    expert_score = models.FloatField(default=10.0)
    expert_review_categories = models.CharField(default="Positive Attitude,Communication,Detail Oriented,Team Spirit,Stress Tolerance", max_length=500)
    expert_category_score = models.CharField(default="10,10,10,10,10", max_length=500)
    reviewer = models.ForeignKey(User, related_name="reviewed_videos", on_delete= models.SET_NULL, null=True, blank=True)
    # ai
    ai_score = models.FloatField(default=10.0)
    ai_review_categories = models.CharField(default="Positive Attitude,Communication,Detail Oriented,Team Spirit,Stress Tolerance", max_length=500)
    #ai_category_score is a char b/c sqlite has no support for ArrayField. Now db is migrated to postgres, this filed can be an ArrayField. Code in frontend should change accordingly.
    ai_category_score = models.CharField(default="10,10,10,10,10", max_length=500) 
    # ai words and ummm... detection
    ai_words_per_minute = models.CharField(null=True, max_length=50)
    ai_filter_words = ArrayField(models.CharField(null=True, max_length=100), blank=True, null=True)
    ai_auto_ready = models.BooleanField(default=False)
    
    # Performance scores
    ai_performance_ready = models.BooleanField(default=False)
    ai_performance_total_score = models.CharField(null=True, max_length=50)
    ai_um_counter_score = models.CharField(null=True, max_length=50)
    ai_filter_words_score = models.CharField(null=True, max_length=50)
    ai_pace_of_speech_score = models.CharField(null=True, max_length=50)
    ai_power_words_score = models.CharField(null=True, max_length=50)
    ai_pause_counter_score = models.CharField(null=True, max_length=50)
    ai_vocabulary_score = models.CharField(null=True, max_length=50)

    # TQ answer
    q_answer = models.TextField(blank=True, null=True)
    q_explain = models.TextField(blank=True, null=True)
    # TQ limit Control
    is_tq_ai_clicked = models.BooleanField(default=False)
    is_tq_sample_clicked = models.BooleanField(default=False)

    def __str__(self):
        return self.owner.username + '|' + self.created_at.strftime("%m/%d/%Y")

class Transcript(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    transcript = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.transcript

class Sentence(models.Model):
    transcript = models.ForeignKey(Transcript, on_delete=models.CASCADE)
    timestamp = models.CharField(max_length=500, null=True, blank=True)
    sentence = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.timestamp + '|' + self.sentence

class Label(models.Model):
    sentence = models.BigIntegerField()
    subCategory = models.BigIntegerField()
    label = models.BooleanField(default=False)

class WPVideo(models.Model):
    email = models.CharField(max_length=50, null=True, blank=True)
    url = models.URLField(max_length=200)
    question_id = models.BigIntegerField()
    question_desc = models.CharField(max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.BigIntegerField(null=True, blank=True)
    video_stars = models.IntegerField(default=5)
    video_comment = ArrayField(models.CharField(null=True, max_length=500), default=list)
    def __str__(self):
        return self.email