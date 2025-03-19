import React, { useState } from 'react';
import './ConsulterMedecin.css';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ConsulterMedecin = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    medecinId: '',
    dateConsultation: '',
    motif: '',
    typeConsultation: 'Vidéo',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/consultations', { // Remplace cette route par ton endpoint réel
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage('Consultation enregistrée avec succès !');
      } else {
        setMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setMessage('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
   
    <div className="consultation-container">
      <h2>Consulter un Médecin</h2>
      <form onSubmit={handleSubmit} className="consultation-form">
        <label>Identifiant du Patient</label>
        <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} required />

        <label>Identifiant du Médecin</label>
        <input type="text" name="medecinId" value={formData.medecinId} onChange={handleChange} required />

        <label>Date de Consultation</label>
        <input type="datetime-local" name="dateConsultation" value={formData.dateConsultation} onChange={handleChange} required />

        <label>Motif</label>
        <textarea name="motif" value={formData.motif} onChange={handleChange} required></textarea>

        <label>Type de Consultation</label>
        <select name="typeConsultation" value={formData.typeConsultation} onChange={handleChange}>
          <option value="Vidéo">Vidéo</option>
          <option value="Présentiel">Présentiel</option>
          <option value="Chat">Chat</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Envoi en cours...' : 'Valider la Consultation'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </>
  );
};

export default ConsulterMedecin;
