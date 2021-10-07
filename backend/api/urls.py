from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('', views.TodoViewSet)

urlpatterns = [
    path('todos/', include(router.urls)),
]
