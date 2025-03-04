import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./components/Accueil";
import Rendezvous from "./components/Rendezvous";
import ConsulterMedecin from "./components/ConsulterMedecin";
import Connexion from "./Authentification/Connexion";
import Inscription from "./Authentification/Inscription";
import Dashboard from "./Dashboard/Dashboard"; // Import du Dashboard
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/connexion" || location.pathname === "/inscription";
  const isDashboard = location.pathname.startsWith("/dashboard"); // Vérifier si on est sur Dashboard

  return (
    <>
      {!isAuthPage && !isDashboard && <Accueil />} {/* Masquer l'accueil sur dashboard */}
      <Routes>
        <Route path="/rendezvous" element={<Rendezvous />} />
        <Route path="/consulter-medecin" element={<ConsulterMedecin />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
      </Routes>
      {!isAuthPage && !isDashboard && <Footer />} {/* Masquer le footer sur dashboard */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
