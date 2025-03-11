import React, { useState } from "react";
import { FaUserMd, FaProcedures, FaSignOutAlt, FaCalendarCheck, FaNotesMedical, FaCommentDots, 
         FaClock, FaMoneyCheckAlt, FaClipboardList, FaVideo, FaFileInvoiceDollar, FaCapsules, FaLifeRing } 
         from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import logo from "../components/assets/logo.png";

const Sidebar = ({ sidebarVisible, onClose }) => {
  const [showMedecinCategories, setShowMedecinCategories] = useState(false);
  const [showPatientCategories, setShowPatientCategories] = useState(false);
  const location = useLocation();

  // Fonction pour basculer la visibilité des catégories
  const toggleMedecinCategories = () => {
    setShowMedecinCategories(!showMedecinCategories);
  };

  const togglePatientCategories = () => {
    setShowPatientCategories(!showPatientCategories);
  };

  // Fonction pour fermer le sidebar quand un lien est cliqué
  const closeSidebar = () => {
    onClose(); // Ferme le sidebar en appelant la fonction onClose passée par le parent
  };

  return (
    <div className={`sidebar ${sidebarVisible ? "sidebar-visible" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="sidebar-logo-img" />
      </div>

      {/* Conteneur des catégories avec scroll */}
      <div className="sidebar-content">
        {/* Bouton Médecin */}
        <button 
          onClick={toggleMedecinCategories} 
          className={`sidebar-button ${showMedecinCategories ? "active" : ""}`}
        >
          <FaUserMd size={20} className="sidebar-icon" />
          Médecin
        </button>

        {showMedecinCategories && (
          <ul className="subcategory">
            <li><Link to="/dashboard/medecin/consultations-chart" onClick={closeSidebar} className={location.pathname.includes("consultations-chart") ? "active-link" : ""}><FaFileInvoiceDollar /> Diagramme des consultations</Link></li>

            <li><Link to="/dashboard/medecin/consultations" onClick={closeSidebar} className={location.pathname.includes("consultations") ? "active-link" : ""}><FaCalendarCheck /> Liste des consultations</Link></li>
            <li><Link to="/dashboard/medecin/dossiers" onClick={closeSidebar} className={location.pathname.includes("dossiers") ? "active-link" : ""}><FaNotesMedical /> Dossiers des patients</Link></li>
            <li><Link to="/dashboard/medecin/messagerie" onClick={closeSidebar} className={location.pathname.includes("messagerie") ? "active-link" : ""}><FaCommentDots /> Messagerie</Link></li>
            <li><Link to="/dashboard/medecin/horaires" onClick={closeSidebar} className={location.pathname.includes("horaires") ? "active-link" : ""}><FaClock /> Gestion des horaires</Link></li>
            <li><Link to="/dashboard/medecin/paiements" onClick={closeSidebar} className={location.pathname.includes("paiements") ? "active-link" : ""}><FaMoneyCheckAlt /> Suivi des paiements</Link></li>
          </ul>
        )}

        {/* Bouton Patient */}
        <button 
          onClick={togglePatientCategories} 
          className={`sidebar-button ${showPatientCategories ? "active" : ""}`}
        >
          <FaProcedures size={20} className="sidebar-icon" />
          Patient
        </button>

        {showPatientCategories && (
          <ul className="subcategory">
            <li><Link to="/dashboard/patient/support" onClick={closeSidebar} className={location.pathname.includes("support") ? "active-link" : ""}><FaLifeRing /> Liste des patients</Link></li>
            <li><Link to="/dashboard/patient/dossiers" onClick={closeSidebar} className={location.pathname.includes("dossiers") ? "active-link" : ""}><FaClipboardList /> Dossiers médicaux</Link></li>
            <li><Link to="/dashboard/patient/consultations" onClick={closeSidebar} className={location.pathname.includes("consultations") ? "active-link" : ""}><FaVideo /> Consultations en ligne</Link></li>
            <li><Link to="/dashboard/patient/paiements" onClick={closeSidebar} className={location.pathname.includes("paiements") ? "active-link" : ""}><FaFileInvoiceDollar /> Paiements et factures</Link></li>
            <li><Link to="/dashboard/patient/pharmacie" onClick={closeSidebar} className={location.pathname.includes("pharmacie") ? "active-link" : ""}><FaCapsules /> Pharmacie et ordonnances</Link></li>
            <li><Link to="/dashboard/patient/support" onClick={closeSidebar} className={location.pathname.includes("support") ? "active-link" : ""}><FaLifeRing /> Assistance et support</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
