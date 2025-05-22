import React, { useState, useEffect } from "react";
import "./RendezvousList.css";

const RendezvousList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rendezvous");
        if (!response.ok) throw new Error("Erreur lors de la récupération");
        const data = await response.json();

        const formattedAppointments = data.map((rdv) => ({
          id: rdv.id,
          date: rdv.date,
          time: rdv.time,
          doctor: rdv.doctor || "Dr. Inconnu",
          status: rdv.status || "En attente",
          nom: rdv.nom,
          prenom: rdv.prenom,
          telephone: rdv.telephone,
        }));

        setAppointments(formattedAppointments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "red";
      case "En cours":
        return "blue";
      case "Terminé":
      case "Terminer":
        return "green";
      default:
        return "white";
    }
  };

  if (loading) return <p>Chargement des rendez-vous...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div
      className="rdv-container"
      style={{ width: "92%", background: "white", marginLeft: "66px", padding: "20px" }}
    >
      <h3>Rendez-vous des patients</h3>

      <table className="table">
        <thead>
          <tr className="table-light">
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Docteur</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {appointments.length > 0 ? (
    appointments.map((appointment, index) => (
      <tr key={appointment.id}>
        <td data-label="Nom">{appointment.nom}</td>
        <td data-label="Prénom">{appointment.prenom}</td>
        <td data-label="Téléphone">{appointment.telephone}</td>
        <td data-label="Date">{appointment.date}</td>
        <td data-label="Heure">{appointment.time}</td>
        <td data-label="Docteur">{appointment.doctor}</td>
        <td data-label="Status">{appointment.status}</td>
        <td data-label="Action" className="actions">
          <select
            value={appointment.status}
            onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
            style={{
              backgroundColor: getStatusColor(appointment.status),
              color: "white",
            }}
          >
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8">Aucun rendez-vous disponible</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default RendezvousList;
