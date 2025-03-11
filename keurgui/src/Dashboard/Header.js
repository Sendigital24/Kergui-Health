import React, { useEffect, useState } from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import "./header.css"; // Import du fichier CSS

const Header = () => {
  const [text, setText] = useState(
    "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
  );
  
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour gérer l'ouverture du modal

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText ===
        "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
          ? "Explorez des consultations médicales en ligne rapides et sécurisées, directement depuis chez vous, avec Keurgui Health."
          : "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
      );
    }, 4000); // Le texte change toutes les 4 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  // Fonction pour ouvrir et fermer le modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="header">
      <div className="slider-container">
        <p className="slider-text">{text}</p>
      </div>
      <div className="user-icon">
        <FaUserCircle size={30} onClick={toggleModal} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              <FaTimes />
            </button>
            <div className="btns">
              <button className="dcx">Deconnexion</button>
              <button className="mdp">Changer mot de passe</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
