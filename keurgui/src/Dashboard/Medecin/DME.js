import React, { useState, useEffect } from "react";
import "./DME.css";

const DME = () => {
  const [dossiers, setDossiers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [newDossier, setNewDossier] = useState({
    patient: "",
    age: "",
    diagnostic: "",
    date: "",
  });

  // Charger les dossiers depuis l'API
  const fetchDossiers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/dme");
      if (!res.ok) throw new Error("Erreur lors du chargement des dossiers");
      const data = await res.json();
      const formatted = data.map((d) => ({
        id: d.id,
        patient: d.nom_patient || d.nomPatient, // adaptation côté front
        age: d.age,
        diagnostic: d.diagnostic,
        date: d.date,
      }));
      setDossiers(formatted);
    } catch (e) {
      console.error(e);
      alert("Erreur lors du chargement des dossiers");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDossiers();
  }, []);

  const handleUpdate = (id) => {
    const newName = prompt("Modifier le nom du patient");
    if (newName) {
      setDossiers((prev) =>
        prev.map((d) => (d.id === id ? { ...d, patient: newName } : d))
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce dossier ?")) {
      try {
        const res = await fetch(`http://localhost:3000/api/dme/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200 || res.status === 204) {
          await fetchDossiers();
        } else {
          throw new Error("Erreur lors de la suppression du dossier");
        }
      } catch (e) {
        console.error(e);
        alert("Erreur lors de la suppression du dossier");
      }
    }
  };

  const handleAdd = async () => {
    const { patient, age, diagnostic, date } = newDossier;
    if (!patient || !age || !diagnostic || !date) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/dme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom_patient: patient, // ✅ correspond au champ attendu par le backend
          age: Number(age),
          diagnostic,
          date,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Erreur:", result.message || result);
        throw new Error(result.message || "Erreur ajout dossier");
      }

      await fetchDossiers();
      setNewDossier({ patient: "", age: "", diagnostic: "", date: "" });
      alert("Dossier ajouté avec succès !");
    } catch (e) {
      console.error(e);
      alert("Erreur lors de l'ajout du dossier");
    }
  };

  const filteredDossiers = dossiers.filter((d) =>
    d.patient?.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="dme-container">
      <h1>Dossier Médical Électronique</h1>

      <input
        type="text"
        placeholder="Filtrer par première lettre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="form-container">
        <input
          type="text"
          placeholder="Nom du patient"
          value={newDossier.patient}
          onChange={(e) =>
            setNewDossier({ ...newDossier, patient: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Âge"
          value={newDossier.age}
          onChange={(e) =>
            setNewDossier({ ...newDossier, age: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Diagnostic"
          value={newDossier.diagnostic}
          onChange={(e) =>
            setNewDossier({ ...newDossier, diagnostic: e.target.value })
          }
        />
        <input
          type="date"
          value={newDossier.date}
          onChange={(e) =>
            setNewDossier({ ...newDossier, date: e.target.value })
          }
        />
        <button onClick={handleAdd} className="add-btn">
          Ajouter
        </button>
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
            {filteredDossiers.length > 0 ? (
              filteredDossiers.map((dossier, index) => (
                <tr
                  key={dossier.id}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{dossier.patient}</td>
                  <td>{dossier.age} ans</td>
                  <td>{dossier.diagnostic}</td>
                  <td>{dossier.date}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(dossier.id)}
                      className="update-btn"
                    >
                      ✏ Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(dossier.id)}
                      className="delete-btn"
                    >
                      🗑 Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Aucun dossier trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DME;
