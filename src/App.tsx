import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./HomePage"; // Asegúrate de importar tu nuevo componente
import "./App.css";

function App() {
  const [showHomePage, setShowHomePage] = useState(false); // Nuevo estado para controlar la visualización

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage />
      ) : (
        <>
          <div className="header">
            <h1>U-Track</h1>
            <img src="public/logo.png" alt="logo" className="logo" />
          </div>
          <LoginForm />
          <button onClick={() => setShowHomePage(true)}>
            Ir a la página principal
          </button>{" "}
          {/* Botón para cambiar a la página principal */}
        </>
      )}
    </div>
  );
}

export default App;
