import { useState } from "react";
import Encabezado from "./Encabezado";
import Expresiones from "./Expresiones";
import Cards from "./Cards";
import "./App.css";

function App(props) {
  const { user } = props;

  const [vista, setVista] = useState("inicio");

  return (
    <div>
      <Encabezado setVista={setVista} />

      <Cards vista={vista} />

      {vista === "inicio" && (
        <>
          <Expresiones />

          <div className="cuadro-gamer">
            <h1>5C DSM</h1>
            <h2>Yaneth Garrido Hernandez</h2>

            <h3>
              Un gamer es una persona apasionada por los videojuegos, abarcando
              desde jugadores casuales en móviles (como Free Fire) hasta
              profesionales (eSports, streamers) que utilizan PC o consolas.
            </h3>

            <footer>
              <p>&copy; 2024 Sitio web de gamer</p>
              <p>Todos los derechos reservados</p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

