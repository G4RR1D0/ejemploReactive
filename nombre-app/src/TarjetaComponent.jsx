function TarjetaComponent({ imagen, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default TarjetaComponent;
