import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./header.css"; // Import du fichier CSS

const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher..."
          className="search-bar"
        />
      </div>
      <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
