import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./ProfilePage.css";
import users from "./components/user.json"; // Asegúrate de que la ruta al archivo JSON es correcta

const ProfilePage: React.FC = () => {
  const user = users[0]; // Esto asume que quieres mostrar el primer usuario en el array. Ajusta según sea necesario.

  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src="public/prof.png" alt="Profile" className="profile-picture" />
        <h2 className="name">{user.name}</h2>{" "}
        <p className="id">ID: {user.id}</p>{" "}
        <p className="career">Carrera: {user.career}</p>{" "}
        <p className="rol">{user.rol}</p>{" "}
      </div>
      <Link to="/SupportPage" className="soporte-link">
        <h3 className="soporte">Soporte</h3>
      </Link>
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
