import React, { useState, useEffect } from 'react';
import { FaPalette, FaSun, FaMoon } from 'react-icons/fa'; 
import './Palette.css';

// Tableau de 15 couleurs
const colors = [
  '#000000', '#FFFFFF', '#28A745', '#00FF00', '#007BFF', '#DC3545', '#FF5733',
  '#900C3F', '#C70039', '#581845', '#FFC300', '#FF5733', '#DAF7A6', '#FF6F61', '#7D3C98',
  '#212529', '#343A40', '#495057', '#6C757D', '#868E96', '#ADB5BD', '#CED4DA', '#E1E4E8', '#F1F3F5'  
];

function Palette({ onColorChange }) {
  const [isPaletteVisible, setIsPaletteVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour savoir si le mode sombre est activé

  // Fonction pour changer la visibilité de la palette
  const togglePalette = () => {
    setIsPaletteVisible(!isPaletteVisible);
  };

  // Fonction pour basculer entre le mode sombre et ensoleillé
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Appliquer le mode sombre/ensoleillé au body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="palette-container">
      {/* Icône de palette avec fond dégradé */}
      <FaPalette 
        className="palette-icon" 
        onClick={togglePalette} 
        style={{
          background: 'linear-gradient(to right, #FF7F50, #FF6347)', 
          padding: '0.5rem',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      />

      {/* Icône de changement de mode (ensoleillé/sombre) 
      <div className="mode-toggle" onClick={toggleMode}>
        {isDarkMode ? (
          <FaSun className="mode-icon" style={{ color: '#FFD700' }} /> // Icône soleil pour le mode sombre
        ) : (
          <FaMoon className="mode-icon" style={{ color: '#4B0082' }} /> // Icône lune pour le mode ensoleillé
        )}
      </div>*/}

      {/* Palette affichée si isPaletteVisible est vrai */}
      {isPaletteVisible && (
        <div className="palette-colors">
          {colors.map((color) => (
            <button 
              key={color} 
              className="palette-color" 
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Palette;
