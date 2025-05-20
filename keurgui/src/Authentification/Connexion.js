import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/assets/logo2.png";
import "./connexion.css";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // stocker le user
  const [showValidationButton, setShowValidationButton] = useState(false); // état pour le bouton Valider
  const navigate = useNavigate();

  const handleConnexion = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user); // stocker le user

        if (data.user.role === "patient") {
          alert("Connexion réussie en tant que patient !");
          navigate("/accueil");
        } else if (data.user.role === "medecin") {
          alert("Connexion réussie en tant que médecin !");
          setShowValidationButton(true); // afficher bouton "Valider"
        }
      } else {
        setError("Échec de la connexion. Vérifiez vos identifiants.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError("Une erreur est survenue. Réessayez plus tard.");
    }
  };

  const handleValidation = () => {
    // Tu peux ajouter ici une vérification ou un appel si nécessaire
    navigate("/dashboard");
  };

  return (
    <div className="connexion-container">
      <div className="connexion-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <h2 className="titre">Connexion</h2>
        {error && <div className="error-message">{error}</div>}
        {!showValidationButton ? (
          <form onSubmit={handleConnexion}>
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
        ) : (
          <div className="validation-container">
            <p>Bienvenue Dr. {user?.nom} !</p>
            <button
              onClick={handleValidation}
              className="btn-connexion"
              style={{ marginTop: "20px" }}
            >
              Valider pour accéder au Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connexion;
