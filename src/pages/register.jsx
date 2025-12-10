import { Link } from "react-router-dom";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const handleClick = () => {
    // aquí podrías validar algo antes
    navigate("/login");
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Crea tu cuenta</h2>
        <p>Completa los siguientes campos para registrarte</p>

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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu Email"
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

          <button type="buttom" onClick={handleClick} className="btn btn-primary">
            Registrar
          </button>
        </form>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
