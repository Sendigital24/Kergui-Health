import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./header.css"; // Import du fichier CSS

const Header = () => {
  const [text, setText] = useState(
    "Bienvenue dans Keurgui Health, votre plateforme de télémédecine innovante qui facilite l'accès aux soins à distance, partout et à tout moment."
  );

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

  return (
    <div className="header">
      <div className="slider-container">
        <p className="slider-text">{text}</p>
      </div>
      <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
