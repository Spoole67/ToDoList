from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# Funktion som är mellanhand mellan url och html kod!

# 1) Funktions namn som påminner om anvädningsområde är bra att
# 2) Render till faktiskt hemsida

def home(request):
    return render(request, 'home.html')

def event_detail(request, id):
    return render(request, 'event_detail.html', {'id': id})


