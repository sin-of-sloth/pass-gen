from django.shortcuts import render
from django.http import HttpResponse
import random

# Create your views here.


def home(request) :
    return render(request, 'generator/home.html')

def password(request) :
	characters = list('abcdefghijklmnopqrstuvwxyz')

	if request.GET.get('uppercase') :
		characters.extend(list('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
	if request.GET.get('special') :
		characters.extend(list('!@#$%^&*()'))
	if(request.GET.get('numbers')) :
		characters.extend(list('1234567890'))

	passwordlength = int(request.GET.get('passwordlength', 13))

	thepassword = ''
    
	for _ in range (passwordlength) :
		thepassword += random.choice(characters)
	
	if(request.GET.get('refresh')) :
		return HttpResponse(thepassword)
	else :
		return render(request, 'generator/password.html', {'password': thepassword})

def about(request) :
	return render(request, 'generator/about.html')