import React from "react";
import Sidebar from "./components/Sidebar"; // Importa el componente del sidebar
import Mnsj from "./components/Mnsj";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">{/* <Mnsj /> */}</div>
    </div>
  );
};

export default HomePage;
