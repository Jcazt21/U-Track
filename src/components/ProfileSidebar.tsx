import React, { useEffect, useState } from "react";
import "./ProfileSidebar.css";
import PieChart from "./PieChart";

interface EstudianteInfo {
  nombre: string;
  usuarioId: number;
  indice: number;
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

  return (
    <div className="profile-sidebar-container">
      <div className="profile-sidebar">
        {/* ... otros elementos */}
        <h2 className="username">{estudiante.nombre}</h2>
        <p className="institutional-id">{estudiante.usuarioId}</p>
        <p className="indiceG">{estudiante.indice.toFixed(2)}</p>{" "}
        {/* Mostrando el índice directamente del JSON */}
        <div className="pie-chart-container">
          <PieChart indice={estudiante.indice} />{" "}
          {/* Pasando el índice directamente como una prop */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
