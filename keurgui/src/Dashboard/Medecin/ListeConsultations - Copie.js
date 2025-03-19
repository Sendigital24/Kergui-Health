import React, { useState } from "react";
import Button from "../Button";
import TitleText from "../TitleText";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

// Modale de formulaire
const ListeConsultations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultations, setConsultations] = useState([
    { id: 1, patient: "John Doe", date: "2025-03-01", status: "Consulté" },
    { id: 2, patient: "Jane Smith", date: "2025-03-03", status: "En attente" },
  ]);
  const [newConsultation, setNewConsultation] = useState({
    patient: "",
    date: "",
    status: "En attente",
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Ajouter une consultation
  const handleSubmit = () => {
    setConsultations([
      ...consultations,
      { ...newConsultation, id: consultations.length + 1 },
    ]);
    setNewConsultation({ patient: "", date: "", status: "En attente" });
    setModalOpen(false);
  };

  return (
    <div className="container-fluid mt-5 h-[50]"style={{width:'92%',background:'white',marginLeft:'66px',padding:'20px'}}>
      <div style={{marginLeft:'37px'}}>
      <TitleText title="Liste des Consultations" text="Liste des consultations à suivre" />
      <Button text="Ajouter une consultation" onClick={handleOpenModal} color="green" className="add-button" />
      
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <Modal onClose={handleCloseModal} size="small">
          
          <form>
            <div className="form-group">
              <label>Patient</label>
              <input
                type="text"
                className="form-control"
                value={newConsultation.patient}
                onChange={(e) => setNewConsultation({ ...newConsultation, patient: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                value={newConsultation.date}
                onChange={(e) => setNewConsultation({ ...newConsultation, date: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                value={newConsultation.status}
                onChange={(e) => setNewConsultation({ ...newConsultation, status: e.target.value })}
              >
                <option value="En attente">En attente</option>
                <option value="Consulté">Consulté</option>
              </select>
            </div>
            <Button text="Ajouter" onClick={handleSubmit} color="blue" className="mt-2" />
          </form>
        </Modal>
      )}

      <div className="consultations-table mt-4"style={{width:'97%',marginLeft:'36px'}}>
        <table className="table table-bordered table-striped w-100">
          <thead>
            <tr className="table-light">
              <th>Patient</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consultation, index) => (
              <tr key={consultation.id} className={index % 2 === 0 ? "table-white" : "table-secondary"}>
                <td>{consultation.patient}</td>
                <td>{consultation.date}</td>
                <td>{consultation.status}</td>
                <td className="actions">
                  <FaEye className="icon text-primary mx-2" title="Voir" />
                  <FaEdit className="icon text-warning mx-2" title="Modifier" />
                  <FaTrash className="icon text-danger mx-2" title="Supprimer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeConsultations;
