import React, { useState, useEffect } from "react";
import "./DME.css";

const DME = () => {
  const [dossiers, setDossiers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newDossier, setNewDossier] = useState({ patient: "", age: "", diagnostic: "", date: "" });

  useEffect(() => {
    setTimeout(() => {
      setDossiers([
        { id: 1, patient: "Ali Sow", age: 45, diagnostic: "Hypertension", date: "2025-02-15" },
        { id: 2, patient: "Fatou Ndiaye", age: 32, diagnostic: "Diabète type 2", date: "2025-03-10" },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addDossier = () => {
    if (!newDossier.patient || !newDossier.age || !newDossier.diagnostic || !newDossier.date) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    setDossiers([...dossiers, { id: dossiers.length + 1, ...newDossier }]);
    setNewDossier({ patient: "", age: "", diagnostic: "", date: "" });
  };

  const deleteDossier = (id) => {
    setDossiers(dossiers.filter((dossier) => dossier.id !== id));
  };

  const updateDossier = (id) => {
    const updatedName = prompt("Modifier le nom du patient :");
    if (updatedName) {
      setDossiers(dossiers.map((dossier) => (dossier.id === id ? { ...dossier, patient: updatedName } : dossier)));
    }
  };

  return (
    <>
      <div className="dme-container"style={{width:'92%',background:'white',marginLeft:'66px',padding:'20px'}}>
        <h1>Dossier Médical Électronique</h1>
        <input
          type="text"
          placeholder="Rechercher un patient..."
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="form-container">
          <input type="text" placeholder="Nom du patient" value={newDossier.patient} onChange={(e) => setNewDossier({ ...newDossier, patient: e.target.value })} />
          <input type="number" placeholder="Âge" value={newDossier.age} onChange={(e) => setNewDossier({ ...newDossier, age: e.target.value })} />
          <input type="text" placeholder="Diagnostic" value={newDossier.diagnostic} onChange={(e) => setNewDossier({ ...newDossier, diagnostic: e.target.value })} />
          <input type="date" value={newDossier.date} onChange={(e) => setNewDossier({ ...newDossier, date: e.target.value })} />
          <button className="add-btn" onClick={addDossier}>Ajouter</button>
        </div>

        {isLoading ? (
          <p>Chargement des dossiers...</p>
        ) : (
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
              {dossiers
                .filter((dossier) => dossier.patient.toLowerCase().includes(search.toLowerCase()))
                .map((dossier, index) => (
                  <tr key={dossier.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td>{dossier.patient}</td>
                    <td>{dossier.age} ans</td>
                    <td>{dossier.diagnostic}</td>
                    <td>{dossier.date}</td>
                    <td>
                      <button className="update-btn" onClick={() => updateDossier(dossier.id)}>✏ Modifier</button>
                      <button className="delete-btn" onClick={() => deleteDossier(dossier.id)}>🗑 Supprimer</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DME;
