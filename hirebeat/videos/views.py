from django.shortcuts import render
from django.http import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api.serializers import VideoSerializer, VideoSentenceSerializer, WPVideoSerializer
from .models import Video, Label, Transcript, Sentence, WPVideo
from django.contrib.auth.models import User
from accounts.models import ReviewerInfo, Profile
from questions.models import InterviewQuestions, Positions, InvitedCandidates
from questions.models import Categorys, SubCategory
from videos.models import WPVideo
from questions.serializers import SubcategorySerializer
# For fake ai
from django.db.models import Q

from django.contrib.auth.decorators import user_passes_test
from rest_framework import status
import boto
import json
from django.http import HttpResponse
import os
from dotenv import load_dotenv
load_dotenv()
from django.core.exceptions import ObjectDoesNotExist

# boto and s3 configuration
if not boto.config.get('s3', 'use-sigv4'):
    boto.config.add_section('s3')
    boto.config.set('s3', 'use-sigv4', 'True')
boto.config.set('s3', 'host', 's3.amazonaws.com')
conn = boto.connect_s3(os.getenv("AWSAccessKeyId"), os.getenv("AWSSecretKey"))

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
    # return empty list when queryset not exist
    if len(queryset) == 0:
        return subcategories
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
        print(333)
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
    if type == "ai":
        video.needed_ai_review = True
    profile.feedback_count += 1
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

@api_view(['GET'])
def get_applicants_videos(request):
    # print("===Get Candidate Videos Called===")
    int_ques = []
    email = request.query_params.get("email")
    positionId = int(request.query_params.get("positionId"))
    position = Positions.objects.get(pk=positionId)
    questions = InterviewQuestions.objects.filter(positions=position)
    user = User.objects.filter(email=email)
    # check user existence
    if len(user) == 0:
        return Response({"int_ques": int_ques})
    # get applicant videos by question_id first
    for i in range(len(questions)):
        obj = questions[i]
        ques_id = obj.id
        user_id = user[0].id
        wpvideo = WPVideo.objects.filter(question_id=ques_id, owner_id=user_id)
        if len(wpvideo) > 0:
            video = wpvideo[0]
            serializer = WPVideoSerializer(video)
            int_ques.append(serializer.data)
    # if no videos, then get applicant videos by position_id
    if len(int_ques) == 0:
        user_id = user[0].id
        wpvideos = WPVideo.objects.filter(position_id=positionId, owner_id=user_id)
        for i in range(len(wpvideos)):
            video = wpvideos[i]
            serializer = WPVideoSerializer(video)
            int_ques.append(serializer.data)

    return Response({
        "int_ques": int_ques,
    })

@api_view(['GET'])
def get_applicants_info(request):
    # print("===Get Candidate Info Called===")
    email = request.query_params.get("email")
    try:
        user = User.objects.get(email=email)
        profile = Profile.objects.get(user_id=user.id)
    except ObjectDoesNotExist:
        return Response({
            "id_candidate": -1,
            "username_candidate": "",
            "email_candidate": email,
            "phone_candidate": "",
            "location_candidate": "",
        })

    return Response({
        "id_candidate": user.id,
        "username_candidate": user.username,
        "email_candidate": user.email,
        "phone_candidate": profile.phone_number,
        "location_candidate": profile.location,
    })

@api_view(['POST'])
def delete_video(request):
    id = request.data["id"]
    Video.objects.filter(id=id).delete()
    return Response({"deleted_video_id": id})

@api_view(['POST'])
def add_wp_video(request):
    print("===Save WP Video Called===")
    email = request.data["email"]
    positions = request.data["positions"]
    url = request.data["url"]
    question_id = request.data["question_id"]
    question_desc = request.data["question_desc"]
    # get user id by email
    user = User.objects.get(email=email)
    owner_id = user.id

    wp_video = WPVideo(
        email = email,
        url = url,
        question_id = question_id,
        question_desc = question_desc,
        owner_id = owner_id,
        position_id = positions
    )
    wp_video.save()
    invited_obj = InvitedCandidates.objects.get(email=email, positions=positions)
    invited_obj.is_recorded = True
    # update saved video count
    invited_obj.video_count += 1
    invited_obj.is_viewed = False
    invited_obj.save()

    return Response("Saved data to database successfully", status=status.HTTP_200_OK)

def sign_s3_upload_wp_video(request):
    print("===== wp video sign api called =======")
    object_name = request.GET['objectName']
    content_type = request.GET['contentType']
    # content_type = mimetypes.guess_type(object_name)[0]
    # content_type = content_type + ";codecs=vp8,opus" ### ATTENTION: this added part is required if upload dirctly from the browser. If used for uploading local files, comment this line out.###

    signed_url = conn.generate_url(
        300,
        "PUT",
        os.getenv("WPVideo_Bucket"),
        object_name,
        headers={'Content-Type': content_type, 'x-amz-acl': 'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))

@api_view(['POST'])
def update_video_comments(request):
    print("updatestars")
    primary_key = request.data["pk"]
    new_stars = request.data["stars"]
    new_comment = request.data["comment"]
    wpv = WPVideo.objects.get(pk=primary_key)
    wpv.video_stars = new_stars
    if(new_comment != ""):
        wpv.video_comment.append(new_comment)
    wpv.save()

    return Response({
        "new_stars": new_stars,
        "new_comment": new_comment,
    })

@api_view(['POST'])
def add_tq_video_limit(request):
    owner_id = request.data["owner_id"]
    id = request.data["id"]
    type = request.data["type"]
    video = Video.objects.get(pk=id)
    if type == "ai":
        if video.is_tq_ai_clicked == False:
            video.is_tq_ai_clicked = True
            video.save()
            user = User.objects.get(pk=owner_id)
            profile = Profile.objects.get(user_id=user)
            profile.feedback_count += 1
            profile.save()
    if type == "sample":
        if video.is_tq_sample_clicked == False:
            video.is_tq_sample_clicked = True
            video.save()
            user = User.objects.get(pk=owner_id)
            profile = Profile.objects.get(user_id=user)
            profile.feedback_count += 1
            profile.save()

    return Response("Saved data to database successfully", status=status.HTTP_200_OK)