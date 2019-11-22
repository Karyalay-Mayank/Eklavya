from Landingpage import views
from django.conf.urls import url
urlpatterns=[

url('contact',views.contact),
url('video',views.video),
url('about',views.about),

]
