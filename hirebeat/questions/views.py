from .models import Question, Categorys, SubCategory
from rest_framework import generics, permissions
from .serializers import QuestionSerializer
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
    category = request.data.get('category')
    queryset = Categorys.objects.filter(category_des=category).values('subCategorys')
    sub_list = queryset[0]["subCategorys"].split(",")

    subcategories = []
    num = len(sub_list)
    for i in range(num):
        id = int(sub_list[i])
        s = SubCategory.objects.filter(id=id)
        subcategory = s[0].sub_category
        subcategories.append(subcategory)

    return Response({
        "subcategories": subcategories,
    })
