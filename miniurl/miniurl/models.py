from django.db import models
from .utilities import generate_random_string


def create_new_minurl():
    '''
    a utility function to generate unique miniurl
    '''
    not_unique = True
    while not_unique:
        new_miniurl = generate_random_string(8)
        if not UrlPair.objects.filter(mini_url=new_miniurl):
            not_unique = False
    return new_miniurl


# need a model to store a original_url and miniurl pair


class UrlPair(models.Model):
    '''
        A dataModel of UrlPair having attrbutes:
                            -- original_url (user given long url)
                            -- mini_url (sever generated short url)
                            -- visit_count (count number of time short url visited)
    '''
    original_url = models.CharField(max_length=500)
    mini_url = models.CharField(
        max_length=100,
        blank=True,
        editable=False,
        unique=True,
        default=create_new_minurl)
    visit_count = models.IntegerField(blank=True, default=0)
