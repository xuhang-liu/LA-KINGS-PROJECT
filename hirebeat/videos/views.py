from django.shortcuts import render
from django.http import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api.serializers import VideoSerializer, VideoLabelSerializer
from .models import Video, Label
from accounts.models import ReviewerInfo
# For fake ai
from django.db.models import Q

from django.contrib.auth.decorators import user_passes_test

#decorator
def allowed_users(allowed_groups=[]):
    def decorator(view_func):
        def wrapper_func(request, *args, **kwargs):
            group = None
            if request.user.groups.exists():
                group = request.user.groups.all()[0]
            if str(group) in allowed_groups:
                return view_func(request, *args, **kwargs)
            else:
                return HttpResponseBadRequest({"You are not authorized to view this page. Please don't use incognito browsers."})
        return wrapper_func
    return decorator

#in view func
def group_check(allowed_groups,user):
    group = None
    if user.groups.exists():
        group = user.groups.all()[0]
    if str(group) in allowed_groups:
        print(str(group))
        return True
    else:
        return False


#@allowed_users(allowed_groups=['admin','reviewers'])

@api_view(['GET'])
def get_unreviewed_video(request):

    # Use in view func to check group instead of decorator due to the issue: can't pass request.user to decorator
    if not group_check(allowed_groups=['reviewers'],user=request.user):
        return HttpResponseBadRequest({"You are not authorized to view this page. Please don't use incognito browsers."})
    
    video = None
    videos = Video.objects.filter(Q(needed_expert_review=True,is_expert_reviewed=False)|Q(needed_ai_review=True,is_ai_reviewed=False)).order_by('created_at')
    if videos.exists() :
        video = videos[0]
    serializer = VideoSerializer(video)
    review_count = ReviewerInfo.objects.filter(user=request.user)[0].review_count
    return Response({
        "video":serializer.data,
        "review_count":review_count,
    })

@api_view(['POST'])
def mark_video_as_needed_review(request):
    id = request.data["id"]
    type = request.data["type"]
    video = Video.objects.filter(id=id)[0]
    if type == "expert":
        video.needed_expert_review = True
    if type == "ai":
        video.needed_ai_review = True
    video.save()
    serializer = VideoSerializer(video)
    return Response(serializer.data)

@api_view(['POST'])
def add_video_label(request):
    print("===Save Video Label Called===")
    label = request.data["label"]
    sentence = request.data["sentence"]
    subCategory = request.data["subCategory"]
    data = Label.objects.create(label=label, sentence=sentence, subCategory=subCategory)
    return Response({
        "label": label,
        "sentence": sentence,
        "subCategory": subCategory
    })
