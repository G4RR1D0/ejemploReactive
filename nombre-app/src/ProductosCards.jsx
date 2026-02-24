import api from "./Services/api";
import { useEffect, useState } from "react";
import "./Cards.css";

import mousegamer from "./assets/productos/mouse.jpg";
import tecladogamer from "./assets/productos/teclado.jpg";
import audifonosgamer from "./assets/productos/audifonos.jpg";
import monitorgamer from "./assets/productos/monitor.jpg";
import controlgamer from "./assets/productos/control.jpg";
import sillagamer from "./assets/productos/silla.jpg";
import mousepad from "./assets/productos/mousepad.jpg";
import pcgamer from "./assets/productos/pcgamer.jpg";

function ProductosCards() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const imagenes = [
    mousegamer,
    tecladogamer,
    audifonosgamer,
    monitorgamer,
    controlgamer,
    sillagamer,
    mousepad,
    pcgamer,
  ];

  const titulos = [
    "Mouse Gamer RGB",
    "Teclado Mecánico RGB",
    "Audífonos Gamer 7.1",
    "Monitor Gamer 144Hz",
    "Control Gamer Pro",
    "Silla Gamer Ergonómica",
    "Mousepad XL Profesional",
    "PC Gamer High Performance",
  ];

  const descripciones = [
    "Alta precisión y sensor óptico profesional para máximo rendimiento.",
    "Switches mecánicos retroiluminados para respuesta ultrarrápida.",
    "Sonido envolvente con micrófono de alta definición.",
    "Pantalla Full HD con tasa de refresco ultra fluida.",
    "Diseño ergonómico con vibración avanzada.",
    "Soporte lumbar y reclinación ajustable para largas sesiones.",
    "Superficie antideslizante optimizada para gaming competitivo.",
    "Potencia extrema para juegos AAA y streaming.",
  ];

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("/products");
        setProductos(response.data.slice(0, 8));
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <section className="productos-cards">
      <h2>Productos</h2>

      <div className="productos-grid">
        {productos.map((producto, i) => (
          <div key={producto.id} className="card">
            <img src={imagenes[i]} alt={titulos[i]} />
            <h3>{titulos[i]}</h3>
            <p className="descripcion">{descripciones[i]}</p>
            <span>${producto.price} MXN</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosCards;