from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Departamento(models.Model):
    Nombre_Departamento=models.CharField(max_length=50)

class Administrador(models.Model):
    Nombre_Administrador=models.CharField(max_length=50)
    Apellido_Administrador=models.CharField(max_length=50)
    Mail_Administrador=models.EmailField(unique=True)
    ID_Usuario=models.ForeignKey(get_user_model(),models.DO_NOTHING)
    Activo=models.PositiveIntegerField()
    
    def __str__(self) -> str:
        return f'{self.Nombre_Administrador} {self.Apellido_Administrador}'
    
class Materia(models.Model):
    Nombre_Materia=models.CharField(max_length=50)
    ID_Departamento=models.ForeignKey(Departamento,models.DO_NOTHING)
    Activo=models.PositiveIntegerField(default=1)

class Profesor(models.Model):
    Nombre_Profesor=models.CharField(max_length=50)
    Apellido_Profesor=models.CharField(max_length=50)
    ID_Departamento=models.ForeignKey(Departamento,models.DO_NOTHING)
    Mail_Profesor=models.EmailField(unique=True)
    Carrera_Profesor=models.CharField(max_length=50)
    ID_Usuario=models.ForeignKey(get_user_model(),models.DO_NOTHING)
    Activo=models.PositiveIntegerField(default=1)

class Seccion(models.Model):
    ID_Profesor=models.ForeignKey(Profesor,models.DO_NOTHING)
    ID_Materia=models.ForeignKey(Materia,models.DO_NOTHING)
    Activo=models.PositiveIntegerField(default=1)

class Carrera(models.Model):
    Nombre_Carrera=models.CharField(max_length=50)
    ID_Departamento=models.ForeignKey(Departamento,models.DO_NOTHING)
    Activo=models.PositiveIntegerField(default=1)

class Estudiante(models.Model):
    Nombre_Estudiante=models.CharField(max_length=50)
    Apellido_Estudiante=models.CharField(max_length=50)
    ID_Carrera=models.ForeignKey(Carrera,models.DO_NOTHING)
    ID_Usuario=models.ForeignKey(get_user_model(),models.DO_NOTHING)
    Mail_Estudiante=models.EmailField(unique=True,null=True)    
    Activo=models.PositiveIntegerField(default=1)

class Estudiante_Seccion(models.Model):
    ID_Estudiante=models.ForeignKey(Estudiante,models.DO_NOTHING)
    ID_Seccion=models.ForeignKey(Seccion,models.DO_NOTHING) 


class Horario(models.Model):
    Dia=models.PositiveIntegerField()
    Hora_inicio=models.PositiveIntegerField()
    Hora_final=models.PositiveIntegerField()
    ID_Seccion=models.ForeignKey(Seccion,models.DO_NOTHING) 

class Calificaciones(models.Model):
    ID_Profesor=models.ForeignKey(Profesor,models.DO_NOTHING)
    ID_Estudiante=models.ForeignKey(Estudiante,models.DO_NOTHING)
    ID_Materia=models.ForeignKey(Materia,models.DO_NOTHING)
    Calificacion=models.DecimalField(max_digits=5, decimal_places=2)
