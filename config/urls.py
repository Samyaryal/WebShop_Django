from django.contrib import admin
from django.conf.urls import url, include
from .import settings
from django.conf.urls.static import static

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^', include('shop.urls')),

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

