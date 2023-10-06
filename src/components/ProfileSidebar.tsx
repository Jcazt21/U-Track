import React from "react";
import "./ProfileSidebar.css";
// import user from "./assets/user.json";

const ProfileSidebar: React.FC = () => {
  return (
    <div className="profile-sidebar-container">
      <div className="profile-sidebar">
        <div className="profile-picture">
          <img src="public/prof.png" alt="User Profile" />
        </div>
        <h2 className="username">Nombre de Usuario</h2>
        <p className="institutional-id">123456</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
