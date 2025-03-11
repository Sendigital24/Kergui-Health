import React, { useState } from "react";
import Card from "../Card";
import "./dossiersPatients.css";
import TableauConsultations from "../TableauConsultations";
import SearchAndFilters from "../SearchAndFilters";  
import { FaUserMd, FaHeartbeat, FaCalendarAlt, FaPills } from "react-icons/fa"; 

const DossiersPatients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    date: "",
    status: "",
  });

  // Fonction pour mettre à jour la barre de recherche
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fonction pour appliquer les filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Exemple de données fictives pour les dossiers de patients
  const patientCards = [
    { 
      title: "Nombre de patients consultés", 
      content: <><strong style={{ fontSize: "36px", color: "#4e73df" }}>200</strong><br/>patients consultés cette semaine</>, 
      icon: <FaUserMd style={{ fontSize: "30px", color: "#4e73df" }} />
    },
    { 
      title: "Consultations à venir", 
      content: <><span style={{ fontSize: "36px", color: "#1E90FF" }}>2</span> consultations prévues cette semaine</>, 
      icon: <FaCalendarAlt style={{ fontSize: "30px", color: "#ffb144" }} />
    },
    { 
      title: "Traitements en cours", 
      content: <><span style={{ fontSize: "36px", color: "#1E90FF" }}>5</span> patients sous traitement actuellement</>, 
      icon: <FaPills style={{ fontSize: "30px", color: "#4e73df" }} />
    },
  ];

  // Données fictives pour les consultations à venir
  const consultations = [
    { date: "15/03/2025", patient: "John Doe", consultation: "Consultation générale", statut: "Stable" },
    { date: "20/03/2025", patient: "Jane Doe", consultation: "Consultation dermatologique", statut: "Critique" },
  ];

  return (
    <div className="dossiers-patients mt-5" style={{width:'92%',background:'white',marginLeft:'66px',padding:'20px'}}>
      <h5>Dossiers des Patients</h5>

      {/* Utilisation du composant SearchAndFilters */}
      <SearchAndFilters
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        filters={filters}
        handleFilterChange={handleFilterChange}
      />

      {/* Cartes des dossiers des patients */}
      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
        {patientCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            icon={card.icon}
            onClick={() => console.log(`Détails de ${card.title}`)}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              maxWidth: "280px", // Réduction de la taille
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          />
        ))}
      </div>

      {/* Tableau des consultations à venir */}
      <div className="consultations-table mt-6">
        <TableauConsultations consultations={consultations} />
      </div>
    </div>
  );
};

export default DossiersPatients;
