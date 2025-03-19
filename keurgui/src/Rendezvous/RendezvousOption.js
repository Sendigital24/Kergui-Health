import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaArrowDown } from "react-icons/fa";

const RendezvousOption = ({ title, appointments, onSelectDate, onCancel, selectedDate }) => {
  const [date, setDate] = useState(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const doctors = ["Dr. Dupont", "Dr. Martin", "Dr. Bernard"];

  const handleDoctorSelection = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // Section "Prendre un rendez-vous"
  if (title === "Prendre un rendez-vous") {
    return (
      <div className="rendezvous-option">
        <h3>{title} <FaArrowDown /></h3>
        <p>Veuillez sélectionner une date et un médecin dans votre agenda.</p>
        <select onChange={handleDoctorSelection}>
          <option value="">Sélectionner un médecin</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
        <Calendar onChange={onSelectDate} value={date} />
        {selectedDate && <p>Date sélectionnée : {selectedDate.toLocaleDateString()}</p>}
      </div>
    );
  }

  // Section "Mon agenda"
  if (title === "Mon agenda") {
    return (
      <div className="rendezvous-option">
        <h3>{title}</h3>
        <Calendar onChange={onSelectDate} value={date} />
        {selectedDate && <p>Date sélectionnée : {selectedDate.toLocaleDateString()}</p>}
      </div>
    );
  }

  // Section "Annuler ou reprogrammer un rendez-vous"
  if (title === "Annuler ou reprogrammer un rendez-vous") {
    return (
      <div className="rendezvous-option">
        <h3>{title}</h3>
        {appointments.length === 0 ? (
          <p>Aucun rendez-vous disponible.</p>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                {appointment.title} - {appointment.date} à {appointment.time}
                <button className="cancel-btn" onClick={() => onCancel(appointment.id)}>Annuler</button>
                <button className="reschedule-btn">Reprogrammer</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // Sections "Rendez-vous d’urgence" et "Rendez-vous avec l'IA"
  if (title === "Rendez-vous d’urgence" || title === "Rendez-vous avec l'IA (Triage automatique)") {
    return (
      <div className="rendezvous-option">
        <h3>{title}</h3>
        <select>
          <option value="">Sélectionner un type de rendez-vous</option>
          <option value="urgence">Rendez-vous d’urgence</option>
          <option value="triage">Rendez-vous avec l'IA</option>
        </select>
      </div>
    );
  }

  return <div className="rendezvous-option">{title}</div>;
};

export default RendezvousOption;
