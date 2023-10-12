import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./SidebarAdmin3.css";


const SidebarAdmin3: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="list-unstyled">
          <li>
            <Link to="/CrearAsignaturaAdmin">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Crear Asignatura
            </Link>
          </li>
          <li>
            <Link to="/ModificarAsignaturaAdmin">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Modificar Asignatura
            </Link>
          </li>
        </ul>
        {/* Agrega esta línea */}
      </div>
    </div>
  );
};

export default SidebarAdmin3;
