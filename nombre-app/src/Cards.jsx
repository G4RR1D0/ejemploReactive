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
        <p>Minecraft es un videojuego tipo sandbox,
           su traducción literal sería “caja de arena” 
          y es lo que representa la experiencia de juego.</p>

      
      </div>

      <div className="card">
        <img src={marioImage} alt="Mario" />
        <h3>Mario</h3>
        <p>Mario es representado como un fontanero corpulento 
          que vive en el ficticio Reino Champiñón con Luigi, 
          su hermano menor y más alto.</p>

      </div>

      <div className="card">
        <img src={pacmanImage} alt="Pacman" />
        <h3>Pac-Man</h3>
        <p>Pac-Man es un icónico videojuego arcade de los años 80,
           creado por Toru Iwatani de Namco,
            donde el jugador controla a un personaje
             amarillo en forma de círculo.</p>

      </div>

    </section>
  );
}

export default Cards;

