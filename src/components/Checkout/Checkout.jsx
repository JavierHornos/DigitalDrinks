import { useState, useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import "./Checkout.css"
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";


const Checkout = () => {
    const {carrito, vaciarCarrito, total, } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorFormulario = (e) => {
        e.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto)=> total + (producto.item.precio * producto.cantidad), 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "DigitalDrinks", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(()=> {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef)=> {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        setError("");
                    })
                    .catch((error) => {
                        console.error("error al crear la orden", error);
                        setError("se produjo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.error("Error al actualizar el stock", error);
                setError("Se produjo un error al actualizar el stock de los productos")
            })
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion(""); 
    }

    const mostrarMensaje = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada exitosamente',
            html: `<p>Su número de orden es: <b>${ordenId}<b/><p/>`,
            footer: '<b>¡Muchas gracias por confiar en nosotros!<b/>'
        }) 
             return <Navigate to="/"/>
    }
    

  return (
    <div>
        <h2 className="titulo">Checkout</h2>
        <form onSubmit={manejadorFormulario} className="formulario">
            {carrito.map(producto => (
                <div key={producto.item.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <img className="imgCheckout" src={producto.item.imagen} alt={producto.item.nombre} />
                    <p>Precio $: {producto.item.precio}</p>
                    <hr/>
                </div>
            ))}
            <p>Total Compra: {total}</p>
            <hr/>
            <div className="form-group">
                <label htmlFor=""> Nombre</label>
                <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor=""> Apellido </label>
                <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor=""> Teléfono </label>
                <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor=""> Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor=""> Email Confirmación </label>
                <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>

            {error && <p style={{color: "red"}}> {error} </p>}
            <button type="submit"> Finalizar Compra</button>
        </form>
        {   
             ordenId && (mostrarMensaje())
        }
    </div>
  )
}

export default Checkout