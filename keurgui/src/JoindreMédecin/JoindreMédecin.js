import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoindreMedecin.css'; // Assurez-vous d'avoir ce fichier CSS pour le style.

function JoindreMedecin() {
  const jitsiContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Vous pouvez remplacer par votre propre URL de réunion Jitsi Meet
    const domain = 'meet.jit.si';
    const roomName = 'medecin-session-' + Math.random().toString(36).substring(7);
    const options = {
      roomName: roomName,
      width: '100%',
      height: '100%',
      parentNode: jitsiContainerRef.current,
      configOverwrite: {
        prejoinPageEnabled: false,
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
      },
    };

    const script = document.createElement('script');
    script.src = `https://${domain}/external_api.js`;
    script.async = true;
    script.onload = () => {
      new window.JitsiMeetExternalAPI(domain, options);
    };
    document.body.appendChild(script);

    return () => {
      // Clean-up when the component is unmounted
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.remove();
      }
    };
  }, []);

  return (
    <div className="join-container">
      <h2>Joindre un médecin en appel vidéo</h2>
      <div ref={jitsiContainerRef} className="jitsi-container"></div>
    </div>
  );
}

export default JoindreMedecin;
