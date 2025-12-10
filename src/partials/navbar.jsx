import { Link } from "react-router-dom";
import logo from "../styles/img/logo.png";
export default function NavbarPublic() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
      </div>

      {/* LINKS DERECHA */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Iniciar sesión
        </Link>

        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
}