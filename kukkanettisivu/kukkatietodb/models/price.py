from django.db import models

class Price(models.Model):
    amount = models.CharField(max_length=10)
    currency = models.CharField(max_length=5)
    
    def __str__(self):
        return self.amount + " " + self.currency