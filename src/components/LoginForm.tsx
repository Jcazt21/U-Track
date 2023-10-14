import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";
import estudiantes from "./estudiantes.json";
import profesores from "./profesores.json";
import administradores from "./administradores.json";

interface User {
  usuarioId: number;
  password: string;
  rol?: string;
  // ...otros campos
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allUsers = [
      ...estudiantes.estudiantes,
      ...profesores.profesores,
      ...administradores.administradores,
    ] as User[];

    const user = allUsers.find(
      (user) =>
        user.usuarioId.toString() === username && user.password === password
    );

    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user));
      localStorage.setItem("usuarioId", user.usuarioId.toString()); // Almacenar usuarioId en localStorage

      if (user.rol) {
        switch (user.rol.toLowerCase()) {
          case "estudiante":
            navigate("/HomePage");
            break;
          case "profesor":
            navigate("/HomePageProfe");
            break;
          case "administrador":
            navigate("/HomePageAdmin");
            break;
          default:
            console.error("Tipo de usuario no reconocido");
            break;
        }
      } else {
        console.error("Rol no definido para el usuario.");
      }
    } else {
      console.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
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
