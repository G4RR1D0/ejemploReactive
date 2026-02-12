import "./Cards.css";

function ContactosCards() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    alert(`Gracias, ${nombre}! Tu mensaje fue enviado.`);
    e.target.reset();
  };

  return (
    <section className="contacto-cards">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="form-contacto">
        <input type="text" name="nombre" placeholder="Nombre completo" />
        <input type="email" name="email" placeholder="Correo electrónico" />
        <textarea name="mensaje" placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactosCards;
