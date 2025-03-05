import React, { useState } from "react";
import Card from "../Card"; // Import du composant Card réutilisable
import "./dossiersPatients.css"; // Assurez-vous d'avoir un fichier CSS pour personnaliser les styles
import { FaSearch, FaFilter } from "react-icons/fa";
import TableauConsultations from "../TableauConsultations"; // Import du composant TableauConsultations

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
    { title: "Informations générales", content: "Nom: John Doe, Âge: 35, Sexe: Masculin, Statut: Stable", buttonText: "Voir les détails" },
    { title: "Historique médical", content: "Antécédents: Hypertension, Diabète de type 2", buttonText: "Voir l'historique" },
    { title: "Consultations passées", content: "Dernière consultation: 01/03/2025", buttonText: "Voir les consultations" },
    { title: "Traitements en cours", content: "Médicaments prescrits: Lisinopril, Metformine", buttonText: "Voir les traitements" },
    { title: "Suivi de la santé", content: "Progrès: Bonne évolution", buttonText: "Voir le suivi" },
    { title: "Nombre de patients consultés", content: "200 patients consultés cette semaine", buttonText: "Voir les statistiques" }, // Nouvelle carte ajoutée
  ];

  // Données fictives pour les consultations à venir
  const consultations = [
    { date: "15/03/2025", patient: "John Doe", consultation: "Consultation générale", statut: "Stable" },
    { date: "20/03/2025", patient: "Jane Doe", consultation: "Consultation dermatologique", statut: "Critique" },
  ];

  return (
    <div className="dossiers-patients" style={{ marginLeft: "45px" }}>
      <h5>Dossiers des Patients</h5>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un dossier..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Filtres dynamiques */}
      <div className="filters">
        <select name="date" value={filters.date} onChange={handleFilterChange} className="filter-select">
          <option value="">Filtrer par date</option>
          <option value="date1">Date 1</option>
          <option value="date2">Date 2</option>
        </select>
        <select name="status" value={filters.status} onChange={handleFilterChange} className="filter-select">
          <option value="">Filtrer par statut</option>
          <option value="stable">Stable</option>
          <option value="critical">Critique</option>
        </select>
        <FaFilter className="filter-icon" />
      </div>

      {/* Cartes des dossiers des patients */}
      <div className="cards-container">
        {patientCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            onClick={() => console.log(`Détails de ${card.title}`)}
          />
        ))}
      </div>

      {/* Tableau des consultations à venir */}
      <div className="consultations-table">
        <TableauConsultations consultations={consultations} />
      </div>
    </div>
  );
};

export default DossiersPatients;
