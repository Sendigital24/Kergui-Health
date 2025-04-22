import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import logo from "../components/assets/logo2.png";
import "./inscription.css";

const Inscription = () => {
  const [role, setRole] = useState("patient");
  const navigate = useNavigate(); // Hook pour la navigation

  const handleConnexion = () => {
    navigate("/connexion"); // Rediriger vers la page de connexion
  };

  return (
    <div className="inscription-container">
      <div className="inscription-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Inscription</h2>
        <form>
          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nom</label>
            <input type="text" placeholder="Entrez votre nom" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Entrez votre email" />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" placeholder="Choisissez un mot de passe" />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-inscription" onClick={handleConnexion}>
              Connexion
            </button>
            <button type="submit" className="btn-inscription">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
