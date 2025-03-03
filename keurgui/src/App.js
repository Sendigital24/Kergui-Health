import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil'; 
import Rendezvous from './components/Rendezvous';  
import ConsulterMedecin from './components/ConsulterMedecin'; 

import Footer from './components/Footer';  

function App() {
  return (
    <Router>
      <Accueil/>
      <Routes>
        {/**
        <Route path="/" element={<Accueil />} /> */}
        <Route path="/rendezvous" element={<Rendezvous />} />
        <Route path="/consulter-medecin" element={<ConsulterMedecin />} />
      </Routes>
      
    <Footer/>
    </Router>
  );
}

export default App;
