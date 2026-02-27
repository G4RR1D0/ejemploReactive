import "./Cards.css";
import marioImage from "./assets/mario.jpg";
import minecraftImage from "./assets/minecraft.jpg";
import pacmanImage from "./assets/pacma.jpg";
import Mapa from "./Mapa";

function IndexCards() {
  return (
    <>
      <section className="cards">
        <div className="card">
          <img src={minecraftImage} alt="Minecraft" />
          <h3>Minecraft</h3>
          <p>Juego para crear todo lo que puedas imagen...</p>
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

      <div className="cuadro-gamer">
        <Mapa
          lat={19.4326}
          lng={-99.1332}
          nombre="Ubicación"
        />

        <footer>
          <p>&copy; 2024 Sitio web de gamer</p>
          <p>Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
}

export default IndexCards;

