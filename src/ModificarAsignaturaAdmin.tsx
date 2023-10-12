import React, { useState } from 'react';
import Sidebar from "./components/SidebarAdmin";
import "./ModificarAsignaturaAdmin.css";

interface FormData {
  codigo: string | '';
  nombre: string;
  departamento: string;
  activo: boolean;  // Agregar estado para activo
}

const ModificarAsignaturaAdmin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    codigo: '',
    nombre: '',
    departamento: '',
    activo: false,  // Inicializar estado para activo
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

      <div className="modify-user-section">
        <h2>Buscar Asignatura</h2>
        <input 
          type="text" 
          placeholder="Introduce Asignatura" 
        />
        <button className="modify-button">Modificar</button>
      </div>
      
      <div className="Mensaje">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="nombre">Codigo</label>
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
            <label htmlFor="nombre">Nombre:</label>
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
            <label htmlFor="apellido">Departamento:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.departamento}
              onChange={handleChange}
              required
            />
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

          <button type="submit">Guardar</button>
        </form>
      </div>
      {/* Puedes agregar tu componente Table aquí */}
    </div>
  );
};

export default ModificarAsignaturaAdmin;
