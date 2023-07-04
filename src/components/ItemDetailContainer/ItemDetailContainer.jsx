import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc, query, collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [idProducto, setIdProducto] = useState(null);
    const [cantidad, setCantidad] = useState(null)

    const {idItem} = useParams();

    useEffect( ()=> {
        const nuevoDoc = doc(db, "DigitalDrinks", idItem);

        getDoc(nuevoDoc)
          .then(res => {
            const data = res.data();
            const nuevoProducto = {id: res.id, ...data}
            setProducto(nuevoProducto)
            let idProd = nuevoProducto.id
            //console.log(idProd)
            setIdProducto(idProd)
          })
          .catch(error => console.log(error))
    },[idItem])

    useEffect( () => {
      const misProductos = query(collection(db, "DigitalDrinks"))
      //console.log(misProductos)

      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          let cant = nuevosProductos.length
          setCantidad(cant)
        })
        .catch(error => console.log(error))
    },[cantidad])

    if(idProducto > cantidad || (isNaN(idProducto))){
      return <h2 className='titulo'>El producto no existe</h2>
    }

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer