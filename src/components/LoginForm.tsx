import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";
import estudiantes from "./estudiantes.json";
import profesores from "./profesores.json";
import administradores from "./administradores.json";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Concatenar todos los usuarios en un solo array
    const allUsers = [
      ...estudiantes.estudiantes,
      ...profesores.profesores,
      ...administradores.administradores,
    ];

    // Buscar el usuario en el array basado en el ID y la contraseña
    const user = allUsers.find(
      (user) =>
        user.usuarioId.toString() === username && user.password === password
    );

    if (user) {
      // Guardar el usuarioId en el localStorage
      localStorage.setItem("usuarioId", user.usuarioId.toString());

      // Navegar basado en el tipo de usuario
      if ("carreraId" in user) {
        navigate("/HomePage");
      } else if ("departamentoId" in user && "carrera" in user) {
        navigate("/HomePageProfe");
      } else if ("departamentoId" in user) {
        navigate("/HomePageAdmin");
      } else {
        console.error("Tipo de usuario no reconocido");
      }
    } else {
      console.error("Error en la autenticación");
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
      </Link>
    </form>
  );
};

export default LoginForm;
