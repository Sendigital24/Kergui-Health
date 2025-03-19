import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../components/assets/logo2.png"; 
import "./connexion.css"; 

const Connexion = () => {
  const [role, setRole] = useState("patient"); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 

  const handleConnexion = async (e) => {
    e.preventDefault();

    try {
      // Envoi de la requête de connexion à l'API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }), 
      });

      const data = await response.json();

      if (response.ok) {
        // Vérifie le rôle et redirige
        if (data.user.role === "patient") {
          navigate("/accueil"); 
        } else if (data.user.role === "medecin") {
          navigate("/dashboard"); 
        }
      } else {
        alert("Échec de la connexion. Vérifiez vos identifiants.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Une erreur est survenue. Réessayez plus tard.");
    }
  };

  return (
    <div className="connexion-container">
      <div className="connexion-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Connexion</h2>
        <form onSubmit={handleConnexion}>
          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="/mot-de-passe-oublie" className="link-forgot">
              Mot de passe oublié ?
            </a>
          </div>

          <div className="button-container">
            <button type="submit" className="btn-connexion">
              Se connecter
            </button>
            <button
              type="button"
              className="btn-inscription"
              onClick={() => navigate("/inscription")}
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
