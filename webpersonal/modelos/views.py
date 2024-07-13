from django.shortcuts import render
from .models import Project
# Create your views here.
def modelos(request):
    projects = Project.objects.all()
    return render(request, "modelos/modelos.html", {'projects':projects})