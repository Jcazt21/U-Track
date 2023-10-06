import React from "react";
import "./ProfileSidebar.css";
import user from "./user.json";

const ProfileSidebar: React.FC = () => {
  return (
    <div className="profile-sidebar-container">
      {user.map((user, index) => (
        <div className="profile-sidebar" key={index}>
          <div className="profile-picture">
            <img src="public/prof.png" alt="User Profile" />
          </div>
          <h2 className="username">{user.name}</h2>
          <p className="institutional-id">{user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileSidebar;
