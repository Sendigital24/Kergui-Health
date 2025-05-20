import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch, FaComment, FaPhoneAlt, FaExclamationCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ userIconRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState(""); // 👈 Nouveau

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.nom || user.name || ""); // adapte selon ta base de données
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="logo">
            <img src={require('./assets/logo.png')} alt="Logo" className="LOGO-img" />
          </li>
          <li><Link to="/accueil" className="navbar-link" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/rendezvous" className="navbar-link" onClick={closeMenu}>Rendez-vous</Link></li>
          <li><Link to="/consulter-medecin" className="navbar-link" onClick={closeMenu}>Consulter Médecin</Link></li>
          <li><Link to="/dme" className="navbar-link" onClick={closeMenu}>DME</Link></li>
          <li><Link to="/connexion" className="navbar-link" onClick={closeMenu}>Connexion</Link></li>
          <li><Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link></li>

          {/* Icône utilisateur avec nom */}
          <li className="user-icon" ref={userIconRef} onClick={openModal}>
            <FaUser style={{ color: 'white' }} />
            <span className="username" style={{ marginLeft: '5px', color: 'white',marginTop: '55px',fontSize: '15px' }}>{userName}</span>
          </li>
        </ul>

        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <nav className="secondary-navbar">
        <div className="secondary-navbar-links">
          <Link to="/chat" className="navbar-link" onClick={closeMenu}><FaComment /> Chat</Link>
          <Link to="/joindre-medecin" className="navbar-link" onClick={closeMenu}><FaPhoneAlt /> Joindre Médecin</Link>
          <Link to="/detection-anomalie" className="navbar-link" onClick={closeMenu}><FaExclamationCircle /> Détection Anomalie</Link>
          <div className="search-btn-container">
            <input type="text" placeholder="Rechercher..." className="search-input" />
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className='btns'>
              <button className='dcx'>Déconnexion</button>
              <button className='mdp'>Changer mot de passe</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
