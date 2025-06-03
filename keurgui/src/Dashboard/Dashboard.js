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
    <div className="dashboard-container overflow-x-hidden">
      {/* Toggle button only visible on small screens */}
      <div className="d-md-none p-2 bg-white border-bottom">
        <button className="btn btn-outline-dark" onClick={toggleSidebar}>
          {sidebarVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Header */}
      <div className="header-container">
        
      </div>

      <div className="dashboard-content flex-grow-1 d-flex flex-column flex-md-row">
        {/* Sidebar */}
        <div
          className={`sidebar-wrapper bg-white border-end ${
            sidebarVisible ? "d-block" : "d-none"
          } d-md-block`}
          style={{ width: "250px", minWidth: "250px" }}
        >
          <Sidebar sidebarVisible={sidebarVisible} onClose={closeSidebar} />
        </div>

        {/* Main content */}
        <div className="dashboard-main flex-grow-1 p-3" style={{ minWidth: 0 }}>
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
    </div>
  );
}

export default Dashboard;
