import "./Cards.css";
import Mapa from "./Mapa";
import MapaGeolocalizacion from "./MapaGeolocalizacion";

function SucursalesCards() {
  const sucursales = [
    { 
      nombre: "Sucursal Centro", 
      direccion: "Av. Principal #123", 
      ciudad: "CDMX",
      lat: 19.4326,
      lng: -99.1332
    },
    { 
      nombre: "Sucursal Norte", 
      direccion: "Calle Norte #456", 
      ciudad: "Monterrey",
      lat: 25.6866,
      lng: -100.3161
    },
    { 
      nombre: "Sucursal Sur", 
      direccion: "Av. Sur #789", 
      ciudad: "Guadalajara",
      lat: 20.6597,
      lng: -103.3496
    },
    { 
      nombre: "Sucursal Este", 
      direccion: "Av. Este #767", 
      ciudad: "Hidalgo",
      lat: 20.0911,
      lng: -98.7624
    },
  ];

  return (
    <section className="sucursales-cards">
      <div className="sucursales-grid">
        {sucursales.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.nombre}</h3>
            <p>{s.direccion}</p>
            <p>{s.ciudad}</p>

            <div style={{ width: "100%", height: "200px", marginTop: "10px" }}>
              <Mapa lat={s.lat} lng={s.lng} nombre={s.nombre} />
              <MapaGeolocalizacion></MapaGeolocalizacion>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SucursalesCards;
