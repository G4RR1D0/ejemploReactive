import miImagen from "./assets/logo.jpg";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import instagram from "./assets/instagram.png";
import Clima from "./Clima";
import "./Encabezado.css";

function Encabezado({ setVista }) {
  return (
    <header className="encabezado">
      <div className="logo">
        <img src={miImagen} alt="Logotipo" />
      </div>

      <nav className="menu">
        <ul>
          <li onClick={() => setVista("inicio")}>Inicio</li>
          <li onClick={() => setVista("acerca")}>Acerca de</li>
          <li onClick={() => setVista("galeria")}>Galería</li>
          <li onClick={() => setVista("productos")}>Productos</li>
          <li onClick={() => setVista("contactos")}>Contactos</li>
          <li onClick={() => setVista("sucursales")}>Sucursales</li>
        </ul>
      </nav>

      <div className="redes">
        <img src={facebook} alt="Facebook" />
        <img src={whatsapp} alt="Whatsapp" />
        <img src={instagram} alt="Instagram" />
      </div>
      <Clima> </Clima>
    </header>
  );
}


export default Encabezado;

