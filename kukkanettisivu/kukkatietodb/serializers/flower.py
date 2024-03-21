from rest_framework import serializers
from kukkatietodb.models.flower import Flower

class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "name_fi",
            "name_sv",
            "name_en",
            "latin_name",
            "flower_color",
            "flower_time_first",
            "flower_time_second",
            "light_requirement",
            "length",
            "pot_size",
            "price",
            "photos",
            "adding_source",
            "adding_way",
            "additional_information",
            "new",
            "date_added",
        )
        model = Flower
