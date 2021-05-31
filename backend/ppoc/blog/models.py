from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class BlogPost(models.Model):
    title = models.Charfield(max_length=50)
# Create your models here.
