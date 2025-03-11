import React from 'react';
import { Bar } from 'react-chartjs-2'; // Si tu utilises Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MaladiesChart = () => {
  // Exemple de données pour le graphique en barre
  const dataMaladies = {
    labels: ['Diabète', 'Cancer', 'Hypertension', 'Asthme', 'Obésité'], // Maladies
    datasets: [
      {
        label: 'Nombre de Cas', // Légende de la barre
        data: [150, 120, 200, 80, 170], // Nombre de cas pour chaque maladie
        backgroundColor: [
          'rgba(255,99,132,0.6)',  // Diabète
          'rgba(54,162,235,0.6)',  // Cancer
          'rgba(75,192,192,0.6)',  // Hypertension
          'rgba(153,102,255,0.6)', // Asthme
          'rgba(255,159,64,0.6)',  // Obésité
        ],
        borderColor: [
          'rgba(255,99,132,1)', 
          'rgba(54,162,235,1)', 
          'rgba(75,192,192,1)', 
          'rgba(153,102,255,1)', 
          'rgba(255,159,64,1)', 
        ],
        borderWidth: 1, // Épaisseur des bordures des barres
      },
    ],
  };

  // Configuration du graphique
  const optionsMaladies = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Nombre de Cas par Maladie',
      },
      legend: {
        display: true,
        position: 'bottom', // La légende sera en bas
        labels: {
          font: {
            size: 14,
            family: 'Arial',
          },
          padding: 15, // Espacement entre les éléments de la légende
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // L'axe Y commence à zéro
      },
    },
  };

  return (
    
    <div>
              <Bar data={dataMaladies} options={optionsMaladies} />
      <h3>Diagramme des Cas par Maladie</h3>
      <p>Ce graphique représente le nombre de cas pour différentes maladies.</p>

      {/* Affichage du graphique en barre */}

    </div>
  );
};

export default MaladiesChart;
