import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="sidebar-title">U-Track</h2> {/* Agregado título */}
        <ul className="list-unstyled">
          <li>
            <a href="#home">Panel</a>
          </li>
          <li>
            <a href="#perfil">Perfil</a>
          </li>
          <li>
            <a href="#Calificaciones">Ver Calificaciones</a>
          </li>
          <li>
            <a href="#Asignaturas">Asignaturas</a>
          </li>
          <li>
            <a href="#Pensum">Visualizar Pensum</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
