import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link
import Sidebar from "./components/Sidebar";
import "./SupportPage.css";

const SupportPage: React.FC = () => {
  return (
    <div className="support-page">
      <Sidebar />
      <div className="content">
        <h2>Preguntas Frecuentes</h2>

        <h3>¿Olvidaste tu contraseña?</h3>
        <p>
          Si olvidaste tu contraseña, haz clic en{" "}
          <Link to="/RecuperarPage">"Recuperar Contraseña"</Link> en la página
          de inicio de sesión y sigue los pasos para recuperarla.
        </p>

        <h3>Contáctanos</h3>
        <p>
          Si no encuentras la respuesta a tu pregunta en nuestras FAQ o
          tutoriales, ¡no dudes en contactarnos!
        </p>
        <p>Email: correo@institucional.institucion.com</p>
        <p>Teléfono: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default SupportPage;
