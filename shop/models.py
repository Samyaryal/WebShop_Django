from django.db import models
from PIL import Image
#from django.contrib.auth.models import User

class Product(models.Model):
  name = models.CharField(max_length =200)
  price =  models.FloatField()
  image = models.TextField(null=False, blank=False)
  productCode= models.CharField(max_length=200)
  description = models.TextField()
  date_added = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name
    