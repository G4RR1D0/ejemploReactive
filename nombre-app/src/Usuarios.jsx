import { useState } from "react";
import "./Usuarios.css";

function Usuarios(){
    const [usuarios, setUsuarios]= useState([{
    id:1,
    Nombre:"yane",
    Apellidos:"Garrido Hernandez",
    Dirección:"21 de Marzo",
    Telefono:"7641098593",
    Email:"yanethgarrido027@gmail.com",
  },

  {
     id:2,
    Nombre:"Lalo",
    Apellidos:"Cruz Gonzalez",
    Dirección:"AV.universidad tecnologica",
    Telefono:"7641123456",
    Email:"lalo@gmail.com",
  },

    ]);
const eliminarUsuario = (id) =>{
    const nuevoUsuarios = usuarios.filter((u)=> u.id !== id);
    setUsuarios(nuevoUsuarios);
};

return(
    <div className="usuarios-container">
    <h2>Usuarios</h2>

    <table className="tabla-usuarios">
    <thead>
<tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Apellidos</th>
    <th>Dirección</th>
    <th>Telefono</th>
    <th>Email</th>
    <th>Editar</th>
    <th>Eliminar</th>
</tr>
    </thead>

       <tbody>
        {usuarios.map((usuario)=>(
            <tr key={usuario.id}>
                
            </tr>

        ))}
        
        
        </tbody> 


    </table>
    </div>
)



}
