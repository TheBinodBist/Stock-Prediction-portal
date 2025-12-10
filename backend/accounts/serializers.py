from django.contrib.auth.models import User
from rest_framework import serializer


class UserSerializer(serializer.ModelSerializer):
    password = serializer.CarField(Write_only=True)
    class Meta:
        model  = User
        fields = User
