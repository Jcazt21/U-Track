import React, { useEffect, useState } from "react";
import "./ProfileSidebar.css";
import estudiantes from "./estudiantes.json"; // Asegúrate de que la ruta al archivo JSON es correcta
import PieChart from "./PieChart"; // Asegúrate de reemplazar './PieChart' con la ruta real al archivo

const ProfileSidebar: React.FC = () => {
  const [estudiante, setEstudiante] = useState<any>(null);

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");

    if (usuarioId) {
      const estudianteEncontrado = estudiantes.estudiantes.find(
        (est) => est.usuarioId.toString() === usuarioId
      );

      if (estudianteEncontrado) {
        setEstudiante(estudianteEncontrado);
      }
    }
  }, []);

  if (!estudiante) return null;

  const { nombre, usuarioId, indice, imagen } = estudiante;

  return (
    <div className="profile-sidebar-container">
      <div className="profile-sidebar">
        <div className="profile-picture">
          <img src={imagen || "public/prof.png"} alt="User Profile" />
        </div>
        <h2 className="username">{nombre}</h2>
        <p className="institutional-id">{usuarioId}</p>
        <p className="indiceG">{indice}</p>
        <div className="pie-chart-container">
          <PieChart indice={indice} /> {/* Pasar el índice como una prop */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
