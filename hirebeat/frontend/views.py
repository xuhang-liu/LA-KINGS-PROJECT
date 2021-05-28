from django.shortcuts import render

# Create your views here.
# pointer to the template

def index(request):
    return render(request,'frontend/index.html')
    # auto looks for a templates folder and the index.html file in it