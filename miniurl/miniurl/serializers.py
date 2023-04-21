from rest_framework import serializers
from .models import UrlPair

# it handles serializations of our model UrlPair


class UrlPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = UrlPair
        fields = ['id', 'original_url', 'mini_url', 'visit_count']
