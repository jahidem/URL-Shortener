from django.db import models
from .utilities import generate_random_string, LIVE_SERVER_URL


def create_new_minurl():
    '''
    a utility function to generate unique miniurl
    '''
    not_unique = True
    while not_unique:
        new_miniurl = generate_random_string(8)
        if not UrlPair.objects.filter(mini_url=new_miniurl):
            not_unique = False
    return LIVE_SERVER_URL + new_miniurl


# need a model to store a original_url and miniurl pair


class UrlPair(models.Model):
    original_url = models.CharField(max_length=500)
    mini_url = models.CharField(
        max_length=20,
        blank=True,
        editable=False,
        unique=True,
        default=create_new_minurl)
    visit_count = models.IntegerField(blank=True, default=0)
