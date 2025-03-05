import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ListeConsultations from "./Medecin/ListeConsultations";
import DossiersPatients from "./Medecin/DossiersPatients";
import Messagerie from "./Medecin/Messagerie";
import GestionHoraires from "./Medecin/GestionHoraires";
import SuiviPaiements from "./Medecin/SuiviPaiements";
//import ListePatients from "./Patient/ListePatients";

//import DossiersMedicaux from "./Patient/DossiersMedicaux";
//mport ConsultationsEnLigne from "./Patient/ConsultationsEnLigne";
//import PaiementsFactures from "./Patient/PaiementsFactures";
//import PharmacieOrdonnances from "./Patient/PharmacieOrdonnances";
//import AssistanceSupport from "./Patient/AssistanceSupport";
//import { FaBars, FaTimes } from "react-icons/fa";

function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const closeSidebar = () => setSidebarVisible(false);

  return (
    <div className="container-fluid">
      {/* Bouton hamburger pour mobile */}
      <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
        {sidebarVisible ? <FaTimes /> : <FaBars />}
      </button>

      <div className="row">
        <div className={`col-md-2 ${sidebarVisible ? "d-block" : "d-none d-md-block"}`}>
          <Sidebar sidebarVisible={sidebarVisible} onClose={closeSidebar} />
        </div>

        <div className="col-md-10">
          <Header />
          <Routes>
            {/* Routes Médecin */}
            <Route path="medecin/consultations" element={<ListeConsultations />} />
            <Route path="medecin/dossiers" element={<DossiersPatients />} />
            <Route path="medecin/messagerie" element={<Messagerie />} />
            <Route path="medecin/horaires" element={<GestionHoraires />} />
            <Route path="medecin/paiements" element={<SuiviPaiements />} />

            {/* Routes Patient */}
            <Route path="patient/dossiers" element={<DossiersMedicaux />} />
            {/**<Route path="patient/consultations" element={<ConsultationsEnLigne />} />
            <Route path="patient/paiements" element={<PaiementsFactures />} />
            <Route path="patient/pharmacie" element={<PharmacieOrdonnances />} />
            <Route path="patient/support" element={<AssistanceSupport />} /> 
            
            <Route path="patient/support" element={<ListePatients />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
