import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/assets/logo2.png";
import "./inscription.css";

const Inscription = () => {
  const [role, setRole] = useState("patient");
  const [name, setName] = useState(""); // champ unique name (nom complet)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleConnexion = () => {
    navigate("/connexion");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const data = {
      role,
      name,     // ici on envoie 'name' directement
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Inscription réussie ! Vous allez être redirigé vers la connexion.");
        navigate("/connexion");
      } else {
        alert(result.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      alert("Erreur réseau, veuillez réessayer.");
      console.error(error);
    }
  };

  return (
    <div className="inscription-container">
      <div className="inscription-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Entrez votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Choisissez un mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleConnexion} className="btn-connexion">
              Se connecter
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
