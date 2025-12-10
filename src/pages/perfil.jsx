import React, { useState } from "react";
import "../styles/style.css";

export default function Perfil() {
  // Simulamos el usuario
  const [user, setUser] = useState({
    name: "Juan",
    username: "juan123",
  });

  const [nombre, setNombre] = useState(user.name || "");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}\nContraseña: ${password}`);
  };

  return (
    <div className="container">
      <h1 className="h1">Mi Perfil</h1>
      <p className="page-subtitle">Podrás ver la información asociada a tu cuenta.</p>

      <div className="profile-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="avatar-circle">
            { (user.name || user.username).charAt(0).toUpperCase() }
          </div>
          <div className="user-info">
            <p><strong>{user.name || "Nombre"}</strong></p>
            <p>Miembro</p>
          </div>
          <ul className="sidebar-buttons">
            <li><a href="/perfil">Información personal</a></li>
            <li><a href="/finanzas">Gestión de finanzas</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h2>Información personal</h2>
          <form id="perfilForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-guardar">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
