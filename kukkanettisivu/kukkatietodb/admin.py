from django.contrib import admin
from kukkatietodb.models.image import Image
from kukkatietodb.models.price import Price
from kukkatietodb.models.flower import Flower

admin.site.register(Image)
admin.site.register(Price)
admin.site.register(Flower)