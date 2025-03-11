import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import MedecinConsultationChart from './MedecinConsultationChart';
import './ConsultationChart.css';

// Enregistrer les composants nécessaires
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ConsultationChart = () => {
  const dataConsultation = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Consultations',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const optionsConsultation = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Diagramme des Consultations',
      },
    },
  };

  return (
    <div className="consultation-chart-container mt-5"style={{width:'92%',background:'white',marginLeft:'66px',padding:'20px'}}>
      <div className="chart-item">
        <h3>Ensemble des Consultations</h3>
        <Line data={dataConsultation} options={optionsConsultation} />
      </div>

      <div className="chart-item">
        <h3>Diagramme des Consultations Médicales</h3>
        <MedecinConsultationChart />
      </div>
    </div>
  );
};

export default ConsultationChart;
