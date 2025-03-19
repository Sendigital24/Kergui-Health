import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ListeConsultations from "./Medecin/ListeConsultations";
import DossiersPatients from "./Medecin/DossiersPatients";
import Messagerie from "./Medecin/Messagerie"; 
import ConsultationChart from "./ConsultationChart";
import RendezvousList from "./Medecin/RendezvousList"; 
import { FaBars, FaTimes } from "react-icons/fa";
import DME from "./Medecin/DME"; 
import ConsulterMedecin from "./Patients/ConsulterMedecin"; 

function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const closeSidebar = () => setSidebarVisible(false);

  return (
    <div className="container-fluid d-flex flex-column" style={{ height: '100vh' }}>
      {/* Button to toggle sidebar on mobile */}
      <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
        {sidebarVisible ? <FaTimes /> : <FaBars />}
      </button>

      {/* Header at the top */}
      <div className="header-container">
        <Header />
      </div>

      <div className="row flex-grow-1">
        {/* Sidebar on the left */}
        <div className={`col-md-2 ${sidebarVisible ? "d-block" : "d-none d-md-block"}`}>
          <Sidebar sidebarVisible={sidebarVisible} onClose={closeSidebar} />
        </div>

        {/* Main content on the right */}
        <div className="col-md-10" style={{ background: '#F0F0F2', height: '100%' }}>
          <Routes>
            <Route path="medecin/consultations" element={<ListeConsultations />} />
            <Route path="medecin/dossiers" element={<DossiersPatients />} />
            <Route path="medecin/messagerie" element={<Messagerie />} />
            <Route path="medecin/consultations-chart" element={<ConsultationChart />} />
            <Route path="/medecin/rendezvouslist" element={<RendezvousList />} />
            <Route path="medecin/dme" element={<DME />} />
            <Route path="patients/dme" element={<DME />} />
            <Route path="patients/consulter-medecin" element={<ConsulterMedecin />} />
          </Routes>
        </div>
      </div>

      {/* Sidebar at the bottom (for mobile view or when toggled) */}
      <div className={`sidebar-bottom d-md-none ${sidebarVisible ? "d-block" : "d-none"}`}>
        <Sidebar sidebarVisible={sidebarVisible} onClose={closeSidebar} />
      </div>
    </div>
  );
}

export default Dashboard;
