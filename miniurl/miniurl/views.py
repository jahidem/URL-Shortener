from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect
from .serializers import UrlPairSerializer
from .models import UrlPair


@api_view(['GET'])
def miniurl_list(request):
    '''
    This view handle request for the full list of UrlPair
    In short it gives a list of UrlPair objects
    '''
    if request.method == 'GET':
        drinks = UrlPair.objects.all()
        serializer = UrlPairSerializer(drinks, many=True)
        return Response({'urlpairs': serializer.data})


@api_view(['GET'])
def miniurl_redirect(request, mini_url_id):
    '''
    Handles individual miniurl and redirect the user to his 
    original url, the individual UrlPair identified by the `mini_url_id` parameter.

    try-except block ensures that the UrlPair having the mini_url_id exists
        - if not exists return 404
        - if exists responses depending on the type of request
    
    '''

    try:
        urlpair = UrlPair.objects.get(mini_url=mini_url_id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UrlPairSerializer(
            urlpair, data={'urlpair.visit_count': urlpair.visit_count + 1})     # increament the visit count for this UrlPair
        if serializer.is_valid():                                               # validate then save the changes 
            serializer.save()

        return HttpResponseRedirect(redirect_to=urlpair.original_url)           # now  make the user browswe to redirect to the original url derived from the miniurl
