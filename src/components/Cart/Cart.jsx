import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);
    let precioTotal = total.toLocaleString()

    if(cantidadTotal === 0) {

        return (
            <div className="retorno1">
                <br/>
                <h2 className="titulo"> No tenés productos en el carrito</h2>
                <Link to='/' className="verProductos"> Ver Productos </Link>
            </div>
        )
    }



  return (
    <>
    <div className="retorno2">
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <br/>
        <br/>
        <h3>Cantidad total: {cantidadTotal}</h3>
        <h2>Total : $ {precioTotal}</h2>
        <br/>
        <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
        <br/>
        <br/>
        <br/>
        
    </div >
        
    <div className="retorno3">
        <Link to='/checkout' className="finalizarCompra"> Finalizar Compra</Link>
        <br/>
        <br/>
        <Link to="/" className="finalizarCompra"> Seguir Comprando</Link>

    </div>
    </>
  )
}

export default Cart