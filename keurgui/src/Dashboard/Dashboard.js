import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ListeConsultations from "./Medecin/ListeConsultations";
import DossiersPatients from "./Medecin/DossiersPatients";
import Messagerie from "./Medecin/Messagerie"; 
import { FaBars, FaTimes } from "react-icons/fa";

function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Fonction pour basculer l'état de visibilité du sidebar
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const closeSidebar = () => setSidebarVisible(false);

  return (
    <div className="container-fluid">
      {/* Bouton hamburger pour ouvrir ou fermer le sidebar */}
      <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
        {sidebarVisible ? <FaTimes /> : <FaBars />}
      </button>

      <div className="row">
        {/* Sidebar - visible si sidebarVisible est true */}
        <div className={`col-md-2 ${sidebarVisible ? "d-block" : "d-none d-md-block"}`}>
          <Sidebar sidebarVisible={sidebarVisible} onClose={closeSidebar} />
        </div>

        {/* Contenu - occupe 8 colonnes */}
        <div className="col-md-10">
          <Header />
          <Routes>
            <Route path="medecin/consultations" element={<ListeConsultations />} />
            <Route path="medecin/dossiers" element={<DossiersPatients />} />
            <Route path="medecin/messagerie" element={<Messagerie />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
