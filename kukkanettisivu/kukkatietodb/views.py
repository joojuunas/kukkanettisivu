from rest_framework import generics

from kukkatietodb.models.flower import Flower
from kukkatietodb.models.image import Image
from kukkatietodb.models.price import Price
from kukkatietodb.serializers.flower import FlowerSerializer
from kukkatietodb.serializers.image import ImageSerializer
from kukkatietodb.serializers.price import PriceSerializer

class IndexView(generics.ListAPIView):
    serializer_class = FlowerSerializer
    
    def get_queryset(self):
        """Returns ten flowers"""
        return Flower.objects.order_by("-light_requirement")[:10]
    
class DetailView(generics.RetrieveAPIView):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer
    lookup_field = "id"
    
class PriceView(generics.RetrieveAPIView):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer
    lookup_field = "id"

class ListPricesView(generics.ListAPIView):
    serializer_class = PriceSerializer
    
    def get_queryset(self):
        """Returns prices"""
        return Price.objects.order_by("-id")[:10]
 
class ImageView(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    lookup_field = "id"

class ListImagesView(generics.ListAPIView):
    serializer_class = ImageSerializer
    
    def get_queryset(self):
        """Returns prices"""
        return Image.objects.order_by("-id")[:10]
 
