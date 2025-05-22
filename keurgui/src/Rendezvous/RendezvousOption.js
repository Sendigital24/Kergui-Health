"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaArrowDown } from "react-icons/fa";

const RendezvousOption = ({
  title,
  formData = {},
  onChange,
  appointments,
  onCancel,
}) => {
  const doctors = ["Dr. Diop", "Dr. Fall", "Dr. Bernard", "Dr. Sow"];

  if (title === "Prendre un rendez-vous") {
    return (
      <div className="rendezvous-option p-4 border rounded shadow mb-4">
        <h3 className="text-xl font-bold mb-2">
          {title} <FaArrowDown className="inline ml-2" />
        </h3>
        <p className="mb-4">Veuillez remplir les informations suivantes :</p>

        <input
          type="text"
          placeholder="Prénom"
          className="block w-full mb-2 p-2 border rounded"
          value={formData.prenom || ""}
          onChange={(e) => onChange("prenom", e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom"
          className="block w-full mb-2 p-2 border rounded"
          value={formData.nom || ""}
          onChange={(e) => onChange("nom", e.target.value)}
        />
        <input
          type="tel"
          placeholder="Téléphone"
          className="block w-full mb-2 p-2 border rounded"
          value={formData.telephone || ""}
          onChange={(e) => onChange("telephone", e.target.value)}
        />

        <select
          className="block w-full mb-2 p-2 border rounded"
          value={formData.doctor || ""}
          onChange={(e) => onChange("doctor", e.target.value)}
        >
          <option value="">Sélectionner un médecin</option>
          {doctors.map((doctor, i) => (
            <option key={i} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>

        <label className="block mb-1 font-semibold">Choisir une date :</label>
        <Calendar
          onChange={(date) => onChange("date", date)}
          value={formData.date || new Date()}
          className="mb-4"
        />

        <label className="block mb-1 font-semibold">Heure du rendez-vous :</label>
        <input
          type="time"
          className="block w-full mb-4 p-2 border rounded"
          value={formData.time || ""}
          onChange={(e) => onChange("time", e.target.value)}
        />
      </div>
    );
  }

  if (title === "Annuler ou reprogrammer un rendez-vous") {
    if (!appointments || appointments.length === 0)
      return <p>Aucun rendez-vous trouvé.</p>;

    return (
      <div className="rendezvous-option p-4 border rounded shadow mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <ul>
          {appointments.map((a) => (
            <li key={a.id} className="mb-2 flex justify-between items-center">
              <span>
                {a.title} - {a.date} à {a.time}
              </span>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                onClick={() => onCancel && onCancel(a.id)}
              >
                Annuler
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Pour les autres sections, on peut afficher un message ou un futur formulaire
  return (
    <div className="rendezvous-option p-4 border rounded shadow mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>Cette section sera bientôt disponible.</p>
    </div>
  );
};

export default RendezvousOption;
