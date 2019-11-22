from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def contact(request):
    res=render(request,'Landingpage/info.html')
    return res

def video(request):
    res=render(request,'Landingpage/video.html')
    return res

def about(request):
    res=render(request,'Landingpage/about.html')
    return res
