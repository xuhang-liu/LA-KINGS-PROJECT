from rest_framework import serializers
from videos.models import Video, Label, Transcript, Sentence


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"

class VideoLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = "__all__"

class VideoTranscriptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transcript
        fields = "__all__"

class VideoSentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = "__all__"