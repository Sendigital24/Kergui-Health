import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import "./dashboard.css"; 
const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="dashboard-container">
    
      <div className="main-content">
        <Header />
        
      <Sidebar setActiveCategory={setActiveCategory} />
        <div className="content-section">
          <Routes>
            <Route path="medecin" element={<div>Contenu Médecin</div>} />
            <Route path="patient" element={<div>Contenu Patient</div>} />
            {/* Ajouter des routes supplémentaires pour chaque sous-catégorie */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
