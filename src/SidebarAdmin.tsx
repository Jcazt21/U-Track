import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarAdmin.css";

const SidebarAdmin: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="sidebar-title">U-Track</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/HomePage">
              <i className="fas fa-home"></i> Perfil
            </Link>
          </li>
          <li 
            onClick={() => setSelectedOption('gestionarPerfil')}
          >
            <Link to="/ProfilePage">
              <i className="fas fa-user"></i> Gestionar Perfil
            </Link>
          </li>
          <li 
            onClick={() => setSelectedOption('gestionarAsignaturas')}
          >
            <Link to="/AsignaturasPage">
              <i className="fas fa-book"></i> Gestionar Asignaturas
            </Link>
          </li>
        </ul>
        <Link to="/">
          <button className="logout">Cerrar Sesion</button>
        </Link>
      </div>
      
      {selectedOption && (
        <div className="sidebar secondary">
          <ul className="list-unstyled">
            {selectedOption === 'gestionarPerfil' && (
              <>
                <li><Link to="/CrearPerfil">Crear Perfil</Link></li>
                <li><Link to="/ModificarPerfil">Modificar Perfil</Link></li>
              </>
            )}
            {selectedOption === 'gestionarAsignaturas' && (
              <>
                <li><Link to="/CrearAsignatura">Crear Asignatura</Link></li>
                <li><Link to="/ModificarAsignatura">Modificar Asignatura</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarAdmin;
