import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Finanzas from "./pages/finanzas";

import NavbarUsuario from "./partials/navbar-user";
import Footer from "./partials/footer";
import Historial from "./pages/historial";
import Metas from "./pages/metas";
import Perfil from "./pages/perfil";
import NavbarPublic from "./partials/navbar";

function Layout({ children }) {
  const location = useLocation();

  // Simula si el usuario está logueado
  const isLogged = localStorage.getItem("auth") === "true";

  // Rutas que requieren navbar de usuario
  const rutasUsuario = ["/finanzas", "/historial", "/metas", "/perfil"];

  const usarNavbarUsuario = 
    isLogged && rutasUsuario.includes(location.pathname);

  return (
    <>
      {usarNavbarUsuario ? <NavbarUsuario /> : <NavbarPublic />}
      {children}
      <Footer />
    </>
  );
}

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

   useEffect(() => {
    const isLogged = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLogged);
  }, []);


  return (
    <BrowserRouter>
       <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*rutas del usuario*/}
        <Route path="/finanzas" element={<Finanzas />} />
         <Route path="/historial" element={<Historial />} />
         <Route path="/metas" element={<Metas />} />
          <Route path="/perfil" element={<Perfil />} />
        
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;