from django.shortcuts import render
from django.http import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api.serializers import VideoSerializer, VideoLabelSerializer, VideoSentenceSerializer
from .models import Video, Label, Transcript, Sentence
from django.contrib.auth.models import User
from accounts.models import ReviewerInfo
from accounts.models import Profile
from questions.models import Categorys, SubCategory
from questions.serializers import SubcategorySerializer
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

def get_video_sentences_by_id(video_id):
    sentences = []
    transcript = Transcript.objects.filter(video_id=video_id)
    if transcript.exists():
        transcript_id = transcript[0].id
        queryset = Sentence.objects.filter(transcript_id=transcript_id)

        for i in range(len(queryset)):
            serializer = VideoSentenceSerializer(queryset[i])
            sentence = serializer.data
            sentences.append(sentence)
    else:
        sentences.append({
            "id": -1,
            "timestamp": "0.00",
            "sentence": "This video has no sentence",
            "transcript": -1})
    return sentences

def get_question_subcategories(category):
    subcategories = []
    queryset = Categorys.objects.filter(category_des=category).values('subCategorys')
    sub_list = queryset[0]["subCategorys"].split(",")
    num = len(sub_list)

    for i in range(num):
        id = int(sub_list[i])
        s = SubCategory.objects.filter(id=id)
        serializer = SubcategorySerializer(s[0])
        subcategory = serializer.data
        subcategories.append(subcategory)
    return subcategories

@api_view(['GET'])
def get_unreviewed_video_list(request):
    print("===Get Unreviewed Video List Called===")
    data = []
    video_list = []
    video_sentences = []
    question_categories = []
    # get videos
    videos = Video.objects.filter(Q(needed_expert_review=True, is_expert_reviewed=False) |
                                  Q(needed_ai_review=True,is_ai_reviewed=False)).order_by('created_at')
    for i in range(len(videos)):
        # videos
        serializer = VideoSerializer(videos[i])
        video_list.append(serializer.data)
        # video sentences
        sentences = get_video_sentences_by_id(videos[i].id)
        video_sentences.append(sentences)
        # question subcategories
        subcategories = get_question_subcategories(videos[i].q_category)
        question_categories.append(subcategories)

    data.append(video_list)
    data.append(video_sentences)
    data.append(question_categories)

    # get review count
    # Use in view func to check group instead of decorator due to the issue: can't pass request.user to decorator
    if not group_check(allowed_groups=['reviewers'], user=request.user):
        return HttpResponseBadRequest(
            {"You are not authorized to view this page. Please don't use incognito browsers."})

    review_count = ReviewerInfo.objects.filter(user=request.user)[0].review_count

    return Response({
        "data": data,
        "nums": len(data[0]),
        "review_count": review_count
    })

@api_view(['GET'])
def get_review_count(request):
    # Use in view func to check group instead of decorator due to the issue: can't pass request.user to decorator
    if not group_check(allowed_groups=['reviewers'], user=request.user):
        return HttpResponseBadRequest(
            {"You are not authorized to view this page. Please don't use incognito browsers."})

    review_count = ReviewerInfo.objects.filter(user=request.user)[0].review_count
    return Response({
        "review_count": review_count,
    })

@api_view(['POST'])
def mark_video_as_needed_review(request):
    id = request.data["id"]
    type = request.data["type"]
    video = Video.objects.filter(id=id)[0]
    owner_id = video.owner_id
    profile = Profile.objects.filter(user_id=owner_id)[0]
    if type == "expert":
        video.needed_expert_review = True
        profile.saved_video_count += 1
    if type == "ai":
        video.needed_ai_review = True
        profile.saved_video_count += 1
    video.save()
    profile.save()
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

@api_view(['GET'])
def get_video_sentences(request):
    print("===Get Video Sentences Called===")
    video_id = request.query_params.get("videoId")
    transcript = Transcript.objects.filter(video_id=video_id)
    transcript_id = transcript[0].id

    sentences = []
    queryset = Sentence.objects.filter(transcript_id=transcript_id)
    for i in range(len(queryset)):
        serializer = VideoSentenceSerializer(queryset[i])
        sentence = serializer.data
        sentences.append(sentence)

    return Response({
        "sentences": sentences
    })

@api_view(['GET'])
def get_video_user(request):
    print("===Get Video User Called===")
    video_id = request.query_params.get("videoID")
    video = Video.objects.filter(id=video_id)
    user = User.objects.filter(id=video[0].owner_id)[0]
    email = user.email

    return Response({
        "email": email
    })

@api_view(['POST'])
def delete_video(request):
    id = request.data["id"]
    Video.objects.filter(id=id).delete()
    return Response({"deleted_video_id": id})