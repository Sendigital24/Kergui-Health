import React from "react";
import Navbar from "../components/Navbar";  // Chemin d'importation correct
import Footer from "../components/Footer";  // Chemin d'importation correct

function About() {
  return (
    <div className="about-container">
      <Navbar />  {/* Affiche Navbar */}
      <h1>À propos de nous</h1>
      <p>Nous sommes une plateforme qui offre des consultations à distance...</p>
      <Footer />  {/* Affiche Footer */}
    </div>
  );
}

export default About;
