from django.shortcuts import render

def home(request):
    return render(request,"core/home.html")

def sobrenosotros(request):
    return render(request,"core/sobrenosotros.html")

def modelos(request):
    return render(request,"core/modelos.html")

def formulario(request):
    return render(request, "core/formulario.html")
