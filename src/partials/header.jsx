
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/register">Registrarse</Link>
    </nav>
  );
}