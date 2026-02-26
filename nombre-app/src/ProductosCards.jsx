import { useEffect, useState } from "react";
import api from "./Services/api";
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

  // Formulario completo
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  const imagenesIniciales = [
    mousegamer,
    tecladogamer,
    audifonosgamer,
    monitorgamer,
    controlgamer,
    sillagamer,
    mousepad,
    pcgamer,
  ];

  const titulosIniciales = [
    "Mouse Gamer RGB",
    "Teclado Mecánico RGB",
    "Audífonos Gamer 7.1",
    "Monitor Gamer 144Hz",
    "Control Gamer Pro",
    "Silla Gamer Ergonómica",
    "Mousepad XL Profesional",
    "PC Gamer High Performance",
  ];

  const descripcionesIniciales = [
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
    // Creamos los productos iniciales con tus imágenes locales
    const iniciales = titulosIniciales.map((title, i) => ({
      id: Date.now() + i,
      title,
      image: imagenesIniciales[i],
      price: (i + 1) * 500, // precio de ejemplo
      description: descripcionesIniciales[i],
    }));
    setProductos(iniciales);
    setLoading(false);
  }, []);

  const agregarProducto = () => {
    if (!nuevoNombre || !nuevaImagen || !nuevoPrecio || !nuevaDescripcion) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      title: nuevoNombre,
      image: nuevaImagen,
      price: parseFloat(nuevoPrecio),
      description: nuevaDescripcion,
    };

    setProductos([...productos, nuevoProducto]);

    setNuevoNombre("");
    setNuevaImagen("");
    setNuevoPrecio("");
    setNuevaDescripcion("");
  };

  if (loading) return <p className="loading">Cargando...</p>;

  return (
    <section className="productos-cards">
      <h2>Productos</h2>

      {/* FORMULARIO */}
      <div className="formulario-producto">
        <h3>Agregar Nuevo Producto</h3>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={nuevaImagen}
          onChange={(e) => setNuevaImagen(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)}
        />
        <textarea
          placeholder="Descripción del producto"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar Producto</button>
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img
              src={producto.image}
              alt={producto.title}
            />
            <h3>{producto.title}</h3>
            <p className="descripcion">{producto.description}</p>
            <span>${producto.price} MXN</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosCards;