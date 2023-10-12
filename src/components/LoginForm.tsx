import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';  // Importa Axios
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Hacer una solicitud POST al endpoint de autenticación
      const response = await axios.post('http://127.0.0.1:8000/token/', {  // Asegúrate de usar la URL correcta para tu endpoint
        username: username,
        password: password,
      });

      if (response.data.access) {
        localStorage.setItem('accessToken', response.data.access);

        // Redirige basado en el tipo de usuario
        switch(response.data.user_type) {
          case 'estudiante':
            navigate('/HomePage');
            break;
          case 'profesor':
            navigate('/HomePageProfe');
            break;
          case 'administrador':
            navigate('/HomePageAdmin');
            break;
          default:
            console.error('Tipo de usuario desconocido');
        }
      } else {
        console.error('Error en la autenticación');
      }
    } catch (error) {
      console.error('Error en la autenticación', error);
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
