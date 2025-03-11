import React, { useState } from 'react';
import './Service.css'; // Assurez-vous de créer le fichier CSS pour les styles
import { FaVideo, FaRobot, FaUserMd } from 'react-icons/fa'; // Importation des icônes

function Service() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Vision",
      icon: <FaUserMd />,
      description: "Notre vision est d'améliorer la qualité des consultations à distance, avec une expérience fluide et sécurisée.",
    },
    {
      title: "Valeur",
      icon: <FaRobot />,
      description: "Nos valeurs incluent l'innovation et l'accessibilité grâce à l'intégration de l'intelligence artificielle pour des consultations optimisées.",
    },
    {
      title: "Mission",
      icon: <FaVideo />,
      description: "Notre mission est de fournir une solution de consultations à distance, avec chat et vidéo, pour permettre une meilleure prise en charge des patients.",
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveService(index);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-card ${activeService === index ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-title">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
          {activeService === index && (
            <div className="card-content">
              <p>{service.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Service;
