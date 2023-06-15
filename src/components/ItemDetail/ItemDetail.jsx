import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"


const ItemDetail = ({id, nombre, descripcion, precio, imagen, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio, imagen, stock}
    agregarProducto(item, cantidad);
  }

  return (
    <div className="contenedorItem">
        <h2 className="nombre">Nombre: {nombre}</h2>
        <h3>Precio: $ {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Descripción: {descripcion}</p>
        <img className="img" src={imagen} alt={nombre} />
        <br/>
        {
          agregarCantidad > 0 ? (<Link to="/cart" className="terminarCompra">Ver Articulos</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        }
        <br/>
        
    </div>
    
  )
}

export default ItemDetail