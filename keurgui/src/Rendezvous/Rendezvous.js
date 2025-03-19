import React, { useState, useEffect } from "react";
import RendezvousOption from "./RendezvousOption";
import "./Rendezvous.css";  // Import du fichier CSS

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Rendezvous = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  // Cette fonction simule la récupération des données depuis un endpoint
  useEffect(() => {
    setTimeout(() => {
      setAppointments([
        { id: 1, title: "Consultation avec Dr. Dupont", date: "2025-03-20", time: "14:00" },
        
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Fonction qui gère la sélection de la date
  const handleSelectDate = (date) => {
    setSelectedDate(date);
    console.log("Date sélectionnée :", date);
  };

  // Fonction pour annuler un rendez-vous
  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <> 
    <Navbar/>
    <div className="rendezvous-container">
      <h1>Rendez-vous</h1>
      <div className="menu">
        {/* Prendre un rendez-vous */}
        <RendezvousOption 
          title="Prendre un rendez-vous" 
          onSelectDate={handleSelectDate} 
          selectedDate={selectedDate} 
        />

        {/* Annuler ou reprogrammer un rendez-vous */}
        <RendezvousOption 
          title="Annuler ou reprogrammer un rendez-vous" 
          appointments={appointments} 
          onCancel={handleCancelAppointment} 
        />

        {/* Rendez-vous d’urgence et IA */}
        <RendezvousOption title="Rendez-vous d’urgence" />
        <RendezvousOption title="Rendez-vous avec l'IA (Triage automatique)" />

      </div>
      <button className="validate-btn" onClick={() => console.log("Rendez-vous validé pour", selectedDate)}>
    Valider le rendez-vous
    
  </button>
    </div>
    <Footer/>
    </>
  );
};

export default Rendezvous;
