from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from .models import *

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = '__all__'
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = '__all__'
        
class AdministradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrador
        fields = '__all__'
        
class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = '__all__'   
 
class ProfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = '__all__'
     
class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = '__all__'
      
class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = '__all__'     
        
class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'
       
class Estudiante_SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante_Seccion
        fields = '__all__'
        
class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = '__all__'
        
class CalificacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calificaciones
        fields = '__all__'
   
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        user = self.user
        user_type = ''
        user_info = {}  # Diccionario para almacenar la información del usuario

        if Estudiante.objects.filter(ID_Usuario=user).exists():
            user_type = 'estudiante'
            estudiante = Estudiante.objects.get(ID_Usuario=user)
            
            # Obtener todas las calificaciones del estudiante
            calificaciones = Calificaciones.objects.filter(ID_Estudiante=estudiante)
            
            # Calcular el índice académico
            if calificaciones.exists():
                total_calificaciones = calificaciones.count()
                suma_calificaciones = sum([calificacion.Calificacion for calificacion in calificaciones])
                indice_academico = suma_calificaciones / total_calificaciones
            else:
                indice_academico = 0  # Puedes establecer un valor predeterminado si el estudiante no tiene calificaciones

            user_info = {
                'ID_Estudiante': estudiante.id,
                'Nombre_Estudiante': estudiante.Nombre_Estudiante,
                'Apellido_Estudiante': estudiante.Apellido_Estudiante,
                'ID_Carrera': estudiante.Apellido_Estudiante,
                'ID_Usuario':estudiante.Apellido_Estudiante,
                'Mail_Estudiante': estudiante.Apellido_Estudiante,   
                'Imagen' : estudiante.Apellido_Estudiante,
                'Activo' : estudiante.Apellido_Estudiante,
                'Indice': indice_academico
            }
        elif Profesor.objects.filter(ID_Usuario=user).exists():
            user_type = 'profesor'
            profesor = Profesor.objects.get(ID_Usuario=user)
            user_info = {
                'ID_Profesor': profesor.id,
                'Nombre_Profesor': profesor.Nombre_Profesor,
                'Apellido_Profesor': profesor.Apellido_Profesor,
                'ID_Departamento': administrador.ID_Departamento_Administrador, 
                'Mail_Profesor': administrador.Mail_Administrador, 
                'Carrera_Profesor': administrador.Carrera_Profesor_Administrador, 
                'ID_Usuario': administrador.ID_Usuario_Administrador, 
                'Activo': administrador.Activo_Administrador
            }
        elif Administrador.objects.filter(ID_Usuario=user).exists():
            user_type = 'administrador'
            administrador = Administrador.objects.get(ID_Usuario=user)
            user_info = {
                'ID_Administrador': administrador.id,
                'Nombre_Administrador': administrador.Nombre_Administrador,
                'Apellido_Administrador': administrador.Apellido_Administrador, 
                'Mail_Administrador':administrador.Mail_Administrador ,
                'ID_Usuario': administrador.ID_Usuario_Administrador,  
                'Activo': administrador.Activo
            }

        data['user_type'] = user_type
        data['user_info'] = user_info  # Agrega la información del usuario a la respuesta del token

        return data