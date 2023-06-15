import { useContext } from "react"
import "./CartWidget.css"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CarritoContext)
  const {cantidadTotal} = useContext(CarritoContext)
   
    const imgCarrito = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682715613/carrito_sin_fondo_nzbwyy.png"
  return (
    <div>
        <Link to='/cart'>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className="numerito" >{ cantidadEnCarrito()  }</strong>
        }
        </Link>
    </div>
  )
}

export default CartWidget