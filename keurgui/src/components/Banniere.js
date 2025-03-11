import React, { useEffect, useState } from "react";
//import Service from './Service'; 
import "./Banniere.css"; // Import du fichier CSS

const Banniere = () => {
  const textes = [
    "Bienvenue à Keurgui-Health",
    "Welcome to Keurgui-Health",
    "Dalaal ak diam si Keurgui-Health",
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textes.length);
    }, 3000); // Intervalle réduit à 3 secondes pour un changement plus rapide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banniere-container">
      <div className="slider-container">
        <p className="slider-text">{textes[index]}</p>
      </div>
      
      {/* Placer le Service au bas de la bannière */}
      <div className="service-section mt-5">
        {/**<Service /> */}
      </div>
    </div>
  );
};

export default Banniere;
