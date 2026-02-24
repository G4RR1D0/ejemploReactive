import { useState } from "react";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "yane",
      apellidos: "Garrido Hernandez",
      direccion: "21 de Marzo",
      telefono: "7641098593",
      email: "yanethgarrido027@gmail.com",
    },
    {
      id: 2,
      nombre: "Lalo",
      apellidos: "Cruz Gonzalez",
      direccion: "AV.universidad tecnologica",
      telefono: "7641123456",
      email: "lalo@gmail.com",
    },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    id: null,
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [modoEdicion, setModoEdicion] = useState(false);

  const agregarUsuario = () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.apellidos || !nuevoUsuario.email) {
      alert("Completa los campos obligatorios");
      return;
    }

    const usuarioConId = {
      ...nuevoUsuario,
      id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    };

    setUsuarios([...usuarios, usuarioConId]);
    limpiarFormulario();
  };

  const editarUsuario = (usuario) => {
    setNuevoUsuario(usuario);
    setModoEdicion(true);
  };

  const guardarCambios = () => {
    const usuariosActualizados = usuarios.map((u) =>
      u.id === nuevoUsuario.id ? nuevoUsuario : u
    );

    setUsuarios(usuariosActualizados);
    limpiarFormulario();
    setModoEdicion(false);
  };

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter((u) => u.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  const limpiarFormulario = () => {
    setNuevoUsuario({
      id: null,
      nombre: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      email: "",
    });
  };

  return (
    <div className="usuarios-container">
      <h2>Usuarios</h2>

      {/* FORMULARIO */}
      <div className="form-agregar">
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoUsuario.nombre}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Apellidos"
          value={nuevoUsuario.apellidos}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, apellidos: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Dirección"
          value={nuevoUsuario.direccion}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, direccion: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={nuevoUsuario.telefono}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, telefono: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={nuevoUsuario.email}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })
          }
        />

        {modoEdicion ? (
          <button onClick={guardarCambios}>Guardar Cambios</button>
        ) : (
          <button onClick={agregarUsuario}>Agregar</button>
        )}
      </div>

      {/* TABLA */}
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.email}</td>
              <td>
                <button
                  className="btn-editar"
                  onClick={() => editarUsuario(usuario)}
                >
                  ✏️
                </button>
              </td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;