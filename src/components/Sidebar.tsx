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
            <Link to="/CalificacionesPage">
              {" "}
              <i className="fas fa-star"></i> Calificaciones
            </Link>
          </li>
          <li>
            <Link to="/AsignaturasPage">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-book"></i> Asignaturas
            </Link>
          </li>
          <li>
            <Link to="/PensumPage">
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-clipboard-list"></i> Visualizar Pensum
            </Link>
          </li>
        </ul>
        <Link to="/">
          {" "}
          {/* Agrega esta línea */}
          <button className="logout">Cerrar Sesion</button>
        </Link>{" "}
        {/* Agrega esta línea */}
      </div>
    </div>
  );
};

export default Sidebar;
