import React, { useState } from "react";
import { FaUserMd, FaProcedures, FaSignOutAlt } from "react-icons/fa";  // Ajout de l'icône de déconnexion
import { Link } from "react-router-dom";
import "./sidebar.css";  // Import du fichier CSS

const Sidebar = ({ setActiveCategory }) => {
  const [showMedecinCategories, setShowMedecinCategories] = useState(false);
  const [showPatientCategories, setShowPatientCategories] = useState(false);
  const [activeButton, setActiveButton] = useState("");  // État pour l'activation du bouton
  const [activeCategory, setActiveCategoryState] = useState("");  // Gestion de la catégorie active

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);  // Active ou désactive les boutons
    setActiveCategory(buttonName);  // Change la catégorie active
    setActiveCategoryState("");  // Réinitialise la catégorie active quand on clique sur un bouton
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategoryState(categoryName);  // Active ou désactive la catégorie
  };

  const handleLogout = () => {
    // Logique de déconnexion
    console.log("Déconnexion...");
  };

  return (
    <div className="sidebar">
      
      <div className="sidebar-content">
        {/* Médecin Button */}
        <button
          onClick={() => handleButtonClick("medecin")}
          className={`sidebar-button ${activeButton === "medecin" ? "active" : ""}`}
        >
          <FaUserMd size={20} className="sidebar-icon" />
          Médecin
        </button>

        {activeButton === "medecin" && (
          <div className="subcategory">
            <Link
              to="/dashboard/medecin/category1"
              className={`subcategory-link ${activeCategory === "category1" ? "active-link" : ""}`}
              onClick={() => handleCategoryClick("category1")}
            >
              Catégorie 1
            </Link>
            <Link
              to="/dashboard/medecin/category2"
              className={`subcategory-link ${activeCategory === "category2" ? "active-link" : ""}`}
              onClick={() => handleCategoryClick("category2")}
            >
              Catégorie 2
            </Link>
          </div>
        )}

        {/* Patient Button */}
        <button
          onClick={() => handleButtonClick("patient")}
          className={`sidebar-button ${activeButton === "patient" ? "active" : ""}`}
        >
          <FaProcedures size={20} className="sidebar-icon" />
          Patient
        </button>

        {activeButton === "patient" && (
          <div className="subcategory">
            <Link
              to="/dashboard/patient/category1"
              className={`subcategory-link ${activeCategory === "category1" ? "active-link" : ""}`}
              onClick={() => handleCategoryClick("category1")}
            >
              Catégorie 1
            </Link>
            <Link
              to="/dashboard/patient/category2"
              className={`subcategory-link ${activeCategory === "category2" ? "active-link" : ""}`}
              onClick={() => handleCategoryClick("category2")}
            >
              Catégorie 2
            </Link>

            <button onClick={handleLogout} className="logout-button">
        <FaSignOutAlt size={20} className="sidebar-icon" />
        Déconnexion
      </button>
          </div>
        )}
      </div>

      {/* Bouton Déconnexion */}
     

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Sidebar;
