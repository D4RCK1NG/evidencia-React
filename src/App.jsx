import { useState } from "react";
import "./App.css";
import Conversor from "./Conversor";
function App() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }
  function cambiarContraseña(evento) {
    setContraseña(evento.target.value);
  }
  function validacion() {
    if (usuario == "admin" && contraseña == "admin") {
      alert("Bienvenido");
      setLogueado(true)
    } else alert("Usuario o contraseña incorrectos");
  }
  if (logueado) {
      return <Conversor />
  }
  return (
    <>
    <h1> inicia de sesion </h1>
      <input placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}
      />
      <br />
      <br />
      <input placeholder="Contraseña" type="password" name="contraseña" id="cotraseña" value={contraseña} onChange={cambiarContraseña}
      />
      <br />
      <br />
      <button onClick={validacion}>Confirmar</button>
    </>
  );
}
export default App;