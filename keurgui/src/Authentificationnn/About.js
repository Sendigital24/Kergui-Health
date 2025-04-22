import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import logo from "../components/assets/logo2.png";
//import "./connexion.css";

const Connexion = () => {
  const [role, setRole] = useState("patient");
  const navigate = useNavigate(); // Hook pour la navigation

  const handleInscription = () => {
    navigate("/inscription"); // Rediriger vers la page d'inscription
  };

  return (
    <div className="connexion-container">
      <div className="connexion-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Connexion</h2>
        <form>
          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Entrez votre email" />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" placeholder="Entrez votre mot de passe" />
          </div>
          
        </form>

        {/* Conteneur des boutons "Se connecter" et "S'inscrire" */}
        <div className="button-container">
        <button className="btn-inscription" >
            Se connecter
          </button>
          <button className="btn-inscription" onClick={handleInscription}>
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
