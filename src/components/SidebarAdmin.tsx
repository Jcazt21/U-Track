import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./Sidebar.css";
import SidebarAdmin2 from './SidebarAdmin2';


  function SidebarAdmin() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <h2 className="sidebar-title">U-Track</h2>
          <ul className="list-unstyled">
            
            <li>
              <Link to="/HomePageAdmin">
                {" "}
                {/* Cambia <a> por <Link> y href por to */}
                <i className="fas fa-home"></i> Panel
              </Link>
            </li>
            <li>
              <Link to="/ProfileAdminPage">
                <i className="fas fa-user"></i> Perfil
              </Link>
            </li>
            <li>
              <a className='list-unstyled'>
              {" "}
              {/* Cambia <a> por <Link> y href por to */}
              <i className="fas fa-clipboard-list">Gestionar Usuarios</i>
              <a onClick={toggleSidebar}>
              {isOpen && <SidebarAdmin2 />}
              </a>
              </a>
            </li>
            <li>
              <Link to="/AsignaturasPage">
                {" "}
                {/* Cambia <a> por <Link> y href por to */}
                <i className="fas fa-book"></i>  Gestionar Asignaturas
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


export default SidebarAdmin;
