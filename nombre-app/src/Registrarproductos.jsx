import React,{useState} from "react";
import api from "./Services/api";
import './Registrarproductos.css';

function Registrarproductos(){
    const[title, setTitle] = useState ();
    const[price, setPrice] = useState ();
    const[title, setTitle] = useState ();
    const[title, setTitle] = useState ();
    

}
const hadleSumit= async (e) => {
    e.preventDefaul();
    const nuevoProducto = {title,price, descripcion,category,image};
try{
    const respuesta = await api.post('/products', nuevoProducto);
    console.log('Producto registrado:', respuesta.data);
    alert('¡Producto guardado cin exito!');


}catch (error){

}

return (
    <div>
        <h2>Registrar Producto</h2>
        <from onSubmit={hadleSumit}>
            <input>
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(e)} => setTitle(e.target.value)}
            </input>
            <input>
            type="text"
            placeholder="Imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            </input>
            <input>
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            </input>
            <input>
      type="text"
      
        </from>
    </div>
)
    
}