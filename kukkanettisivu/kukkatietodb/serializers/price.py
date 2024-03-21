from rest_framework import serializers
from kukkatietodb.models.price import Price

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = (
            "id",
            "amount",
            "currency",
        )