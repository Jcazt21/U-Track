import React from "react";
import { Pie } from "react-chartjs-2";
import "./ProfileSidebar.css";

const ProfileSidebar: React.FC = () => {
  return (
    <div className="profile-sidebar-container">
      <div className="profile-sidebar">
        <div className="profile-picture">
          <img src="public/prof.png" alt="User Profile" />
        </div>
        <h2 className="username">Nombre de Usuario</h2>
        <p className="institutional-id">ID Institucional: 123456</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
