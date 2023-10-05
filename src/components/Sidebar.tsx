import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="sidebar-title">U-Track</h2>
        <ul className="list-unstyled">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i> Panel
            </a>
          </li>
          <li>
            <a href="#perfil">
              <i className="fas fa-user"></i> Perfil
            </a>
          </li>
          <li>
            <a href="#Calificaciones">
              <i className="fas fa-star"></i> Ver Calificaciones
            </a>
          </li>
          <li>
            <a href="#Asignaturas">
              <i className="fas fa-book"></i> Asignaturas
            </a>
          </li>
          <li>
            <a href="#Pensum">
              <i className="fas fa-clipboard-list"></i> Visualizar Pensum
            </a>
          </li>
        </ul>
        <button className="logout">Cerrar Sesion</button>
      </div>
    </div>
  );
};

export default Sidebar;
