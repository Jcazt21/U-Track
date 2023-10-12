import React from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SupportPage from "./SupportPage";
import CalificacionesPage from "./CalificacionesPage";
import AsignaturasPage from "./AsignaturasPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecuperarPage from "./RecuperarPage";
import PensumPage from "./PensumPage";
import HomePageProfe from "./HomePageProfe";
import ProfilePageProfe from "./ProfilePageProfe";
import HomePageAdmin from "./HomePageAdmin";
import ProfileAdminPage from "./ProfileAdminPage";
import ModificarUsuarioEst from "./ModificarUsuarioEst";
import CrearUsuarioEst from "./CrearUsuarioEst";
import ModificarAsignaturaAdmin from "./ModificarAsignaturaAdmin";
import CrearAsignaturaAdmin from "./CrearAsignaturaAdmin";

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
          <Route path="/PensumPage" element={<PensumPage />} />
          <Route path="/AsignaturasPage" element={<AsignaturasPage />} />
          <Route path="/HomePageProfe" element={<HomePageProfe />} />
          <Route path="/ProfilePageProfe" element={<ProfilePageProfe />} />
          <Route path="/HomePageAdmin" element={<HomePageAdmin />} />
          <Route path="/ProfileAdminPage" element={<ProfileAdminPage />} />
          <Route path="/ModificarUsuarioEst" element={<ModificarUsuarioEst />} />
          <Route path="/CrearUsuarioEst" element={<CrearUsuarioEst />} />
          <Route path="/ModificarAsignaturaAdmin" element={<ModificarAsignaturaAdmin />} />
          <Route path="/CrearAsignaturaAdmin" element={<CrearAsignaturaAdmin />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
