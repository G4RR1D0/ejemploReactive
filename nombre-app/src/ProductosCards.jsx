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
  const productos = [
    { nombre: "Mouse Gamer", precio: 499, img: mousegamer },
    { nombre: "Teclado Mecánico", precio: 1299, img: tecladogamer },
    { nombre: "Audífonos Gamer", precio: 899, img: audifonosgamer },
    { nombre: "Monitor 144Hz", precio: 3999, img: monitorgamer },
    { nombre: "Control Inalámbrico", precio: 699, img: controlgamer },
    { nombre: "Silla Gamer", precio: 2499, img: sillagamer },
    { nombre: "Mousepad RGB", precio: 349, img: mousepad },
    { nombre: "PC Gamer Pro", precio: 18999, img: pcgamer },
  ];

  return (
    <section className="productos-cards">
      <h2>Productos</h2>
      <div className="productos-grid">
        {productos.map((p, i) => (
          <div key={i} className="card">
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <span>${p.precio.toLocaleString()} MXN</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosCards;
