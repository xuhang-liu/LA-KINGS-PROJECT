from .models import Question, Categorys, SubCategory, Positions, InterviewQuestions, InvitedCandidates, InterviewFeedback, InterviewResumes, SubReviewers
from accounts.models import CandidatesInterview
from videos.models import WPVideo
from rest_framework import generics, permissions
from .serializers import QuestionSerializer, SubcategorySerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
import random
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.core.exceptions import ObjectDoesNotExist
from datetime import timedelta
from django.utils import timezone

class QuestionAPIView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        number = self.request.query_params.get('number')
        category = self.request.query_params.get('category')
        if category != 'Random':
            questions=Question.objects.filter(category=category)
        else:
            questions=Question.objects.filter(title='BQ')
        questions = random.sample(list(questions), int(number))
        return questions

@api_view(['GET'])
def get_subcategories(request):
    print("===Get Question Subcategories Called===")
    category = request.query_params.get('category')
    queryset = Categorys.objects.filter(category_des=category).values('subCategorys')
    sub_list = queryset[0]["subCategorys"].split(",")

    subcategories = []
    num = len(sub_list)
    for i in range(num):
        id = int(sub_list[i])
        s = SubCategory.objects.filter(id=id)
        serializer = SubcategorySerializer(s[0])
        subcategory = serializer.data
        subcategories.append(subcategory)

    return Response({
        "subcategories": subcategories,
    })

@api_view(['GET'])
def get_random_question(request):
    queryset = Question.objects.all()
    question = random.sample(list(queryset), int(1))
    return Response({
        "question": question[0].description,
        "id": question[0].id,
    })

@api_view(['GET'])
def get_interview_questions(request):
    questions = []
    question_ids = []
    position_id = request.query_params.get("position_id")
    question_Obj = Positions.objects.get(pk=position_id)
    questionTime = question_Obj.questionTime

    interview_questions = InterviewQuestions.objects.filter(positions_id=position_id)
    for i in range(len(interview_questions)):
        obj = interview_questions[i]
        questions.append(obj.description)
        question_ids.append(obj.id)

    return Response({
        "questions": questions,
        "question_ids": question_ids,
        "questionTime": questionTime,
    })

@api_view(['POST'])
def add_position(request):
    print("==add position==")
    jobtitle = request.data['jobtitle']
    jobid = request.data['jobid']
    jobdescription = request.data['jobdescription']
    questionTime = request.data['questionTime']
    user = User.objects.get(pk=request.data["userid"])
    question1 = request.data['question1']
    question2 = request.data['question2']
    question3 = request.data['question3']
    position = Positions.objects.create(user=user, job_title=jobtitle, job_id=jobid, job_description=jobdescription, questionTime=questionTime)
    if question1 != "":
        data1 = InterviewQuestions.objects.create(description=question1, positions=position)
    if question2 != "":
        data2 = InterviewQuestions.objects.create(description=question2, positions=position)
    if question3 != "":
        data3 = InterviewQuestions.objects.create(description=question3, positions=position)
    return Response({
        "jobtitle": jobtitle
    })

@api_view(['GET'])
def get_posted_jobs(request):
    data = {}

    user_id = request.query_params.get("user_id")
    positions = Positions.objects.filter(user_id=user_id)
    for i in range(len(positions)):
        positions_id = positions[i].id
        # get each position applicants
        applicants = list(InvitedCandidates.objects.filter(positions_id=positions_id).values())
        questions = list(InterviewQuestions.objects.filter(positions_id=positions_id).values())
        job_details = {
            "position_id": positions_id,
            "job_id": positions[i].job_id,
            "job_title": positions[i].job_title,
            "is_closed": positions[i].is_closed,
            "invite_date": positions[i].invite_date,
            "applicants": applicants,
            "questions": questions,
        }
        # convert to json
        data[positions_id] = job_details

    return Response({
        "data": data,
    })

@api_view(['POST'])
def add_interviews(request):
    company_name = request.data["company_name"]
    job_title= request.data["job_title"]
    position_id = request.data["position_id"]
    emails = request.data["emails"]
    names = request.data["names"]
    urls = request.data["urls"]

    for i in range(len(emails)):
        if emails[i] != "" and names[i] != "":
            # avoid duplicate data
            try:
                candidate = CandidatesInterview.objects.get(email=emails[i], positions_id=position_id)
                invited = InvitedCandidates.objects.get(email=emails[i], positions_id=position_id)
            except ObjectDoesNotExist:
                # save data
                CandidatesInterview.objects.create(email=emails[i], positions_id=position_id)
                InvitedCandidates.objects.create(positions_id=position_id, email=emails[i], name=names[i], comment_status=0)
                # send email
                send_interviews(names[i], emails[i], urls[i], job_title, company_name)

    return Response("Add interviews data successfully", status=status.HTTP_200_OK)

