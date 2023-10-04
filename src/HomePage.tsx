import React from "react";
import Sidebar from "./components/Sidebar"; // Importa el componente del sidebar
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">
        {/* Agrega más contenido según sea necesario */}
      </div>
    </div>
  );
};

export default HomePage;
