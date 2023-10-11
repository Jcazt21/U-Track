import React, { useState } from 'react';
import Sidebar from "./components/SidebarAdmin";
import "./ModificarUsuarioEst.css";

interface FormData {
  usuario: string | '';
  nombre: string;
  contrasena: string;
  apellido: string;
  carrera: string;
  mail: string;
}

const ModificarUsuarioEst: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    nombre: '',
    contrasena: '',
    apellido: '',
    carrera: '',
    mail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="home-page">
      <Sidebar />

      {/* Nueva sección para modificar usuario */}
      <div className="modify-user-section">
        <h2>Modificar Usuario</h2>
        <input 
          type="text" 
          placeholder="Introduce ID de usuario" 
        />
        <button className="modify-button">Modificar</button>
      </div>
      
      <div className="Mensaje">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="nombre">Usuario:</label>
            <input
              type="number"
              id="id"
              name="id"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
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
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="carrera">Carrera:</label>
            <select 
              id="carrera" 
              name="carrera" 
              value={formData.carrera}
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
            <label htmlFor="apellido">Mail</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Guardar</button>
        </form>
      </div>
      {/* Puedes agregar tu componente Table aquí */}
    </div>
  );
};

export default ModificarUsuarioEst;
