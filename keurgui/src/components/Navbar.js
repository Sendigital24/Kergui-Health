import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa'; // Exemple d'icônes

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between bg-blue-500 text-white">
        <li>
          <Link to="/" className="flex items-center">
            <FaHome /> Kergui
          </Link>
        </li>
        <li>
          <Link to="/rendezvous" className="flex items-center">
            <FaCalendarAlt /> Rendez-vous
          </Link>
        </li>
        <li>
          <Link to="/consulter-medecin" className="flex items-center">
            <FaUser /> Consulter médecin
          </Link>
        </li>
        {/* Ajoute plus de liens ici */}
        <li>
          <Link to="/login" className="flex items-center">
            <FaUser /> Connexion
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
