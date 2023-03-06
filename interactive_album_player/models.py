from django.db import models


class Widget(models.Model):
    name = models.CharField(max_length=140)


class Track(models.Model):
    title = models.TextField()
    artist = models.TextField()
    image = models.ImageField(blank=True, null=True)
    audio_file = models.FileField(blank=True, null=True)
    audio_link = models.CharField(max_length=200, blank=True, null=True)
    duration = models.CharField(max_length=20)
    paginate_by = 2
    parentSong = models.TextField(default='Parent Song')
    parentAlbum = models.TextField(default='Parent Album')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title
