import React from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importa Link

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>U-Track</h1>
        <img src="public/logo.png" alt="logo" className="logo" />
      </div>
      <div className="Router">
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
