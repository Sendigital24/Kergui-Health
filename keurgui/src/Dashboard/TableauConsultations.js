import React from "react";

const TableauConsultations = ({ consultations }) => {
  if (!consultations || consultations.length === 0) {
    return <p>Aucune consultation à venir.</p>;
  }

  return (
    <div className="tableau-consultations" style={{ marginTop: '20px' }}>
      <h5>Consultations à Venir</h5>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Patient</th>
            <th>Consultation</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td>{consultation.date}</td>
              <td>{consultation.patient}</td>
              <td>{consultation.consultation}</td>
              <td>{consultation.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableauConsultations;
