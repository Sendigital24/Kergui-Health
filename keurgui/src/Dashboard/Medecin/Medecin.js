import React from "react";
import ListeConsultations from "./ListeConsultations"; // Assurez-vous que vous avez bien ce composant

const Medecin = () => {
  return (
    <div className="medecin">
      <h2>Dashboard du Médecin</h2>
      {/* Affichage de la liste des consultations */}
      <ListeConsultations />
    </div>
  );
};

export default Medecin;
