import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileSidebar from "./components/ProfileSidebar";

const CalificacionesPage: React.FC = () => {
  return (
    <div className="CalificacionesPage">
      <Sidebar />
      <ProfileSidebar />
      <div className="TableCalificaciones"></div>
    </div>
  );
};

export default CalificacionesPage;
