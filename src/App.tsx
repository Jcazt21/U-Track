import React from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SupportPage from "./SupportPage";
import CalificacionesPage from "./CalificacionesPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecuperarPage from "./RecuperarPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="header">
                  <h1>U-Track</h1>
                  <img src="public/logo.png" alt="logo" className="logo" />
                  <Link to="/HomePage" className="btn">
                    Ir a HomePage
                  </Link>
                </div>
                <LoginForm />
              </>
            }
          />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/SupportPage" element={<SupportPage />} />
          <Route path="/CalificacionesPage" element={<CalificacionesPage />} />
          <Route path="/RecuperarPage" element={<RecuperarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
