from .models import Question, Categorys, SubCategory, Positions, InterviewQuestions, InvitedCandidates, InterviewFeedback, InterviewResumes
from accounts.models import CandidatesInterview
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

