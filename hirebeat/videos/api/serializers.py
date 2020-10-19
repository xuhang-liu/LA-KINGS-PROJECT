from rest_framework import serializers
from videos.models import Video, Label


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"

class VideoLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = "__all__"
