from django.db import models

# Create your models here.
class Project (models.Model):
    title =models.CharField(max_length=200, verbose_name='Titulo')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio')
    description = models.TextField(verbose_name='Descripcion')
    stock = models.PositiveIntegerField(verbose_name='Stock')
    image = models.ImageField(upload_to='projects', verbose_name='Imagen')
    link = models.URLField(max_length=200, verbose_name='Direccion Web', blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de edicion')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "modelo"
        verbose_name_plural = "modelos"
        ordering = ["-created"]
