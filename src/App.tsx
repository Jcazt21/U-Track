import React from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>U-Track</h1>
          <img src="public/logo.png" alt="logo" className="logo" />
        </div>

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
