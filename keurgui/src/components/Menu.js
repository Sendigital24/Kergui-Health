import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSearch, FaComment, FaPhoneAlt, FaExclamationCircle } from "react-icons/fa";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      {/* Navbar principale */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="brand-name">Kergui Health</span>
        </div>

        <button className="hamburger-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menus (ils apparaissent avec le bouton) */}
      <div className={`menu-content ${isOpen ? "show" : ""}`}>
        <ul className="navbar-links">
          <li><Link to="/accueil" className="navbar-link">Accueil</Link></li>
          <li><Link to="/rendezvous" className="navbar-link">Rendez-vous</Link></li>
          <li><Link to="/consulter-medecin" className="navbar-link">Consulter Médecin</Link></li>
          <li><Link to="/dme" className="navbar-link">DME</Link></li>
          <li><Link to="/connexion" className="navbar-link">Connexion</Link></li>
          <li><Link to="/user" className="navbar-link user-link"><FaUser /></Link></li>
        </ul>

        <nav className="secondary-navbar">
          <div className="secondary-navbar-links">
            <Link to="/chat" className="navbar-link"><FaComment /> Chat</Link>
            <Link to="/joindre-medecin" className="navbar-link"><FaPhoneAlt /> Joindre Médecin</Link>
            <Link to="/detection-anomalie" className="navbar-link"><FaExclamationCircle /> Détection Anomalie</Link>

            <div className="search-container">
              <input type="text" placeholder="Rechercher..." className="search-input" />
              <button className="search-btn">
                <FaSearch className="search-icon" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
