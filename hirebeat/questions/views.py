from .models import Question
from rest_framework import generics, permissions
from .serializers import QuestionSerializer
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
            questions=Question.objects.filter(category__contains=category)
        else:
            questions=Question.objects.all()
        questions = random.sample(list(questions), int(number))
        return questions
