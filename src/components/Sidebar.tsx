import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="sidebar-title">U-Track</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/HomePage">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-home"></i> Panel
            </Link>
          </li>
          <li>
            <Link to="/ProfilePage">
              <i className="fas fa-user"></i> Perfil
            </Link>
          </li>
          <li>
            <Link to="/calificaciones">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-star"></i> Ver Calificaciones
            </Link>
          </li>
          <li>
            <Link to="/asignaturas">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Asignaturas
            </Link>
          </li>
          <li>
            <Link to="/pensum">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-clipboard-list"></i> Visualizar Pensum
            </Link>
          </li>
        </ul>
        <button className="logout">Cerrar Sesion</button>
      </div>
    </div>
  );
};

export default Sidebar;
