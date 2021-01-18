from .models import Question, Categorys, SubCategory, Positions, InterviewQuestions, InvitedCandidates, InterviewFeedback
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
    interview_questions = InterviewQuestions.objects.filter(positions_id=position_id)
    for i in range(len(interview_questions)):
        obj = interview_questions[i]
        questions.append(obj.description)
        question_ids.append(obj.id)

    return Response({
        "questions": questions,
        "question_ids": question_ids,
    })

@api_view(['POST'])
def add_position(request):
    print("==add position==")
    jobtitle = request.data['jobtitle']
    jobid = request.data['jobid']
    user = User.objects.get(pk=request.data["userid"])
    question1 = request.data['question1']
    question2 = request.data['question2']
    question3 = request.data['question3']
    position = Positions.objects.create(user=user, job_title=jobtitle, job_id=jobid)
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
        job_details = {
            "position_id": positions_id,
            "job_id": positions[i].job_id,
            "job_title": positions[i].job_title,
            "applicants": applicants,
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
                InvitedCandidates.objects.create(positions_id=position_id, email=emails[i], name=names[i])
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
    from_email = 'hirebeat.tech@gmail.com'
    to_list = [email]
    content = message.render(context)
    email = EmailMessage(
        subject,
        content,
        from_email,
        to_list,
    )
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
    InterviewFeedback.objects.create(rating=rating, feedback=feedback)

    return Response("Submit feedback data successfully", status=status.HTTP_200_OK)