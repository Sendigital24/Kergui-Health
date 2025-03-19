import React, { useState } from "react";
import "./RendezvousList.css";

const RendezvousList = () => {
  // Exemple de rendez-vous pour tester
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-03-15",
      time: "14:00",
      doctor: "Dr. Modou Fall",
      status: "En attente", // Ajouter un status initial
    },
    {
      id: 2,
      date: "2025-03-16",
      time: "09:00",
      doctor: "Dr. Aissatou Ndiaye",
      status: "En cours", // Ajouter un status initial
    },
  ]);

  // Fonction pour mettre à jour le statut
  const handleStatusChange = (id, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  // Fonction pour définir la couleur de fond du select
  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "red"; // Fond rouge
      case "En cours":
        return "blue"; // Fond bleu
      case "Terminé":
        return "green"; // Fond vert
      default:
        return "white";
    }
  };

  return (
    <div className="rdv-container" style={{ width: "92%", background: "white", marginLeft: "66px", padding: "20px" }}>
      <h3>Rendez-vous des patients</h3>

      <table className="table">
        <thead>
          <tr className="table-light">
            <th>Date</th>
            <th>Heure</th>
            <th>Docteur</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <tr key={appointment.id} className={index % 2 === 0 ? "table-white" : "table-secondary"}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.status}</td> {/* Afficher le statut */}
                <td className="actions">
                  <select
                    value={appointment.status}
                    onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                    style={{
                      backgroundColor: getStatusColor(appointment.status), // Appliquer la couleur en fonction du statut
                      color: "white", // Texte blanc pour contraster avec le fond
                    }}
                  >
                    <option value="En attente" style={{ backgroundColor: "red" }}>
                      En attente
                    </option>
                    <option value="En cours" style={{ backgroundColor: "blue" }}>
                      En cours
                    </option>
                    <option value="Terminé" style={{ backgroundColor: "green" }}>
                      Terminé
                    </option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Aucun rendez-vous disponible</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RendezvousList;
