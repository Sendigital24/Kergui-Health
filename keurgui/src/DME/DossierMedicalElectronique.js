import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./DossierMedicalElectronique.css";

const DossierMedicalElectronique = ({ role }) => {
  const [dossiers, setDossiers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newDossier, setNewDossier] = useState({ patient: "", age: "", diagnostic: "", date: "" });

  useEffect(() => {
    const fetchDossiers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/dme");
        if (!response.ok) throw new Error("Erreur lors du chargement des dossiers");
        const data = await response.json();
        const formattedDossiers = data
          .filter((d) => d.nomPatient && d.age && d.diagnostic && d.date)
          .map((dossier) => ({
            id: dossier.id,
            patient: dossier.nomPatient,
            age: dossier.age,
            diagnostic: dossier.diagnostic,
            date: dossier.date,
          }));
        setDossiers(formattedDossiers);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchDossiers();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addDossier = async () => {
    if (!newDossier.patient || !newDossier.age || !newDossier.diagnostic || !newDossier.date) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/dme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom_patient: newDossier.patient,
          age: Number(newDossier.age),
          diagnostic: newDossier.diagnostic,
          date: newDossier.date,
        }),
      });

      if (!response.ok) throw new Error("Erreur lors de l'ajout du dossier");

      const savedDossier = await response.json();
      setDossiers([
        ...dossiers,
        {
          id: savedDossier.id,
          patient: savedDossier.nom_patient,
          age: savedDossier.age,
          diagnostic: savedDossier.diagnostic,
          date: savedDossier.date,
        },
      ]);
      setNewDossier({ patient: "", age: "", diagnostic: "", date: "" });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout du dossier");
    }
  };

  const deleteDossier = (id) => {
    setDossiers(dossiers.filter((dossier) => dossier.id !== id));
  };

  const updateDossier = (id) => {
    const updatedName = prompt("Modifier le nom du patient :");
    if (updatedName) {
      setDossiers(
        dossiers.map((dossier) =>
          dossier.id === id ? { ...dossier, patient: updatedName } : dossier
        )
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="dme-dashboard-container">
        <h1>Dossier Médical Électronique</h1>

        <input
          type="text"
          placeholder="Rechercher un patient..."
          value={search}
          onChange={handleSearch}
          className="dme-search-bar"
        />

        {role === "medecin" && (
          <div className="dme-form-container">
            <input
              type="text"
              placeholder="Nom du patient"
              value={newDossier.patient}
              onChange={(e) => setNewDossier({ ...newDossier, patient: e.target.value })}
            />
            <input
              type="number"
              placeholder="Âge"
              value={newDossier.age}
              onChange={(e) => setNewDossier({ ...newDossier, age: e.target.value })}
            />
            <input
              type="text"
              placeholder="Diagnostic"
              value={newDossier.diagnostic}
              onChange={(e) => setNewDossier({ ...newDossier, diagnostic: e.target.value })}
            />
            <input
              type="date"
              value={newDossier.date}
              onChange={(e) => setNewDossier({ ...newDossier, date: e.target.value })}
            />
            <button className="dme-add-btn" onClick={addDossier}>
              Ajouter
            </button>
          </div>
        )}

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
                {role === "medecin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {dossiers
                .filter(
                  (dossier) =>
                    dossier.patient &&
                    dossier.patient.toLowerCase().startsWith(search.toLowerCase())
                )
                .map((dossier) => (
                  <tr key={dossier.id}>
                    <td>{dossier.patient}</td>
                    <td>{dossier.age} ans</td>
                    <td>{dossier.diagnostic}</td>
                    <td>{dossier.date}</td>
                    {role === "medecin" && (
                      <td>
                        <button
                          className="dme-update-btn"
                          onClick={() => updateDossier(dossier.id)}
                        >
                          ✏ Modifier
                        </button>
                        <button
                          className="dme-delete-btn"
                          onClick={() => deleteDossier(dossier.id)}
                        >
                          🗑 Supprimer
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DossierMedicalElectronique;
