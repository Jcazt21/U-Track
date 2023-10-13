import React, { useState } from 'react';
import Sidebar from "./components/SidebarAdmin";
import "./CrearUsuarioEst.css";

interface FormData {
  codigo: string | '';
  nombre: string;
  departamento: string;
  activo: boolean;  // Agregar estado para activo
}

const CrearAsignaturaAdmin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    codigo: '',
    nombre: '',
    departamento: '',
    activo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const inputValue = type === 'checkbox' ? target.checked : value;
    setFormData(prev => ({ ...prev, [name]: inputValue }));
  }

  return (
    <div className="home-page">
      <Sidebar />

      {/* Nueva sección para modificar usuario */}
      
      <div className="Mensaje">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="nombre">Codigo:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.codigo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Materia:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="carrera">departamento:</label>
            <select 
              id="carrera" 
              name="carrera" 
              value={formData.departamento}
              onChange={handleChange as any}
              required
            >
              <option value="">Seleccione una carrera</option>
              <option value="ingenieria">Ingeniería</option>
              <option value="medicina">Ciencias Básicas y Ambientales</option>
              <option value="derecho">Ciencias Sociales y Humanidades</option>
              <option value="derecho">Economía y Negocio</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="activo" style={{ display: 'inline-block', marginRight: '100x' }}>Activo:</label>
            <input
              type="checkbox"
              id="activo"
              name="activo"
              checked={formData.activo}
              onChange={handleChange as any}
              style={{ display: 'inline-block' }}  // Estilo añadido aquí para mover el checkbox más cerca
            />
          </div>

          <button type="submit">Crear</button>
        </form>
      </div>
      {/* Puedes agregar tu componente Table aquí */}
    </div>
  );
};

export default CrearAsignaturaAdmin;
