import { useState } from "react";
import "../styles/style.css";

export default function Dashboard() {
  const [guardarModal, setGuardarModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar el modal
    setGuardarModal(true);

    // Cerrar automáticamente después de 2 segundos
    setTimeout(() => {
      setGuardarModal(false);
    }, 800);
  };

  return (
    <div className="dashboard-container">
      <h1 className="h1">Registro finanzas</h1>

      {/* Tarjetas de resumen */}
      <div className="finance-cards">
        <div className="card card-green">
          <h3>Ingresos</h3>
          <p>$0</p>
        </div>

        <div className="card card-red">
          <h3>Egresos</h3>
          <p>$0</p>
        </div>

        <div className="card card-yellow">
          <h3>Balance</h3>
          <p>$0</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="transaction-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="value">Valor</label>
            <input type="number" id="value" placeholder="Ingresa el valor" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" placeholder="Ingresa una descripción" />
          </div>

          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select id="type" required>
              <option value="">Selecciona un tipo</option>
              <option value="ingreso">Ingreso</option>
              <option value="egreso">Egreso</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>

      {/* Modal guardar */}
      {guardarModal && (
        <div className="modal-overlay">
          <div className="modal-content-guardar">
            <p style={{ textAlign: "center", margin: "15px 0" }}>
              Registro guardado correctamente
            </p>

            <div className="modal-buttons">
              <button
                type="button"
                className="btn-save"
                onClick={() => setGuardarModal(false)}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

