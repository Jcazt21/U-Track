from django.urls import path, include
from .views import DepartamentoViewSet, UsuarioViewSet, AdministradorViewSet, EstudianteViewSet, ProfesorViewSet, MateriaViewSet, SeccionViewSet, HorarioViewSet, Estudiante_SeccionViewSet
from api import views
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


routers=routers.DefaultRouter()
routers.register(r'departamento',views.DepartamentoViewSet)
routers.register(r'usuario',views.UsuarioViewSet)
routers.register(r'administrador',views.AdministradorViewSet)
routers.register(r'materia',views.MateriaViewSet)
routers.register(r'profesor',views.ProfesorViewSet)
routers.register(r'seccion',views.SeccionViewSet)
routers.register(r'carrera',views.CarreraViewSet)
routers.register(r'estudiante',views.EstudianteViewSet)
routers.register(r'estudiante_seccion',views.EstudianteViewSet)
routers.register(r'horario',views.HorarioViewSet)
routers.register(r'calificaciones',views.CalificacionesViewSet)


urlpatterns=[
    path( '' , include(routers.urls)),
    path('login/', TokenObtainPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view())
]