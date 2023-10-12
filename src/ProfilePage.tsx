import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./ProfilePage.css";
import estudiantes from "./components/estudiantes.json";

interface Estudiante {
  nombre: string;
  usuarioId: number;
  carreraId: number;
  rol: string;
  indice: number;
  imagen?: string;
  // Agrega aquí otros campos según sea necesario
}

const ProfilePage: React.FC = () => {
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");

    if (usuarioId) {
      const est = estudiantes.estudiantes.find(
        (est) => est.usuarioId.toString() === usuarioId
      );

      if (est) {
        setEstudiante(est);
      }
    }
  }, []);

  if (!estudiante) return <div>Cargando...</div>;

  return (
    <div className="profile-container">
      <div className="profile-info">
        <img
          src={estudiante?.imagen || "public/prof.png"}
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="name">{estudiante.nombre}</h2>
        <p className="id">ID: {estudiante.usuarioId}</p>
        <p className="career">Carrera: {estudiante.carreraId}</p>
        <p className="rol">{estudiante.rol}</p>
        <p className="IndiceLabel">Indice Academico:</p>
        <p className="indiceP">{estudiante.indice}</p>
      </div>
      <Link to="/SupportPage" className="soporte-link">
        <h3 className="soporte">Soporte</h3>
      </Link>
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
