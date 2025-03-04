import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch, FaComment, FaPhoneAlt, FaExclamationCircle } from 'react-icons/fa';
import Palette from './Palette';
import './Accueil.css';

function Accueil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Blanc par défaut

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="accueil-container" style={{ backgroundColor: backgroundColor, color: backgroundColor === '#000000' ? '#FFFFFF' : '#000000' }}>
      {/* Palette de couleurs */}
      <Palette onColorChange={setBackgroundColor} />

      {/* Navbar principale */}
      <nav className="navbar">
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="logo">
            <img src={require('./assets/logo.png')} alt="Logo" className="LOGO-img" />
          </li>
          <li><Link to="/accueil" className="navbar-link">Accueil</Link></li>
          <li><Link to="/rendezvous" className="navbar-link">Rendez-vous</Link></li>
          <li><Link to="/consulter-medecin" className="navbar-link">Consulter Médecin</Link></li>
          <li><Link to="/dme" className="navbar-link">DME</Link></li>
          <li><Link to="/connexion" className="navbar-link">Connexion</Link></li>
          <li><Link to="/user" className="navbar-link user-link"><FaUser /></Link></li>
        </ul>

        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu secondaire */}
      <nav className="secondary-navbar">
        <div className="secondary-navbar-links">
          <Link to="/chat" className="navbar-link"><FaComment /> Chat</Link>
          <Link to="/joindre-medecin" className="navbar-link"><FaPhoneAlt /> Joindre Médecin</Link>
          <Link to="/detection-anomalie" className="navbar-link"><FaExclamationCircle /> Détection Anomalie</Link>

          <div className="search-btn-container">
            <input type="text" placeholder="Rechercher..." className="search-input"/>
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu après sélection de couleur */}
      
    </div>
  );
}

export default Accueil;
