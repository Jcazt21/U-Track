from typing import Any
from django import http
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Departamento, Administrador, Estudiante, Profesor, Materia, Seccion, Estudiante_Seccion, Horario
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .serializer import *
from rest_framework.views import APIView
from django.contrib.auth import get_user_model, authenticate
from rest_framework.permissions import IsAuthenticated
from . import permissions
from rest_framework_simplejwt.views import TokenObtainPairView



class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset=Departamento.objects.all()
    serializer_class= DepartamentoSerializer
    ordering=['Nombre_Departamento']
    ordering_fields=['id','Nombre_Departamento']
    #filterset_fields=['']
    search_fields=['Nombre_Departamento']
    permission_classes=[IsAuthenticated, permissions.IsAdminUserOrReadOnly]

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=get_user_model().objects.all()
    serializer_class= UsuarioSerializer
    

class AdministradorViewSet(viewsets.ModelViewSet):
    queryset=Administrador.objects.all()
    serializer_class= AdministradorSerializer
    ordering=['Nombre_Administrador', 'Apellido_Administrador', 'Mail_Administrador', 'Activo']
    ordering_fields=['id','Nombre_Administrador', 'Apellido_Administrador', 'Mail_Administrador', 'Activo']
    filterset_fields=['Nombre_Administrador', 'Apellido_Administrador', 'Mail_Administrador', 'Activo']
    search_fields=['Nombre_Administrador', 'Apellido_Administrador', 'Mail_Administrador', 'Activo']


class MateriaViewSet(viewsets.ModelViewSet):
    queryset=Materia.objects.all()
    serializer_class= MateriaSerializer
    ordering=['Nombre_Materia', 'ID_Departamento', 'Activo']
    ordering_fields=['id','Nombre_Materia', 'ID_Departamento', 'Activo']
    filterset_fields=['Nombre_Materia', 'ID_Departamento', 'Activo']
    search_fields=['Nombre_Materia', 'ID_Departamento', 'Activo']

class ProfesorViewSet(viewsets.ModelViewSet):
    queryset=Profesor.objects.all()
    serializer_class= ProfesorSerializer
    ordering=['Nombre_Profesor', 'Apellido_Profesor', 'ID_Departamento', 'Mail_Profesor', 'Carrera_Profesor', 'ID_Usuario', 'Activo']
    ordering_fields=['id','Nombre_Profesor', 'Apellido_Profesor', 'ID_Departamento', 'Mail_Profesor', 'Carrera_Profesor', 'ID_Usuario', 'Activo']
    filterset_fields=['Nombre_Profesor', 'Apellido_Profesor', 'ID_Departamento', 'Mail_Profesor', 'Carrera_Profesor', 'ID_Usuario', 'Activo']
    search_fields=['Nombre_Profesor', 'Apellido_Profesor', 'ID_Departamento', 'Mail_Profesor', 'Carrera_Profesor', 'ID_Usuario', 'Activo']

class SeccionViewSet(viewsets.ModelViewSet):
    queryset=Seccion.objects.all()
    serializer_class= SeccionSerializer
    ordering=['ID_Profesor','ID_Materia','Activo']
    ordering_fields=['id','ID_Profesor','ID_Materia','Activo']
    filterset_fields=['ID_Profesor','ID_Materia','Activo']
    search_fields=['ID_Profesor','ID_Materia','Activo']


class CarreraViewSet(viewsets.ModelViewSet):
    queryset=Carrera.objects.all()
    serializer_class= CarreraSerializer
    ordering=['Nombre_Carrera', 'ID_Departamento', 'Activo']
    ordering_fields=['id','Nombre_Carrera', 'ID_Departamento', 'Activo']
    filterset_fields=['Nombre_Carrera', 'ID_Departamento', 'Activo']
    search_fields=['Nombre_Carrera', 'ID_Departamento', 'Activo']

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset=Estudiante.objects.all()
    serializer_class= EstudianteSerializer
    ordering=['Nombre_Estudiante','Apellido_Estudiante','ID_Carrera','ID_Usuario','Mail_Estudiante','Activo']
    ordering_fields=['id','Nombre_Estudiante','Apellido_Estudiante','ID_Carrera','ID_Usuario','Mail_Estudiante','Activo']
    filterset_fields=['Nombre_Estudiante','Apellido_Estudiante','ID_Carrera','ID_Usuario','Mail_Estudiante','Activo']
    search_fields=['Nombre_Estudiante','Apellido_Estudiante','ID_Carrera','ID_Usuario','Mail_Estudiante','Activo']

class Estudiante_SeccionViewSet(viewsets.ModelViewSet):
    queryset=Estudiante_Seccion.objects.all()
    serializer_class= Estudiante_SeccionSerializer
    ordering=['ID_Estudiante', 'ID_Seccion']
    ordering_fields=['id','ID_Estudiante', 'ID_Seccion']
    filterset_fields=['ID_Estudiante', 'ID_Seccion']
    search_fields=['ID_Estudiante', 'ID_Seccion']

class HorarioViewSet(viewsets.ModelViewSet):
    queryset=Horario.objects.all()
    serializer_class= HorarioSerializer
    ordering=['Dia','Hora_inicio','Hora_final','ID_Seccion']
    ordering_fields=['id','Dia','Hora_inicio','Hora_final','ID_Seccion']
    filterset_fields=['Dia','Hora_inicio','Hora_final','ID_Seccion']
    search_fields=['Dia','Hora_inicio','Hora_final','ID_Seccion']

class CalificacionesViewSet(viewsets.ModelViewSet):
    queryset=Calificaciones.objects.all()
    serializer_class= CalificacionesSerializer
    permission_classes=[IsAuthenticated & (permissions.IsProfesorUser | permissions.IsReadOnlyEstudentUser | permissions.IsAdministrador)]
    ordering=['ID_Profesor','ID_Estudiante','ID_Materia','Trimestre','Calificacion']
    ordering_fields=['id','ID_Profesor','ID_Estudiante','ID_Materia','Trimestre','Calificacion']
    filterset_fields=['ID_Profesor','ID_Estudiante','ID_Materia','Trimestre','Calificacion']
    search_fields=['ID_Profesor','ID_Estudiante','ID_Materia','Trimestre','Calificacion']
    
    def get_queryset(self):
        if Estudiante.objects.filter(ID_Usuario=self.request.user).exists():
            return self.queryset.filter(ID_Estudiante__ID_Usuario=self.request.user)
        if Profesor.objects.filter(ID_Usuario=self.request.user).exists():
            return self.queryset.filter(ID_Profesor__ID_Usuario=self.request.user)
        return self.queryset
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#@csrf_exempt
def reco(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            user_type = ''
            user_id = None  # Variable para almacenar el ID específico del usuario

            if Estudiante.objects.filter(ID_Usuario=user).exists():
                user_type = 'estudiante'
                estudiante = Estudiante.objects.get(ID_Usuario=user)
                user_id = estudiante.id  # Obtener el ID del estudiante
                
            elif Profesor.objects.filter(ID_Usuario=user).exists():
                user_type = 'profesor'
                profesor = Profesor.objects.get(ID_Usuario=user)
                user_id = profesor.id  # Obtener el ID del profesor
                
            elif Administrador.objects.filter(ID_Usuario=user).exists():
                user_type = 'administrador'
                administrador = Administrador.objects.get(ID_Usuario=user)
                user_id = administrador.id  # Obtener el ID del administrador


            print("Tipo de usuario:", user_type)
            return JsonResponse({
                'access': 'some_token',
                'user_type': user_type,
                'user_id': user_id  # Devolver el ID específico del usuario como parte de la respuesta
            })
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)


