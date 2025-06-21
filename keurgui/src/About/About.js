import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../components/assets/logo2.png";
import senImage from "../components/assets/sen.png";
import inoImage from "../components/assets/ino.jpg";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-text">
              <h3>Création de Sendigital</h3>
              <p>Fondée avec la vision de révolutionner l'informatique et l'IA.</p>
            </div>
            <div className="timeline-dot">
              <img src={senImage} alt="Création de Sendigital" />
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-text">
              <h3>Lancement de KËRGUI Health</h3>
              <p>Une plateforme innovante de télémédecine intégrant IA et consultations à distance.</p>
            </div>
            <div className="timeline-dot">
              <img src={logo} alt="KËRGUI Health" />
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-text">
              <h3>Expansion et Innovation</h3>
              <p>Développement de nouvelles fonctionnalités basées sur l'IA.</p>
            </div>
            <div className="timeline-dot">
              <img src={inoImage} alt="Expansion et Innovation" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="about-description">
          <div className="about-header">
            <img src={logo} alt="Sendigital Logo" className="about-logo" />
            <h2>À propos de Sendigital</h2>
          </div>
          <p>
            Sendigital est une entreprise spécialisée dans l'informatique et l'intelligence artificielle.
            Nous avons développé la plateforme <strong>KËRGUI Health</strong>, une solution innovante qui
            révolutionne la télémédecine en intégrant la consultation vidéo, le chat en temps réel,
            l'analyse des symptômes et la détection d'anomalies médicales via l'IA.
          </p>
          <p>
            Grâce à une architecture moderne utilisant React, Node Js , Mysql et des microservices
            basés sur Docker et Kubernetes, nous assurons une plateforme fiable, évolutive et sécurisée.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
