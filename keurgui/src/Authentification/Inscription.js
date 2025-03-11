import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import logo from "../components/assets/logo2.png";
import "./inscription.css";

const Inscription = () => {
  const [role, setRole] = useState("patient");
  const [nom, setNom] = useState(""); // État pour le nom
  const [email, setEmail] = useState(""); // État pour l'email
  const [motDePasse, setMotDePasse] = useState(""); // État pour le mot de passe
  const [message, setMessage] = useState(""); // État pour le message de succès ou d'erreur
  const navigate = useNavigate(); // Hook pour la navigation

  const handleConnexion = () => {
    navigate("/connexion"); // Rediriger vers la page de connexion
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Prépare les données à envoyer à l'API
    const data = {
      role,
      nom,
      email,
      motDePasse,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/inscription/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Envoie les données sous forme JSON
      });

      if (response.ok) {
        // Si l'inscription réussit, afficher un message de succès
        setMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        // Rediriger l'utilisateur après quelques secondes
        setTimeout(() => navigate("/connexion"), 2000); // Redirige après 2 secondes
      } else {
        // Si l'inscription échoue, afficher un message d'erreur
        setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="inscription-container">
      <div className="inscription-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Inscription</h2>
        <form onSubmit={handleSubmit}> {/* Lier handleSubmit au formulaire */}
          <div className="form-group">
            <label>Rôle</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)} // Met à jour l'état
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Choisissez un mot de passe"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)} // Met à jour l'état
            />
          </div>

          <div className="form-actions">
          <button type="submit" className="btn-connexion">
  Se connecter
</button>

            <button type="submit" className="btn-inscription">
              S'inscrire
            </button>
          </div>
        </form>

        {/* Affichage du message de succès ou d'erreur */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Inscription;
