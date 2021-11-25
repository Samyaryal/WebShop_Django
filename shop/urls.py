from django.urls import  path
from django.conf.urls import url 
from shop import views 

urlpatterns = [
  url(r'^api/products$', views.ListProducts),
  url(r'^api/products/(?P<pk>[0-9]+)$', views.DetailProduct),
]
