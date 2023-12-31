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
import ModificarUsuarioProfe from "./ModificarUsuarioProfe";
import CrearAsignaturaAdmin from "./CrearAsignaturaAdmin";
import CrearUsuarioProfesor from "./CrearUsuarioProfesor";
import Seleccion from "./Seleccion";
import GestionAsignaturaPage from "./GestionAsignaturaPage";

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
          <Route path="/Seleccion" element={<Seleccion />} />
          <Route path="/ProfileAdminPage" element={<ProfileAdminPage />} />
          <Route path="/GestionAsignaturaPage" element={<GestionAsignaturaPage />} />

          <Route
            path="/ModificarUsuarioEst"
            element={<ModificarUsuarioEst />}
          />
          <Route path="/CrearUsuarioEst" element={<CrearUsuarioEst />} />
          <Route
            path="/ModificarAsignaturaAdmin"
            element={<ModificarAsignaturaAdmin />}
          />
          <Route
            path="/ModificarUsuarioProfe"
            element={<ModificarUsuarioProfe />}
          />
          <Route
            path="/CrearAsignaturaAdmin"
            element={<CrearAsignaturaAdmin />}
          />
          <Route
            path="/CrearUsuarioProfesor"
            element={<CrearUsuarioProfesor />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
