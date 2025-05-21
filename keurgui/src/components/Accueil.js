// keurgui/src/components/Accueil.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Palette from './Palette';
import Banniere from './Banniere';
import Temoignage from './Temoignage';
import Footer from './Footer';
import PaiementQRCode from './PaiementQRCode';
import Chatbot from './Chatbot'; // ✅ import par défaut sans accolades
import Service from './Service';
import './Accueil.css';

function Accueil() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  return (
    <div
      className="accueil-container"
      style={{
        backgroundColor,
        color: backgroundColor === '#000000' ? '#FFFFFF' : '#000000'
      }}
    >
      <Palette onColorChange={setBackgroundColor} />
      <Navbar />
      <Banniere />
      <Service />
      <Temoignage />
      <PaiementQRCode />
      <Chatbot /> {/* ✅ ici */}
      <Footer />
    </div>
  );
}

export default Accueil;
