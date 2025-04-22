'use client';

import React, { useRef } from 'react';
import './JoindreMedecin.css';

function JoindreMedecin() {
  const jitsiContainerRef = useRef(null);

  const startCall = async () => {
    const roomName = 'medecin-session';

    try {
      // Envoie d'une requête POST au backend
      const response = await fetch('http://localhost:8000/api/video-call/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'CALL_STARTED',
          room: roomName,
        }),
      });

      if (!response.ok) {
        console.error('Erreur lors de la requête POST');
        return;
      }

      // Chargement dynamique du script Jitsi
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;

      script.onload = () => {
        new window.JitsiMeetExternalAPI('meet.jit.si', {
          roomName,
          width: '100%',
          height: 600,
          parentNode: jitsiContainerRef.current,
        });
      };

      script.onerror = () => {
        console.error('Échec du chargement du script Jitsi.');
      };

      document.body.appendChild(script);
    } catch (error) {
      console.error('Erreur côté front :', error.message);
    }
  };

  return (
    <div className="join-container">
      <h2>Joindre un médecin en appel vidéo</h2>
      <button onClick={startCall}>Commencer l'appel</button>
      <div ref={jitsiContainerRef} className="jitsi-container"></div>
    </div>
  );
}

export default JoindreMedecin;
