import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, descripcion, precio, imagen, stock}) => {
  return (
    <div className="cardProducto" > 
      <h3>Nombre: {nombre}</h3>
        <img className="imgProducto" src={imagen} alt={nombre} />
        <p>Descripción: {descripcion}</p>
        <p>Precio: $  {precio}</p>
        <p>ID: {id}</p>
        {stock === 0 ? <h5 style={{color: "red"}}>Sin Stock</h5> : <p style={{color: "green"}}>Disponibles : {stock}</p>} 
        <Link to={`/item/${id}`} className="btnProducto"> Ver Detalles </Link>
    </div>
  )
}

export default Item
