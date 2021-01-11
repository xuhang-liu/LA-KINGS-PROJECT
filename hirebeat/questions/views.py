from .models import Question, Categorys, SubCategory, InterviewQuestions
from rest_framework import generics, permissions
from .serializers import QuestionSerializer, SubcategorySerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
import random

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