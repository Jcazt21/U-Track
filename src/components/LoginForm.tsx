import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Importa Link
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username,
        password,
      });

      if (response.data && response.data.access) {
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
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="ID institucional"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar Sesion</button>
      <Link to="/RecuperarPage" className="recover-password-link">
        Recuperar Contraseña
      </Link>{" "}
    </form>
  );
};

export default LoginForm;
