import React, { useState } from 'react';
import Sidebar from "./components/SidebarAdmin";
import "./ModificarUsuarioEst.css";

interface FormData {
  usuario: string | '';
  nombre: string;
  contrasena: string;
  apellido: string;
  departamento: string;
  mail: string;
  carrera: string;
  activo: boolean;  // Agregar estado para activo
  imagen: string;  // Agrega estado para la imagen
}

const ModificarUsuarioProfe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    contrasena: '',
    nombre: '',
    apellido: '',
    departamento: '',
    mail: '',
    carrera: '',
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
            <div className="modify-user-section">
        <h2>Modificar Profesor</h2>
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
            <label htmlFor="departamento">Departamento:</label>
            <select 
              id="departamento" 
              name="departamento" 
              value={formData.departamento}
              onChange={handleChange as any}
              required
            >
              <option value="">Seleccione un departamento</option>
              <option value="ingenieria">Ingeniería</option>
              <option value="medicina">Ciencias Básicas y Ambientales</option>
              <option value="derecho">Ciencias Sociales y Humanidades</option>
              <option value="derecho">Economía y Negocio</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Mail">Mail</label>
            <input
              type="text"
              id="Mail"
              name="Mail"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Carrera">Carrera</label>
            <input
              type="text"
              id="Carrera"
              name="Carrera"
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

          <button type="submit">Modificar</button>
        </form>
      </div>
      {/* Puedes agregar tu componente Table aquí */}
    </div>
  );
};

export default ModificarUsuarioProfe;
