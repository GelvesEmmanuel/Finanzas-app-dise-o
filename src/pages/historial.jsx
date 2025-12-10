import { useState } from "react";
import "../styles/style.css";

export default function Historial() {
  // Datos de ejemplo (puedes traerlos de tu backend después)
  const [transacciones, setTransacciones] = useState([
    { fecha: "02/11/2025", valor: 50000, tipo: "Ingreso", descripcion: "Venta de zapatos" },
    { fecha: "02/11/2025", valor: 20000, tipo: "Egreso", descripcion: "Taxi" },
    { fecha: "02/11/2025", valor: 60000, tipo: "Ingreso", descripcion: "Venta de camisa" },
    { fecha: "02/11/2025", valor: 15000, tipo: "Egreso", descripcion: "Compra de almuerzo" },
  ]);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [currentDelete, setCurrentDelete] = useState(null);

  // Form state para edición
  const [editForm, setEditForm] = useState({ valor: "", descripcion: "", tipo: "Ingreso" });

  const handleEditClick = (index) => {
    setCurrentEdit(index);
    const t = transacciones[index];
    setEditForm({ valor: t.valor, descripcion: t.descripcion, tipo: t.tipo });
    setEditModal(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = [...transacciones];
    updated[currentEdit] = { ...updated[currentEdit], ...editForm };
    setTransacciones(updated);
    setEditModal(false);
    setCurrentEdit(null);
  };

  const handleDeleteClick = (index) => {
    setCurrentDelete(index);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    const updated = [...transacciones];
    updated.splice(currentDelete, 1);
    setTransacciones(updated);
    setDeleteModal(false);
    setCurrentDelete(null);
  };

  return (
    <main className="historial-container">
      <h1 className="h1">Historial</h1>

      {/* Tabla */}
      <table className="tabla-historial">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th className="acciones-col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((t, i) => (
            <tr key={i}>
              <td>{t.fecha}</td>
              <td className={`tipo ${t.tipo.toLowerCase()}`}>${t.valor}</td>
              <td className={`tipo ${t.tipo.toLowerCase()}`}>{t.tipo}</td>
              <td className="descripcion">{t.descripcion}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEditClick(i)}>✏</button>
                <button className="btn-delete" onClick={() => handleDeleteClick(i)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buscador */}
      <h2 className="titulo-buscar">Buscar por fechas</h2>
      <form className="form-busqueda">
        <div className="fechas-row">
          <div className="grupo-fecha">
            <label>Fecha inicio</label>
            <input type="date" name="fechaInicio" />
          </div>
          <div className="grupo-fecha">
            <label>Fecha fin</label>
            <input type="date" name="fechaFin" />
          </div>
        </div>
        <button type="submit" className="btn-buscar">Buscar</button>
        <button type="button" className="btn-descargar" onClick={() => setDownloadModal(true)}>Descargar</button>
      </form>

      {/* Modal Editar */}
      {editModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Transacción</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-field">
                <label>Valor</label>
                <input
                  type="number"
                  value={editForm.valor}
                  onChange={(e) => setEditForm({ ...editForm, valor: e.target.value })}
                  required
                />
              </div>
              <div className="modal-field">
                <label>Descripción</label>
                <input
                  type="text"
                  value={editForm.descripcion}
                  onChange={(e) => setEditForm({ ...editForm, descripcion: e.target.value })}
                  required
                />
              </div>
              <div className="modal-field">
                <label>Tipo</label>
                <select
                  value={editForm.tipo}
                  onChange={(e) => setEditForm({ ...editForm, tipo: e.target.value })}
                  required
                >
                  <option value="Ingreso">Ingreso</option>
                  <option value="Egreso">Egreso</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="button" className="btn-secondary" onClick={() => setEditModal(false)}>Cancelar</button>
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
            <p style={{ textAlign: "center" }}>Esta acción eliminará del historial de forma permanente.</p>
            <div className="modal-buttons">
              <button type="button" className="btn-secondary" onClick={() => setDeleteModal(false)}>Cancelar</button>
              <button type="button" className="btn-save" style={{ backgroundColor: "#c70303" }} onClick={confirmDelete}>Sí, eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Descarga */}
      {downloadModal && (
        <div className="modal-overlay">
          <div className="modal-content-descargar">
            <p style={{ textAlign: "center", margin: "15px 0" }}>Descarga exitosa</p>
            <div className="modal-buttons">
              <button type="button" className="btn-save" onClick={() => setDownloadModal(false)}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
 
    </main>
  );
}
