import { Link } from "react-router-dom";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    navigate("/finanzas");
  };

  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Inicia sesión</h2>
        <p>Completa los siguientes campos para ingresar</p>

        <form>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña mayor a 6 caracteres"
              required
            />
          </div>

          <button
            type="buttom"
            onClick={handleLogin}
            className="btn btn-primary"
          >
            Ingresar
          </button>
        </form>

        <p className="signup-link">
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </div>
    </div>
     
  );
}
