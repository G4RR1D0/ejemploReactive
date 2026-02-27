import React, { useState } from "react";
import "./Carrito.css";

function Carrito() {
  const [carritos, setCarritos] = useState([
    {
      id: 1,
      fecha: "2020-03-02T00:00:00.000Z",
      productos: [
        { nombre: "Manzana", cantidad: 4 },
        { nombre: "Chocolate ", cantidad: 1 },
        { nombre: "Pastel ", cantidad: 6 },
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

  // Estados para agregar nuevo carrito jsjjjsjj :)
  const [productoNombre, setProductoNombre] = useState("");
  const [productoCantidad, setProductoCantidad] = useState("");

  const cancelarCarrito = (id) => {
    setCarritos(carritos.filter((c) => c.id !== id));
  };

  const agregarCarrito = () => {
    if (!productoNombre || !productoCantidad) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoCarrito = {
      id: Date.now(),
      fecha: new Date().toISOString(), 
      productos: [{ nombre: productoNombre, cantidad: parseInt(productoCantidad) }],
    };

    setCarritos([nuevoCarrito, ...carritos]);

    setProductoNombre("");
    setProductoCantidad("");

  };

  return (
    <div className="carrito-container">
      <h1 className="titulo-carrito">Carrito de compras</h1>

      {/* FORMULARIO PARA AGREGAR */}
      <div className="formulario-carrito">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productoNombre}
          onChange={(e) => setProductoNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={productoCantidad}
          onChange={(e) => setProductoCantidad(e.target.value)}
        />
        <button onClick={agregarCarrito}>Agregar Carrito</button>
      </div>

      <div className="lista-carritos">
        {carritos.map((carrito) => (
          <div className="card-carrito" key={carrito.id}>
            <div className="card-id">ID: {carrito.id}</div>
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








