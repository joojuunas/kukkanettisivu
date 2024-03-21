from django.test import TestCase

# Create your tests here.
import datetime
from django.utils import timezone
from django.test import TestCase
from kukkatietodb.models.flower import Flower


class FlowerModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Flower.objects.create(name_fi="testi")
        Flower.objects.create(
            name_fi="kukka", date_added=timezone.now() - timezone.timedelta(days=151)
        )

    def test_name_fi(self):
        flower = Flower.objects.get(id=1)
        expected_object_name = f"{flower.name_fi}"
        self.assertEquals(expected_object_name, "testi")

    def test_date_added(self):
        flower = Flower.objects.get(id=1)
        flower2 = Flower.objects.get(id=2)
        self.assertEquals(True, Flower.was_added_recently(flower))
        self.assertEquals(False, Flower.was_added_recently(flower2))
