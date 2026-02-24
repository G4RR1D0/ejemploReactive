import React, { useState } from "react";
import "./Carrito.css";

function Carrito() {
  const [carritos, setCarritos] = useState([
    {
      id: 1,
      fecha: "2020-03-02T00:00:00.000Z",
      productos: [
        { nombre: "Producto #1", cantidad: 4 },
        { nombre: "Producto #2", cantidad: 1 },
        { nombre: "Producto #3", cantidad: 0 },
      ],
    },
    {
      id: 2,
      fecha: "2020-01-02T00:00:00.000Z",
      productos: [
        { nombre: "Producto #2", cantidad: 4 },
        { nombre: "Producto #1", cantidad: 10 },
        { nombre: "Producto #5", cantidad: 2 },
      ],
    },
  ]);

  const cancelarCarrito = (id) => {
    const nuevosCarritos = carritos.filter((c) => c.id !== id);
    setCarritos(nuevosCarritos);
  };

  return (
    <div className="carrito-container">
      <h1 className="titulo-carrito">Carrito de compras</h1>

      <div className="lista-carritos">
        {carritos.map((carrito) => (
          <div className="card-carrito" key={carrito.id}>
            <div className="card-id">{carrito.id}</div>

            <div className="card-fecha">
              {new Date(carrito.fecha).toLocaleString()}
            </div>

            <div className="subtitulo">Productos</div>

            <ul className="lista-productos">
              {carrito.productos.map((producto, index) => (
                <li key={index}>
                  {producto.nombre} — Cantidad: {producto.cantidad}
                </li>
              ))}
            </ul>

            <button
              className="btn-cancelar"
              onClick={() => cancelarCarrito(carrito.id)}
            >
              Cancelar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;












