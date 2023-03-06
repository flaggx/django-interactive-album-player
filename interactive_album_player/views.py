from django.core.paginator import Paginator
from django.shortcuts import render
from .models import Track


def index(request):
    return render(request, 'interactive_album_player/home.html')


def webPlayer(request):
    paginator = Paginator(Track.objects.all(), 1)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {"page_obj": page_obj}
    return render(request, 'interactive_album_player/webplayer.html', context)
