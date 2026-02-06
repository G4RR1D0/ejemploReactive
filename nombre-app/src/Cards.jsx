import "./Cards.css";


import marioImage from "./assets/mario.jpg";
import minecraftImage from "./assets/minecraft.jpg";
import pacmanImage from "./assets/pacma.jpg";

import mousegamer from "./assets/productos/mouse.jpg";
import tecladogamer from "./assets/productos/teclado.jpg";
import audifonosgamer from "./assets/productos/audifonos.jpg";
import monitorgamer from "./assets/productos/monitor.jpg";
import controlgamer from "./assets/productos/control.jpg";
import sillagamer from "./assets/productos/silla.jpg";
import mousepad from "./assets/productos/mousepad.jpg";
import pcgamer from "./assets/productos/pcgamer.jpg";

import galeria1 from "./assets/galeria2.jpg";
import galeria2 from "./assets/galeria3.jpg";
import galeria3 from "./assets/galeria4.jpg";

function Cards({ vista }) {
  if (vista === "acerca") return <AcercaCards />;
  if (vista === "productos") return <ProductosCards />;
  if (vista === "galeria") return <GaleriaCards />;
  if (vista === "contactos") return <ContactosCards />;
  if (vista === "sucursales") return <SucursalesCards />;

  
  return (
    <section className="cards">
      <div className="card">
        <img src={minecraftImage} alt="Minecraft" />
        <h3>Minecraft</h3>
        <p>Juego tipo sandbox...</p>
      </div>
      <div className="card">
        <img src={marioImage} alt="Mario" />
        <h3>Mario</h3>
        <p>Juego de plataforma...</p>
      </div>
      <div className="card">
        <img src={pacmanImage} alt="Pac-Man" />
        <h3>Pac-Man</h3>
        <p>Juego arcade clásico...</p>
      </div>
    </section>
  );
}


function AcercaCards() {
  return (
    <section className="cards">
      <div className="cuadro-acerca">
        <h2>Acerca de Nosotros</h2>
        <p>
          Somos una tienda especializada en productos gamer, dedicada a ofrecer
          accesorios y equipos de alta calidad para mejorar tu experiencia de
          juego.
        </p>
        <p>
          Nuestro objetivo es brindar tecnología confiable, precios accesibles y
          un servicio excepcional.
        </p>
      </div>
    </section>
  );
}

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
      <h2>Productos Gamer</h2>
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

function GaleriaCards() {
  const imagenes = [galeria1, galeria2, galeria3];
  return (
    <section className="galeria-cards">
      <h2>Galería de Imágenes</h2>
      <div className="galeria-grid">
        {imagenes.map((img, i) => (
          <div key={i} className="card">
            <img src={img} alt={`Galería ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactosCards() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    alert(`Gracias, ${nombre}!\nTu mensaje ha sido enviado correctamente.`);
    e.target.reset();
  };

  return (
    <section className="contacto-cards">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="form-contacto">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." rows="5"></textarea>
        </div>
        <button type="submit" className="btn-enviar">Enviar mensaje</button>
      </form>
    </section>
  );
}

function SucursalesCards() {
  const sucursales = [
    { nombre: "Sucursal Centro", direccion: "Av. Principal #123", ciudad: "CDMX" },
    { nombre: "Sucursal Norte", direccion: "Calle Norte #456", ciudad: "Monterrey" },
    { nombre: "Sucursal Sur", direccion: "Av. Sur #789", ciudad: "Guadalajara" },
  ];

  return (
    <section className="sucursales-cards">
      <h2>Nuestras Sucursales</h2>
      <div className="sucursales-grid">
        {sucursales.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.nombre}</h3>
            <p>{s.direccion}</p>
            <p>{s.ciudad}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
