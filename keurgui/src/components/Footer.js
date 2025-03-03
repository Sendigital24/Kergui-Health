import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo et Nom Kergui à gauche */}
        <div className="logo-section">
        <img src={require('./assets/logo.png')} alt="Logo" className="logo-img" />
       
          <p className="logo-name">Kergui</p>
        </div>

        {/* Section Newsletter au centre */}
        <div className="newsletter-section">
          <h2>Abonnez-vous à notre Newsletter</h2>
          <p>Recevez les dernières actualités et mises à jour directement dans votre boîte de réception.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Entrez votre email" required />
            <button type="submit">S'abonner</button>
          </form>
          <p>&copy; 2025 Kergui Health. Tous droits réservés.</p>
          <p><a href="mailto:kergui@sendigital.com">kergui@sendigital.com</a></p>
        </div>

        {/* Icônes des réseaux sociaux à droite */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sendigital-ia-0b6450290/" target="_blank" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Sendigital24/Kergui-Health/tree/main/keurgui" target="_blank" className="social-link">
            <FaGithub size={30} />
          </a>
          <a href="https://wa.me/221784915629" target="_blank" className="social-link">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
