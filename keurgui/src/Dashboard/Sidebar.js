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

  // Fonction pour déconnecter l'utilisateur
  const handleLogout = () => {
    // Logique pour déconnecter l'utilisateur (par exemple, suppression du token, redirection, etc.)
    console.log("Utilisateur déconnecté");
    // Tu peux rediriger l'utilisateur vers une autre page après la déconnexion
    window.location.href = "/login"; // Exemple de redirection
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
            {/* Lien vers RendezvousList */}
            <li><Link to="/dashboard/medecin/rendezvouslist" onClick={closeSidebar} className={location.pathname.includes("rendezvouslist") ? "active-link" : ""}><FaCalendarCheck /> Liste des Rendez-vous</Link></li>
            <li><Link to="/dashboard/medecin/consultations" onClick={closeSidebar} className={location.pathname.includes("consultations") ? "active-link" : ""}><FaCalendarCheck /> Liste des consultations</Link></li>
            <li><Link to="/dashboard/medecin/dossiers" onClick={closeSidebar} className={location.pathname.includes("dossiers") ? "active-link" : ""}><FaNotesMedical /> Dossiers des patients</Link></li>
            <li><Link to="/dashboard/medecin/messagerie" onClick={closeSidebar} className={location.pathname.includes("messagerie") ? "active-link" : ""}><FaCommentDots /> Messagerie</Link></li>
            <li><Link to="/dashboard/medecin/horaires" onClick={closeSidebar} className={location.pathname.includes("horaires") ? "active-link" : ""}><FaClock /> Gestion des horaires</Link></li>
            <li><Link to="/dashboard/medecin/dme" onClick={closeSidebar} className={location.pathname.includes("dme") ? "active-link" : ""}><FaClipboardList /> DME</Link></li>
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
            <li><Link to="/dashboard/patients/support" onClick={closeSidebar} className={location.pathname.includes("support") ? "active-link" : ""}><FaLifeRing /> Liste des patients</Link></li>
            <li><Link to="/dashboard/patients/dossiers" onClick={closeSidebar} className={location.pathname.includes("dossiers") ? "active-link" : ""}><FaClipboardList /> Dossiers médicaux</Link></li>
            <li><Link to="/dashboard/patients/consultations" onClick={closeSidebar} className={location.pathname.includes("consultations") ? "active-link" : ""}><FaVideo /> Consultations en ligne</Link></li>
            <li><Link to="/dashboard/patients/paiements" onClick={closeSidebar} className={location.pathname.includes("paiements") ? "active-link" : ""}><FaFileInvoiceDollar /> Paiements et factures</Link></li>
            <li><Link to="/dashboard/patients/pharmacie" onClick={closeSidebar} className={location.pathname.includes("pharmacie") ? "active-link" : ""}><FaCapsules /> Pharmacie et ordonnances</Link></li>
            <li><Link to="/dashboard/patients/support" onClick={closeSidebar} className={location.pathname.includes("support") ? "active-link" : ""}><FaLifeRing /> Assistance et support</Link></li>
            <li><Link to="/dashboard/patients/dme" onClick={closeSidebar} className={location.pathname.includes("dme") ? "active-link" : ""}><FaClipboardList /> DME</Link></li>
            <li><Link to="/dashboard/patients/consulter-medecin" onClick={closeSidebar} className={location.pathname.includes("consulter-medecin") ? "active-link" : ""}><FaUserMd /> Consulter un médecin</Link></li>
          </ul>
        )}
      </div>

      {/* Bouton de déconnexion */}
      <button
        onClick={handleLogout}
        className="logout-button transform transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white p-2 rounded-full"
        style={{width:"196px",backgroundColor:'red'}}>
        <FaSignOutAlt size={20} className="sidebar-icon" style={{marginRight:'20px'}}/>
        Deconnexion
      </button>
    </div>
  );
};

export default Sidebar;
