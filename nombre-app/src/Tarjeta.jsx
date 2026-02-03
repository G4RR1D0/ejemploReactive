function Tarjeta(props) {
  return (
    <div className="card">
      <img src={props.imagen} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.descripcion}</p>
      <a href="#">Leer más</a>
    </div>
  );
}

export default Tarjeta;