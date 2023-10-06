from rest_framework.permissions import BasePermission, SAFE_METHODS
from .models import Administrador, Estudiante, Profesor


class IsAdminUserOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        return request.method in SAFE_METHODS or Administrador.objects.filter(ID_Usuario=request.user).exists()
        
        
class IsReadOnlyEstudentUser(BasePermission):

    def has_permission(self, request, view):
        return request.method in SAFE_METHODS and Estudiante.objects.filter(ID_Usuario=request.user).exists()
   
class IsAdministrador(BasePermission):

    def has_permission(self, request, view):
        return Administrador.objects.filter(ID_Usuario=request.user).exists()   
    
class IsProfesorUser(BasePermission):

    def has_permission(self, request, view):
        return Profesor.objects.filter(ID_Usuario=request.user).exists()     