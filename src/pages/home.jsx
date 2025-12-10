import { Link } from "react-router-dom";
import img1 from "../styles/img/img1.png";
import img2 from "../styles/img/img2.png";
import "../styles/style.css";
function Home() {
  return (
    <div
      className="home-container"
      style={{ textAlign: "center", padding: "0 0px", margin: "0" }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#000000",
          fontWeight: "bold",
          marginBottom: "10px",
          margin:"1px",
          
        }}
      >
        Bienvenido a tu App de Finanzas
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          marginTop:"10px",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Gestiona tus finanzas personales de manera sencilla e intuitiva. Registra
        tus ingresos y gastos, establece metas y mantén un control total sobre tu
        dinero.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "200px",
          marginBottom: "50px",
        }}
      >
        {/* Imagen izquierda */}
        <img
          src={img1}
          alt="Gráfico 1"
          style={{ width: "17vw", borderRadius: "20px" }}
        />

        {/* Imagen derecha */}
        <img
          src={img2}
          alt="Gráfico 2"
          style={{ width: "17vw", borderRadius: "20px" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <Link
          to="/login"
          style={{
            backgroundColor: "#079C10",
            color: "#fff",
            padding: "12px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Iniciar Sesión
        </Link>

        <Link
          to="/register"
          style={{
            border: "2px solid #079C10",
            color: "#000000",
            padding: "12px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}

export default Home;
