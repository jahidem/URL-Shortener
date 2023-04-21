from rest_framework import serializers
from .models import UrlPair


class UrlPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = UrlPair
        fields = ['id', 'original_url', 'mini_url', 'visit_count']
