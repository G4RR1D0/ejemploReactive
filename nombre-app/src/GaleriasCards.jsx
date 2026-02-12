import galeria1 from "./assets/galeria2.jpg";
import galeria2 from "./assets/galeria3.jpg";
import galeria3 from "./assets/galeria4.jpg";
import galeria4 from "./assets/galeria5.jpg";
import galeria5 from "./assets/galeria6.jpg";
import galeria6 from "./assets/galeria7.jpg";
import galeria7 from "./assets/galeria1.jpg";
import galeria8 from "./assets/galeria8.jpg";
import galeria9 from "./assets/galeria9.jpg";
import galeria10 from "./assets/galeria10.jpg";
import galeria11  from "./assets/galeria11.jpg";
import galeria12 from "./assets/galeria12.jpg";

function GaleriasCards() {
  const imagenes = [galeria1, galeria2, galeria3,galeria4,galeria5,galeria6,galeria7,galeria8,galeria9,galeria10,galeria11,galeria12];
  return (
    <section className="galeria-cards">
      <h2>Galería </h2>
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

export default GaleriasCards;