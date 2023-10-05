import React from "react";
import "./ProfilePage.css";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom"; // Importa el componente Link

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img
          src="path-to-your-image.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="name">Nombre Apellido</h2>
        <p className="id">ID: 123456</p>
        <p className="career">Carrera: Ingeniería en Sistemas</p>
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
