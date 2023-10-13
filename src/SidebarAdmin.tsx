import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarAdmin2 from './SidebarAdmin2';
import SidebarAdmin3 from './SidebarAdmin3';

function SidebarAdmin() {
  const [openMenu, setOpenMenu] = useState("");  // Usamos para determinar qué menú mostrar

  const toggleSidebar = (menu: React.SetStateAction<string>) => {
    if (openMenu === menu) {
      setOpenMenu("");
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="sidebar-title">U-Track</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/HomePageAdmin">
              <i className="fas fa-home"></i> Panel
            </Link>
          </li>
          <li>
            <Link to="/ProfileAdminPage">
              <i className="fas fa-user"></i> Perfil
            </Link>
          </li>
          <li>
            <a onClick={() => toggleSidebar("users")}>
              <i className="fas fa-clipboard-list"></i> Gestionar Usuarios
            </a>
            {openMenu === "users" && <SidebarAdmin2 />}
          </li>
          <li>
            <a onClick={() => toggleSidebar("subjects")}>
              <i className="fas fa-clipboard-list"></i> Gestionar Asignatura
            </a>
            {openMenu === "subjects" && <SidebarAdmin3 />}
          </li>
        </ul>
        <Link to="/">
          <button className="logout">Cerrar Sesion</button>
        </Link>
      </div>
    </div>
  );
}

export default SidebarAdmin;
