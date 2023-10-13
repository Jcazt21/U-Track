import React, { useEffect, useState } from "react";
import "./ProfileSidebar.css";
import PieChart from "./PieChart"; // Asegúrate de reemplazar './PieChart' con la ruta real al archivo

interface EstudianteInfo {
  Nombre_Estudiante: string;
  ID_Estudiante: number;
  Indice: number;
  // ... otros campos según sea necesario
}

const ProfileSidebar: React.FC = () => {
  const [estudiante, setEstudiante] = useState<EstudianteInfo | null>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const estudianteInfo = JSON.parse(userInfo) as EstudianteInfo;
      setEstudiante(estudianteInfo);
    }
  }, []);

  if (!estudiante) return null;

  const indiceCalculado = (estudiante.Indice * 4) / 100;

  return (
    <div className="profile-sidebar-container">
      <div className="profile-sidebar">
        {/* ... otros elementos */}
        <h2 className="username">{estudiante.Nombre_Estudiante}</h2>
        <p className="institutional-id">{estudiante.ID_Estudiante}</p>
        <p className="indiceG">{indiceCalculado.toFixed(2)}</p> {/* Asegúrate de ajustar la precisión según sea necesario */}
        <div className="pie-chart-container">
          <PieChart indice={indiceCalculado} /> {/* Pasar el índice calculado como una prop */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
