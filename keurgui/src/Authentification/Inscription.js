import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import logo from "../components/assets/logo2.png";
import "./inscription.css";

const Inscription = () => {
  const [role, setRole] = useState("patient");
  const [nom, setNom] = useState(""); // État pour le nom
  const [prenom, setPrenom] = useState(""); // État pour le prénom
  const [email, setEmail] = useState(""); // État pour l'email
  const [password, setPassword] = useState(""); // Changement de motDePasse à password
  const [message, setMessage] = useState(""); // État pour le message de succès ou d'erreur
  const [forgotPassword, setForgotPassword] = useState(""); // Pour la récupération de mot de passe
  const [resetPassword, setResetPassword] = useState(""); // Pour la réinitialisation du mot de passe
  const navigate = useNavigate(); // Hook pour la navigation

  const handleConnexion = () => {
    navigate("/connexion"); // Rediriger vers la page de connexion
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage("Veuillez entrer votre email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json(); // Attente de la réponse JSON

      if (response.ok) {
        setMessage("Un email avec un nouveau mot de passe a été envoyé.");
      } else {
        setMessage(result.message || "Erreur lors de la récupération du mot de passe.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du mot de passe:", error);
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérification des champs (ajoute des validations si nécessaire)
    if (!nom || !prenom || !email || !password) {
      setMessage("Tous les champs sont obligatoires.");
      return;
    }

    // Prépare les données à envoyer à l'API
    const data = {
      role,
      nom,
      prenom,
      email,
      password, // Utilise le bon nom de champ
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Envoie les données sous forme JSON
      });

      const result = await response.json(); // Attente de la réponse JSON

      console.log(result); // Affiche la réponse du backend pour le débogage

      if (response.ok) {
        // Si l'inscription réussit, afficher un message de succès
        setMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        // Rediriger l'utilisateur après quelques secondes
        setTimeout(() => navigate("/connexion"), 2000); // Redirige après 2 secondes
      } else {
        // Si l'inscription échoue, afficher un message d'erreur
        setMessage(result.message || "Erreur lors de l'inscription. Veuillez réessayer.");
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
            <label>Prénom</label>
            <input
              type="text"
              placeholder="Entrez votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)} // Met à jour l'état
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
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Met à jour l'état
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

        <div className="forgot-password">
          <h3>Mot de passe oublié ?</h3>
          <input
            type="email"
            placeholder="Entrez votre email"
            value={forgotPassword}
            onChange={(e) => setForgotPassword(e.target.value)}
          />
          <button onClick={handleForgotPassword}>Réinitialiser le mot de passe</button>
        </div>

        {/* Affichage du message de succès ou d'erreur */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Inscription;
