from django.contrib import admin
from .models import * 
from django.contrib.auth import get_user_model



admin.site.register(Departamento)
admin.site.register(Administrador)
admin.site.register(Estudiante)
admin.site.register(Profesor)
admin.site.register(Materia)
admin.site.register(Seccion)
admin.site.register(Horario)
admin.site.register(Estudiante_Seccion)
admin.site.register(Carrera)
admin.site.register(Calificaciones)

