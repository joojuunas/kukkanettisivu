import datetime
from django.db import models
from django.utils import timezone

# Katso särkän perennataimiston nettisivua esimerkiksi
# katso github actions video ja miten testaus suoraan nettisivulla tehdään
# kukka luokka
class Flower(models.Model):
    # nimi suomeksi
    name_fi = models.CharField(max_length=50)
    # nimi ruotsiksi
    name_sv = models.CharField(max_length=50)
    # nimi englanniksi
    name_en = models.CharField(max_length=50)
    # latinan kielinen nimi
    latin_name = models.CharField(max_length=100)
    # kukan väri
    flower_color = models.CharField(max_length=20)

    # kukkimisaika
    class FlowerTimeFirst(models.TextChoices):
        TAMMI = "1", ("Tammikuu")
        HELMI = "2", ("Helmikuu")
        MAALIS = "3", ("Maaliskuu")
        HUHTI = "4", ("Huhtikuu")
        TOUKO = "5", ("Toukokuu")
        KESÄ = "6", ("Kesäkuu")
        HEINÄ = "7", ("Heinäkuu")
        ELO = "8", ("Elokuu")
        SYYS = "9", ("Syyskuu")
        LOKA = "10", ("Lokakuu")
        MARRAS = "11", ("Marraskuu")
        JOULU = "12", ("Joulukuu")

    class FlowerTimeSecond(models.TextChoices):
        TAMMI = "13", ("-tammikuu")
        HELMI = "14", ("-helmikuu")
        MAALIS = "15", ("-maaliskuu")
        HUHTI = "16", ("-huhtikuu")
        TOUKO = "17", ("-toukokuu")
        KESÄ = "18", ("-kesäkuu")
        HEINÄ = "19", ("-heinäkuu")
        ELO = "20", ("-elokuu")
        SYYS = "21", ("-syyskuu")
        LOKA = "22", ("-lokakuu")
        MARRAS = "23", ("-marraskuu")
        JOULU = "24", ("-joulukuu")

    flower_time_first = models.CharField(max_length=2, choices=FlowerTimeFirst.choices)
    flower_time_second = models.CharField(
        max_length=2, choices=FlowerTimeSecond.choices
    )

    # valovaatimus
    class LightRequirement(models.TextChoices):
        AURINKO = "1", ("Aurinko")
        PUOLIVARJO = "2", ("Puolivarjo")
        VARJO = "3", ("Varjo")

    light_requirement = models.CharField(max_length=2, choices=LightRequirement.choices)
    # pituus
    length = models.CharField(max_length=10)
    # ruukkukoko
    pot_size = models.CharField(max_length=10)
    # hinta
    price = models.ForeignKey("kukkatietodb.Price", on_delete=models.CASCADE)
    # kuvat
    photos = models.ManyToManyField("kukkatietodb.Image", related_name="images")
    # lisäys lähde ja -tapa
    adding_source = models.CharField(max_length=30)
    adding_way = models.CharField(max_length=20)
    # lisätietoja
    additional_information = models.CharField(max_length=200)
    # uusi
    new = models.BooleanField(default=True)
    # lisäyspäivä
    date_added = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.name_fi

    # onko lisätty vähän aikaa sitten - yli 5 kuukautta vanha
    def was_added_recently(self):
        now = timezone.now()
        if self.date_added >= now - datetime.timedelta(days=150):
            return True
        else:
            self.new = False
            return False
