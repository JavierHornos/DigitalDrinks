import './ItemCount.css'
import React from 'react'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    

    const incrementar = () => {
        if(contador < stock ) {
            setContador(contador + 1 );
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <>
    
    {stock === 0 ? (<p style={{color: "red"}}>Sin Stock: {stock}</p>):(<p style={{color: "green"}}>Disponibles: {stock - contador}</p>) }
    <br/>

    <div className='cajaContandor'> 
        <button onClick={ incrementar }> + </button>
        <p> {contador} </p>
        <button onClick={ decrementar }> - </button>
    </div>
    <br/>
    
    {stock > 0 && <button onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button>}
    
    
    
    
    </>
  )
}



export default ItemCount