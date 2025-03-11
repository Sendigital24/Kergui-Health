import React, { useState } from 'react';
import Navbar from './Navbar';
import Palette from './Palette';
import Banniere from './Banniere';
import Temoignage from './Temoignage'; 
import './Accueil.css';
import Footer from './Footer';

import Service from './Service';
function Accueil() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  return (
    <div className="accueil-container" style={{ backgroundColor, color: backgroundColor === '#000000' ? '#FFFFFF' : '#000000' }}>
      <Palette onColorChange={setBackgroundColor} />
      <Navbar />
      <Banniere />
<Service/>
      <Temoignage /> 
      <Footer />
    </div>
  );
}

export default Accueil;
