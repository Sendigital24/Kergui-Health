import React from "react";

const DossierTable = ({ dossiers, search, onUpdate, onDelete }) => {
  // filtre par la première lettre du nom du patient
  const filtered = dossiers.filter((d) =>
    d.patient.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <table className="dme-table">
      <thead>
        <tr>
          <th>Nom du patient</th>
          <th>Âge</th>
          <th>Diagnostic</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((dossier) => (
          <tr key={dossier.id}>
            <td>{dossier.patient}</td>
            <td>{dossier.age} ans</td>
            <td>{dossier.diagnostic}</td>
            <td>{dossier.date}</td>
            <td>
              <button onClick={() => onUpdate(dossier.id)}>✏ Modifier</button>
              <button onClick={() => onDelete(dossier.id)}>🗑 Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DossierTable;
