from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.views.generic import TemplateView

from . import views

app_name = 'interactive_album_player'

urlpatterns = [
    path('', views.index, name='index'),
    path('webplayer/', views.webPlayer, name='webplayer'),
    ]
