import { Link } from "react-router-dom";
import logo from "../styles/img/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavbarUsuario() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // quitar la marca de autenticación
    localStorage.removeItem("auth");
    // redirigir a la home
    navigate("/");
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "35px", height: "35px", borderRadius: "8px" }}
        />
        <span style={{ fontSize: "18px", fontWeight: 600, color: "#000000" }}>
          finanzas app
        </span>
      </Link>

      {/* LINKS CENTRALES */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        <Link
          to="/perfil"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Perfil
        </Link>
        <Link
          to="/metas"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Metas
        </Link>
        <Link
          to="/finanzas"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Finanzas
        </Link>
        <Link
          to="/historial"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Historial
        </Link>
      </div>

      {/* USER INFO + BOTÓN SALIR */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>
          Hola, Juan
        </span>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#FFD700",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          J
        </div>
        <div
          style={{
            padding: "8px 16px",
            backgroundColor: "#008000",
            color: "white",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={handleLogout}
        >
          Salir
        </div>
      </div>
    </nav>
  );
}
