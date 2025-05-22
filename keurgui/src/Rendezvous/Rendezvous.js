// src/Rendezvous.js
"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNotification } from "../Contexts/NotificationContext";

const Rendezvous = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    doctor: "",
    date: new Date(),
    time: "",
    typeRdv: "",
  });

  const { addNotification } = useNotification();
  const doctors = ["Dr. Diop", "Dr. Fall", "Dr. Bernard", "Dr. Sow"];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (
      !formData.prenom ||
      !formData.nom ||
      !formData.telephone ||
      !formData.doctor ||
      !formData.date ||
      !formData.time
    ) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    const appointmentData = {
      title: "Consultation générale",
      date: formData.date.toISOString().split("T")[0],
      time: formData.time,
      doctor: formData.doctor,
      urgence: formData.typeRdv === "Rendez-vous d’urgence",
      nom: formData.nom,
      prenom: formData.prenom,
      telephone: formData.telephone,
    };

    try {
      const response = await fetch("http://localhost:3000/api/rendezvous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Rendez-vous confirmé !");

        // ➕ Ajouter notification
        addNotification({
          message: `${formData.prenom} ${formData.nom} a pris un rendez-vous avec ${formData.doctor} à ${formData.time}`,
          date: new Date().toLocaleString(),
        });

        setFormData({
          prenom: "",
          nom: "",
          telephone: "",
          doctor: "",
          date: new Date(),
          time: "",
          typeRdv: "",
        });
      } else {
        alert("Erreur lors de l'envoi du rendez-vous.");
      }
    } catch (error) {
      alert("Erreur réseau : " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Prendre un rendez-vous</h2>

      {/* Form inputs... (inchangé) */}
      <input
        type="text"
        placeholder="Prénom"
        className="block w-full mb-2 p-2 border rounded"
        value={formData.prenom}
        onChange={(e) => handleChange("prenom", e.target.value)}
      />

      <input
        type="text"
        placeholder="Nom"
        className="block w-full mb-2 p-2 border rounded"
        value={formData.nom}
        onChange={(e) => handleChange("nom", e.target.value)}
      />

      <input
        type="tel"
        placeholder="Téléphone"
        className="block w-full mb-2 p-2 border rounded"
        value={formData.telephone}
        onChange={(e) => handleChange("telephone", e.target.value)}
      />

      <select
        className="block w-full mb-2 p-2 border rounded"
        value={formData.doctor}
        onChange={(e) => handleChange("doctor", e.target.value)}
      >
        <option value="">Sélectionner un médecin</option>
        {doctors.map((doc, i) => (
          <option key={i} value={doc}>
            {doc}
          </option>
        ))}
      </select>

      <label className="block mb-1 font-semibold">Choisir une date :</label>
      <Calendar
        onChange={(date) => handleChange("date", date)}
        value={formData.date}
        className="mb-4"
      />

      <label className="block mb-1 font-semibold">Heure du rendez-vous :</label>
      <input
        type="time"
        className="block w-full mb-4 p-2 border rounded"
        value={formData.time}
        onChange={(e) => handleChange("time", e.target.value)}
      />

      <label className="block mb-2 font-semibold">Type de rendez-vous :</label>
      <select
        className="block w-full mb-4 p-2 border rounded"
        value={formData.typeRdv}
        onChange={(e) => handleChange("typeRdv", e.target.value)}
      >
        <option value="">-- Sélectionnez une option --</option>
        <option value="Rendez-vous d’urgence">Rendez-vous d’urgence</option>
        <option value="Rendez-vous avec l'IA (Triage automatique)">
          Rendez-vous avec l'IA (Triage automatique)
        </option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Confirmer le rendez-vous
      </button>
    </div>
  );
};

export default Rendezvous;
