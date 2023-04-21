from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseRedirect
from .serializers import UrlPairSerializer
from .models import UrlPair

@api_view(['GET'])
def miniurl_list(request):
    if request.method == 'GET':
        drinks = UrlPair.objects.all()
        serializer = UrlPairSerializer(drinks, many=True)
        return Response(serializer.data)
