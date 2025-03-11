// components/SearchAndFilters.js
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchAndFilters = ({ searchQuery, handleSearchChange, filters, handleFilterChange }) => {
  return (
    <div className="search-filters-container">
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
    </div>
  );
};

export default SearchAndFilters;
