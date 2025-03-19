import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./components/Accueil";
import Rendezvous from "./Rendezvous/Rendezvous";

import DossierMedicalElectronique from "./DME/DossierMedicalElectronique";
import ConsulterMedecin from "./components/ConsulterMedecin";
import Connexion from "./Authentification/Connexion";
import Inscription from "./Authentification/Inscription";
import Dashboard from "./Dashboard/Dashboard";
import JoindreMedecin from './JoindreMedecin/JoindreMedecin';
import About from "./About/About"; 
import Contact from "./Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/connexion" || location.pathname === "/inscription";
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isAuthPage && !isDashboard && location.pathname === "/" && <Accueil />}
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/rendezvous" element={<Rendezvous />} />
        
        <Route path="/dme" element={<DossierMedicalElectronique />} />
        <Route path="/consulter-medecin" element={<ConsulterMedecin />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/joindre-medecin" element={<JoindreMedecin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isAuthPage && !isDashboard }
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
