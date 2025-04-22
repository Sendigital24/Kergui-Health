import React, { useEffect, useState } from "react";
import { FaUserCircle, FaBell, FaTimes } from "react-icons/fa"; 
import "./header.css"; // Import du fichier CSS

const Header = () => {
  const [text, setText] = useState(
    "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
  );
  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [notifications, setNotifications] = useState(3); 

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText ===
        "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
          ? "Explorez des consultations médicales en ligne rapides et sécurisées, directement depuis chez vous, avec Keurgui Health."
          : "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
      );
    }, 20000); 

    return () => clearInterval(interval); 
  }, []);

  // Fonction pour ouvrir et fermer le modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="header">
      <div className="slider-container-unique">
        <p className="slider-text">{text}</p>
      </div>

      {/* Icône de notification avec badge */}
      <div className="notification-icon">
        <FaBell size={30} />
        {notifications > 0 && (
          <span className="notification-badge">{notifications}</span> // Afficher le badge si il y a des notifications
        )}
      </div>

      {/* Icône utilisateur */}
      <div className="user-icon">
        <FaUserCircle size={30} onClick={toggleModal} />
      </div>

      {/* Modal */}
      {/*********{isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="btns">
              <button className="dcx">Deconnexion</button>
              <button className="mdp">Changer mot de passe</button>
            </div>
          </div>
        </div>
      )}****** */}
    </div>
  );
};

export default Header;
