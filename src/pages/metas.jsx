import { useState } from "react";
import "../styles/style.css";
export default function Metas() {
  // Datos de ejemplo
  const [metas, setMetas] = useState([
    { icono: "🏖️", descripcion: "Viaje a Cartagena", monto: 2000000 },
    { icono: "🎓", descripcion: "Curso de inglés", monto: 500000 },
  ]);

  const [newMetaModal, setNewMetaModal] = useState(false);
  const [addFundsModal, setAddFundsModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [newMeta, setNewMeta] = useState({ descripcion: "", monto: "", aporte: "" });
  const [addAmount, setAddAmount] = useState("");

  const openAddFunds = (index) => {
    setCurrentIndex(index);
    setAddFundsModal(true);
  };

  const openDelete = (index) => {
    setCurrentIndex(index);
    setDeleteModal(true);
  };

  const handleNewMetaSubmit = (e) => {
    e.preventDefault();
    setMetas([...metas, { icono: "🎯", descripcion: newMeta.descripcion, monto: Number(newMeta.monto) }]);
    setNewMetaModal(false);
    setNewMeta({ descripcion: "", monto: "", aporte: "" });
  };

  const handleAddFundsSubmit = (e) => {
    e.preventDefault();
    alert(`Se ha aportado $${addAmount} a la meta #${currentIndex + 1}`);
    setAddAmount("");
    setAddFundsModal(false);
  };

  const handleDeleteConfirm = () => {
    const updated = [...metas];
    updated.splice(currentIndex, 1);
    setMetas(updated);
    setDeleteModal(false);
  };

  return (
    <div className="container">
      <h1 className="h1">Estas son tus Metas</h1>

      <div className="metas-container">
        {metas.map((meta, i) => (
          <div className="meta-row" key={i}>
            <div className="meta-icon">{meta.icono}</div>
            <div className="meta-description">{meta.descripcion}</div>
            <div className="meta-amount">${meta.monto}</div>
            <div className="meta-actions">
              <button className="meta-btn-delete" onClick={() => openDelete(i)}>🗑️</button>
              <button className="meta-btn-add" onClick={() => openAddFunds(i)}>➕</button>
            </div>
          </div>
        ))}
      </div>

      <div className="new-meta-button">
        <button className="btn-primary" onClick={() => setNewMetaModal(true)}>Nueva Meta</button>
      </div>

      {/* Modal Nueva Meta */}
      {newMetaModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Crear Nueva Meta</h3>
            <form onSubmit={handleNewMetaSubmit}>
              <div className="modal-field">
                <label>Descripción de la meta</label>
                <input
                  type="text"
                  value={newMeta.descripcion}
                  onChange={(e) => setNewMeta({ ...newMeta, descripcion: e.target.value })}
                  placeholder="Ej: Viaje a Cartagena"
                  required
                />
              </div>
              <div className="modal-field">
                <label>Monto objetivo</label>
                <input
                  type="number"
                  value={newMeta.monto}
                  onChange={(e) => setNewMeta({ ...newMeta, monto: e.target.value })}
                  placeholder="Ej: 2000000"
                  required
                />
              </div>
              <div className="modal-field">
                <label>Aporte inicial</label>
                <input
                  type="number"
                  value={newMeta.aporte}
                  onChange={(e) => setNewMeta({ ...newMeta, aporte: e.target.value })}
                  placeholder="Ej: 300000"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="button" className="btn-secondary" onClick={() => setNewMetaModal(false)}>Cancelar</button>
                <button type="submit" className="btn-save">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Aportar */}
      {addFundsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Aportar a la meta</h3>
            <form onSubmit={handleAddFundsSubmit}>
              <div className="modal-field">
                <label>Monto a aportar</label>
                <input
                  type="number"
                  value={addAmount}
                  onChange={(e) => setAddAmount(e.target.value)}
                  placeholder="Ej: 50000"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="button" className="btn-secondary" onClick={() => setAddFundsModal(false)}>Cancelar</button>
                <button type="submit" className="btn-save">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Confirmar Eliminación */}
      {deleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¿Estás seguro?</h3>
            <p style={{ textAlign: "center" }}>Esta acción eliminará la meta de forma permanente.</p>
            <div className="modal-buttons">
              <button type="button" className="btn-secondary" onClick={() => setDeleteModal(false)}>Cancelar</button>
              <button type="button" className="btn-save" style={{ backgroundColor: "#c70303" }} onClick={handleDeleteConfirm}>Sí, eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