def send_interviews(name, email, url, job_title, company_name):
    subject = 'Follow up on your application of ' + job_title + " at " + company_name
    message = get_template("questions/interview_email.html")
    context = {
        'name': name,
        'url': url,
        'job_title': job_title,
        'company_name': company_name,
    }
    from_email = 'HireBeat Team'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()

@api_view(['POST'])
def resend_invitation(request):
    company_name = request.data["company_name"]
    job_title = request.data["job_title"]
    email = request.data["email"]
    name = request.data["name"]
    url = request.data["url"]
    send_interviews(name, email, url, job_title, company_name)

    return Response("Submit feedback data successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def submit_feedback(request):
    rating = request.data["rating"]
    feedback = request.data["feedback"]
    email = request.data["email"]
    InterviewFeedback.objects.create(rating=rating, feedback=feedback, email=email)

    return Response("Submit feedback data successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def update_comment_status(request):
    position_id = request.data["positionId"]
    email = request.data["email"]
    ss = request.data["status"]
    The_candidate = InvitedCandidates.objects.get(positions=position_id, email=email)
    The_candidate.comment_status = ss
    # update accept_date
    The_candidate.accept_date = timezone.now()
    The_candidate.save()

    data = {}
    user_id = request.data["userId"]
    positions = Positions.objects.filter(user_id=user_id)
    for i in range(len(positions)):
        positions_id = positions[i].id
        # get each position applicants
        applicants = list(InvitedCandidates.objects.filter(positions_id=positions_id).values())
        job_details = {
            "position_id": positions_id,
            "job_id": positions[i].job_id,
            "job_title": positions[i].job_title,
            "is_closed": positions[i].is_closed,
            "invite_date": positions[i].invite_date,
            "applicants": applicants,
        }
        # convert to json
        data[positions_id] = job_details

    return Response({
        "data": data,
    })

@api_view(['POST'])
def update_secondround_status(request):
    position_id = request.data["positionId"]
    email = request.data["email"]
    ss = request.data["status"]
    The_candidate = InvitedCandidates.objects.get(positions=position_id, email=email)
    The_candidate.secondround_status = ss
    The_candidate.save()

    data = {}
    user_id = request.data["userId"]
    positions = Positions.objects.filter(user_id=user_id)
    for i in range(len(positions)):
        positions_id = positions[i].id
        # get each position applicants
        applicants = list(InvitedCandidates.objects.filter(positions_id=positions_id).values())
        job_details = {
            "position_id": positions_id,
            "job_id": positions[i].job_id,
            "job_title": positions[i].job_title,
            "is_closed": positions[i].is_closed,
            "invite_date": positions[i].invite_date,
            "applicants": applicants,
        }
        # convert to json
        data[positions_id] = job_details

    return Response({
        "data": data,
    })

@api_view(['POST'])
def close_job(request):
    position_id = request.data["position_id"]
    position_obj = Positions.objects.get(id=position_id)
    position_obj.is_closed = True
    position_obj.save()
    return Response("Close current position successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def delete_job(request):
    position_id = request.data["position_id"]
    position_obj = Positions.objects.get(id=position_id)
    position_obj.delete()
    interview_que = InterviewQuestions.objects.filter(positions_id=position_id)
    interview_que.delete()
    return Response("Delete current position successfully", status=status.HTTP_200_OK)

@api_view(['POST'])
def add_interview_resume(request):
    position_id = request.data["positionId"]
    positions = Positions.objects.get(pk=position_id)
    candidate_id = request.data["candidateId"]
    candidates = User.objects.get(pk=candidate_id)
    resume_URL = request.data["resume_url"]
    InterviewResumes.objects.create(positionId=positions, candidateId=candidates, resumeURL=resume_URL)
    return Response("Added the interview resume", status=status.HTTP_200_OK)

@api_view(['POST'])
def get_resume_url(request):
    print('Get Resume Called')
    data = {}
    uploadTime = ""
    resumeURL = ""
    position_id = request.data["positionId"]
    candidate_id = request.data["userId"]
    positions = Positions.objects.get(pk=position_id)
    candidates = User.objects.get(pk=candidate_id)
    uploadedResume = InterviewResumes.objects.get(positionId=positions, candidateId=candidates)
    uploadTime = uploadedResume.invite_date
    resumeURL = uploadedResume.resumeURL
    data = {
            "result_rate": uploadedResume.result_rate,
            "hard_skill_jd_list": uploadedResume.hard_skill_jd_list,
            "hard_skill_resume_list": uploadedResume.hard_skill_resume_list,
            "hard_skill_info_list": uploadedResume.hard_skill_info_list,
            "soft_skill_resume_list": uploadedResume.soft_skill_resume_list,
            "soft_skill_jd_list": uploadedResume.soft_skill_jd_list,
            "soft_skill_info_list": uploadedResume.soft_skill_info_list,
            "other_keyword_resume_list": uploadedResume.other_keyword_resume_list,
            "other_keyword_jd_list": uploadedResume.other_keyword_jd_list,
            "other_keyword_info_list": uploadedResume.other_keyword_info_list,
            "basic_cri_resume_list": uploadedResume.basic_cri_resume_list,
            "basic_cri_jd_list": uploadedResume.basic_cri_jd_list,
            "basic_cri_info_list": uploadedResume.basic_cri_info_list
    }

    return Response({
        "interviewResume": data,
        "resumeURL": resumeURL,
        "recordTime": uploadTime,
    })

@api_view(['GET'])
def get_applicants_data(request):
    data = {
        "date": [],
        "total": [0, 0, 0, 0, 0, 0, 0],
        "accepted": [0, 0, 0, 0, 0, 0, 0],
        "recorded": [0, 0, 0, 0, 0, 0, 0],
    }

    week = []
    # get the most recent week dates
    for day in range(6, -1, -1):
        # use timezone.now() to get current time since timezone is enabled
        curr_date = timezone.now() - timedelta(days=day)
        week.append(curr_date.strftime("%Y-%m-%d"))
        data["date"].append(curr_date.strftime("%b %d"))

    employer_id = request.query_params.get('employerId')
    positions = Positions.objects.filter(user_id=employer_id, is_closed=False)  # ignore closed jobs
    # positions loop
    for i in range(len(positions)):
        position_id = positions[i].id
        # get current position each day total and accepted applicants
        total = []
        accepted = []
        recorded = []
        candidates = list(InvitedCandidates.objects.filter(positions_id=position_id).values())
        # dates loop
        for j in range(len(week)):
            day_total = InvitedCandidates.objects.filter(
                positions_id=position_id,
                invite_date__contains=week[j]).count()
            day_accepted = InvitedCandidates.objects.filter(
                positions_id=position_id,
                comment_status=1,
                accept_date__contains=week[j]).count()
            total.append(day_total)
            accepted.append(day_accepted)

            count = 0
            # candidates loop
            for c in range(len(candidates)):
                candidate = candidates[c]
                day_recorded = WPVideo.objects.filter(
                    email=candidate["email"],
                    created_at__contains=week[j]).count()
                count += day_recorded
            recorded.append(count)
        # sum loop
        for k in range(len(week)):
            data["total"][k] += total[k]
            data["accepted"][k] += accepted[k]
            data["recorded"][k] += recorded[k]

    return Response({
        "data": data,
    })

@api_view(['GET'])
def get_stars_list(request):
    pos_id = request.query_params.get("job_id")    
    int_ques = InterviewQuestions.objects.filter(positions = pos_id)
    candidates = InvitedCandidates.objects.filter(positions = pos_id)
    data = {}
    for candidate in candidates:
        can_email = candidate.email
        unit_star_list = WPVideo.objects.filter(email = can_email, question_id__in = int_ques)
        star_sum = 0
        video_amount = 0
        for star in unit_star_list:
            star_sum += star.video_stars
            video_amount += 1
        if(video_amount):
            data[can_email] = round(star_sum / video_amount)
        else:
            data[can_email] = 5
    return Response({ "data" : data } )

@api_view(['POST'])
def add_sub_reviewer(request):
    sub_name = request.data["sub_name"]
    sub_email = request.data["sub_email"]
    company_name = request.data["company_name"]
    position_id = request.data["position_id"]
    master_email = request.data["master_email"]
    positions = Positions.objects.get(pk=position_id)
    SubReviewers.objects.create(r_name=sub_name, r_email=sub_email, company_name=company_name, position=positions)
    send_sub_invitation(sub_name, sub_email, company_name, master_email, positions.job_title)
    return Response("Add sub reviewer successfully", status=status.HTTP_200_OK)        

def send_sub_invitation(name, email, company_name, master_email, position_name):
    subject = 'Co-review Invitation to HireBeat for '+ company_name
    message = get_template("questions/sub_reviewer_email.html")
    context = {
        'name': name,
        'company_name': company_name,
        'master_email': master_email,
        'position_name': position_name,
    }
    from_email = 'HireBeat Team'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
    email.content_subtype = "html"
    email.send()