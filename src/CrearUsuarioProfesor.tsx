import React, { useState } from 'react';
import Sidebar from "./components/SidebarAdmin";
import "./CrearUsuarioEst.css";

interface FormData {
  usuario: string | '';
  nombre: string;
  contrasena: string;
  apellido: string;
  carrera: string;
  mail: string;
  activo: boolean;  // Agregar estado para activo
  imagen: string;  // Agrega estado para la imagen
}

const CrearUsuarioProfesor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    contrasena: '',
    nombre: '',
    apellido: '',
    carrera: '',
    mail: '',
    activo: false,
    imagen: '',
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
            <label htmlFor="nombre">Usuario:</label>
            <input
              type="text"
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

          <div className="form-group">
            <label htmlFor="imagen">Subir imagen:</label>
            <input
              type="file"
              id="imagen"
              name="imagen"
              onChange={e => setFormData({ ...formData, imagen: e.target.value })}
            />
          </div>

          <button type="submit">Guardar</button>
        </form>
      </div>
      {/* Puedes agregar tu componente Table aquí */}
    </div>
  );
};

export default CrearUsuarioProfesor
