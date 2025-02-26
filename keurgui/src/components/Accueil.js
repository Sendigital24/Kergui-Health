import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch, FaComment, FaPhoneAlt, FaExclamationCircle } from 'react-icons/fa';
import './Accueil.css';

function Accueil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverser l'état du menu
  };

  return (
    <div className="accueil-container">
      {/* Menu principal (en desktop) */}
      <nav className="navbar">
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="logo">
            <img src={require('./assets/logo1.png')} alt="Logo" className="logo-img" />
          </li>
          <li><Link to="/accueil" className="navbar-link">Accueil</Link></li>
          <li><Link to="/rendezvous" className="navbar-link">Rendez-vous</Link></li>
          <li><Link to="/consulter-medecin" className="navbar-link">Consulter Médecin</Link></li>
          <li><Link to="/dme" className="navbar-link">DME</Link></li>
          <li><Link to="/connexion" className="navbar-link">Connexion</Link></li>
          <li><Link to="/user" className="navbar-link user-link"><FaUser /></Link></li>
        </ul>

        {/* Bouton hamburger */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu secondaire (footer, etc.) */}
      <nav className="secondary-navbar">
        <div className="secondary-navbar-links">
          <Link to="/chat" className="navbar-link"><FaComment /> Chat</Link>
          <Link to="/joindre-medecin" className="navbar-link"><FaPhoneAlt /> Joindre Médecin</Link>
          <Link to="/detection-anomalie" className="navbar-link"><FaExclamationCircle /> Détection Anomalie</Link>

          {/* Barre de recherche avec icône dedans */}
          <div className="search-btn-container">
            <input type="text" placeholder="Rechercher..." className="search-input"/>
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Accueil;
