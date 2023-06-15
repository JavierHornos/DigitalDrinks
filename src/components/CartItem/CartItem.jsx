import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="CartItem">
        
        <h3> {item.nombre} </h3>
        <img src={item.imagen} alt={item.nombre} className="imgCartItem" />
        <p>Cantidad: {cantidad}</p>
        <p>Precio: $ {item.precio}</p>
        <p>Total: $ {item.precio * cantidad}</p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <br/>
        <br/>
    </div>
  )
}

export default CartItem