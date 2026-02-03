import "./Cards.css";
import Tarjeta from "./Tarjeta";
import marioImage from "./assets/mario.jpg";
import minecraftImage from "./assets/minecraft.jpg";
import pacmanImage from "./assets/pacma.jpg";

function ContenedorCards() {
  return (
    <section className="cards">
      <Tarjeta
        imagen={minecraftImage}
        name="Minecraft"
        descripcion="Aventura y creatividad"
      />

      <Tarjeta
        imagen={marioImage}
        name="Mario"
        descripcion="Plataformas y diversión"
      />

      <Tarjeta
        imagen={pacmanImage}
        name="Pac-Man"
        descripcion="Clásico arcade"
      />
    </section>
  );
}

export default ContenedorCards;