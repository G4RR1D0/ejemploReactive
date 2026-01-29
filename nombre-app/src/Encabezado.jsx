import miImagen from "./assets/logo.jpg";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import instagram from "./assets/instagram.png";

import "./Encabezado.css";


function Encabezado() {
  return (
    <header className="encabezado">
      
      <div className="logo">
        <img src={miImagen} alt="Logotipo" />
      </div>

      <nav className="menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contactos</a></li>
          <li><a href="#">Sucursales</a></li>
        </ul>
      </nav>



     <div className="redes">
    <img src={facebook} alt="Facebook"/>
    <img src={whatsapp} alt="Whatsapp"/>
    <img src={instagram} alt="Instagram"/>

        <div/>
      </div>

    </header>
  );
}

export default Encabezado;
