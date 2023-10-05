import React from "react";
import Sidebar from "./components/Sidebar"; // Asegúrate de importar el componente Sidebar correctamente
import "./SupportPage.css"; // Puedes crear un archivo CSS específico para esta página si es necesario

const SupportPage: React.FC = () => {
  return (
    <div className="support-page">
      <Sidebar />
      <div className="content">
        <h2>Preguntas Frecuentes</h2>

        <h3>¿Olvidaste tu contraseña?</h3>
        <p>
          Si olvidaste tu contraseña, haz clic en "Recuperar Contraseña" en la
          página de inicio de sesión y sigue los pasos para recuperarla.
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
