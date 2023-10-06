import React from "react";
import "./ProfilePage.css";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom"; // Importa el componente Link

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src="public/prof.png" alt="Profile" className="profile-picture" />
        <h2 className="name">Nombre</h2>
        <p className="id">ID: 123456</p>
        <p className="career">Carrera: Ingeniería en Sistemas</p>
        <p className="rol">Estudiante</p>
      </div>
      <Link to="/SupportPage" className="soporte-link">
        {" "}
        {/* Agrega el componente Link aquí */}
        <h3 className="soporte">Soporte</h3>
      </Link>
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
