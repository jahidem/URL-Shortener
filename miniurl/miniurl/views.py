from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect
from .serializers import UrlPairSerializer
from .models import UrlPair
from .utilities import LIVE_FRONTEND_SERVER_URL


@api_view(['GET', 'POST'])
def miniurl_list(request):
    '''
    - This view handle request(GET) and response with the
    full list of UrlPair, In short it gives a list of UrlPair objects

    - For the POST requests it creates new UrlPair object and stores it
    in the DB. This allows users to generate new miniurl for their
    long URL
    '''
    if request.method == 'GET':
        urlpairs = UrlPair.objects.all()
        serializer = UrlPairSerializer(urlpairs, many=True)
        return Response({'urlpairs': serializer.data})

    elif request.method == 'POST':
        serializer = UrlPairSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def miniurl_detail(request, mini_url_id):
    '''
        get an individual UrlPair object
    '''
    try:
        urlpair = UrlPair.objects.get(mini_url=mini_url_id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = UrlPairSerializer(urlpair, many=True)
    return Response(serializer.data)


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

        # now  make the user browswe to redirect to the original url derived from the miniurl
        return HttpResponseRedirect(redirect_to=urlpair.original_url)


@api_view(['GET'])
def stats_redirect(request, mini_url_id):
    '''
        This redirects user to the frontend stats page
    '''
    try:
        urlpair = UrlPair.objects.get(mini_url=mini_url_id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return HttpResponseRedirect(LIVE_FRONTEND_SERVER_URL + '/' + mini_url_id + '/stats')
