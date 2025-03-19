import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoindreMedecin.css'; 

function JoindreMedecin() {
  const jitsiContainerRef = useRef(null);
  const navigate = useNavigate();
  const socket = useRef(null); // Référence du WebSocket

  useEffect(() => {
    // Créer une connexion WebSocket
    socket.current = new WebSocket('ws://localhost:8000/ws/video-call/medecin-session/');
    
    // Quand la connexion WebSocket est ouverte
    socket.current.onopen = () => {
      console.log('WebSocket connecté');
    };

    // Quand le serveur envoie un message
    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'CALL_STARTED') {
        // Vous pouvez ici afficher la notification ou rediriger
        alert(`Un patient vous attend dans la salle ${data.room}`);
      }
    };

    // Quand WebSocket est fermé
    return () => {
      socket.current.close();
    };
  }, []);

  const startCall = () => {
    const roomName = 'medecin-session';
    
    // Envoyer un message pour informer le backend qu'un appel a commencé
    socket.current.send(JSON.stringify({
      type: 'CALL_STARTED',
      room: roomName,
    }));

    // Lancer l'appel vidéo
    const script = document.createElement('script');
    script.src = `https://meet.jit.si/external_api.js`;
    script.async = true;
    script.onload = () => {
      new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: roomName,
        width: '100%',
        height: '100%',
        parentNode: jitsiContainerRef.current,
      });
    };
    document.body.appendChild(script);
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
