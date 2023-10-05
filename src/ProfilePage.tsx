import React from "react";
import "./ProfilePage.css";
import Sidebar from "./components/Sidebar";

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
      <h3 className="soporte">Soporte</h3>
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
