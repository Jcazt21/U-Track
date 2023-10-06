import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RecuperarPage.css";

const RecuperarPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Recuperar/", {
        username,
      });

      if (response.data && response.data.access) {
        // Asegúrate de que la respuesta contiene los datos esperados
        localStorage.setItem("token", response.data.access);
        navigate("/HomePage");
      } else {
        console.error("Error en la autenticación");
      }
    } catch (error) {
      console.error("Error en la solicitud de inicio sesion", error);
    }
  };

  return (
    <div className="container">
      <div className="centered-element">
        <form onSubmit={handleSubmit} className="Recuperar-form">

          <img src="public/logo.png" alt="Logo" className="logo-picture" />
          <h2 className="Recuperar-Contrasena">Recuperar_Contrasena</h2>
          <input
            type="text"
            placeholder="Ingrear ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      
          <button type="submit">Recuperar</button>
        </form>
      </div>
    </div>  
  );
};

export default RecuperarPage;
