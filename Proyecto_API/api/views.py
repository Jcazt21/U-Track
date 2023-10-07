from typing import Any
from django import http
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Departamento, Administrador, Estudiante, Profesor, Materia, Seccion, Horario, Estudiante_Seccion
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .serializer import *
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from . import permissions


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

class MateriaViewSet(viewsets.ModelViewSet):
    queryset=Materia.objects.all()
    serializer_class= MateriaSerializer

class ProfesorViewSet(viewsets.ModelViewSet):
    queryset=Profesor.objects.all()
    serializer_class= ProfesorSerializer

class SeccionViewSet(viewsets.ModelViewSet):
    queryset=Seccion.objects.all()
    serializer_class= SeccionSerializer

class CarreraViewSet(viewsets.ModelViewSet):
    queryset=Carrera.objects.all()
    serializer_class= CarreraSerializer

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset=Estudiante.objects.all()
    serializer_class= EstudianteSerializer

class Estudiante_SeccionViewSet(viewsets.ModelViewSet):
    queryset=Estudiante_Seccion.objects.all()
    serializer_class= Estudiante_SeccionSerializer

class HorarioViewSet(viewsets.ModelViewSet):
    queryset=Horario.objects.all()
    serializer_class= HorarioSerializer

class CalificacionesViewSet(viewsets.ModelViewSet):
    queryset=Calificaciones.objects.all()
    serializer_class= CalificacionesSerializer
    permission_classes=[IsAuthenticated & (permissions.IsProfesorUser | permissions.IsReadOnlyEstudentUser | permissions.IsAdministrador)]
    
    def get_queryset(self):
        if Estudiante.objects.filter(ID_Usuario=self.request.user).exists():
            return self.queryset.filter(ID_Estudiante__ID_Usuario=self.request.user)
        if Profesor.objects.filter(ID_Usuario=self.request.user).exists():
            return self.queryset.filter(ID_Profesor__ID_Usuario=self.request.user)
        return self.queryset
        



