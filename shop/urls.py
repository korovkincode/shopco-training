from django.urls import path
import shop.views

urlpatterns = [
    path('', shop.views.Homepage)
]