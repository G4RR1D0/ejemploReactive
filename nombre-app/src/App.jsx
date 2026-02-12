import { useState } from "react";
import Encabezado from "./Encabezado";
import Cards from "./Cards";
import "./App.css";

function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div>
      <Encabezado setVista={setVista} />
      <Cards vista={vista} />
    </div>
  );
}

export default App;

