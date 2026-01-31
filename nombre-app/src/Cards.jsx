import "./Cards.css";
import marioImage from "./assets/mario.jpg";
import minecraftImage from "./assets/minecraft.jpg";
import pacmanImage from "./assets/pacma.jpg";

function Cards() {
  return (
    <section className="cards">

      <div className="card">
        <img src={minecraftImage} alt="Minecraft" />
        <h3>Minecraft</h3>
        <p>Aventura y creatividad</p>

      
      </div>

      <div className="card">
        <img src={marioImage} alt="Mario" />
        <h3>Mario</h3>
        <p>Plataformas y diversión</p>

      </div>

      <div className="card">
        <img src={pacmanImage} alt="Pacman" />
        <h3>Pac-Man</h3>
        <p>Clásico arcade</p>

      </div>

    </section>
  );
}

export default Cards;

