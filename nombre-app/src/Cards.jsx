import "./Cards.css";
import "./assets/mario.jpg";
import "./assets"

function Cards() {
  return (
    <section className="cards">

      <div className="card">
        <h3>Mario</h3>
        <img src={marioImage} alt="Mario" />
        <p>Desarrolladora Web</p>
      </div>


      <div className="card">
        <h3>Minecraft</h3>
         <img src={minecraftImage} alt="Menicraft" />
        <p>juego y accion</p>
      </div>

      <div className="card">
        <h3>Mario</h3>

        <p>Líder de Proyecto</p>
      </div>

      {}

    </section>
  );
}

export default Cards;

