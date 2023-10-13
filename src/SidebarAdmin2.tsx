import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./SidebarAdmin2.css";



const SidebarAdmin2: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="list-unstyled">
          <li>
            <Link to="/CrearUsuarioEst">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-user"></i> Crear Estuadiante
            </Link>
          </li>
          <li>
            <Link to="/ModificarUsuarioEst">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Modificar Estudiante
            </Link>
          </li>
          <li>
            <Link to="/CrearUsuarioEst">
              <i className="fas fa-user"></i> Crear Profesor
            </Link>
          </li>
          <li>
            <Link to="/ModificarUsuarioProfe">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Modificar Profesor
            </Link>
          </li>
        </ul>
        {/* Agrega esta línea */}
      </div>
    </div>
  );
};

export default SidebarAdmin2;
