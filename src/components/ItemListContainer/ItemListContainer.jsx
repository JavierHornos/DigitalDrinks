import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [cate, setCate] = useState(null)

  const {idCategoria} = useParams()

    useEffect( () => {
      const misProductos = idCategoria ? query(collection(db, "DigitalDrinks"), where("idCat", "==", idCategoria)) : collection(db, "DigitalDrinks");

      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProductos(nuevosProductos);
          let cat = nuevosProductos[0].idCat
          //console.log(cat)
          setCate(cat)
        })
        .catch(error => console.log(error))
    },[idCategoria])

    //console.log(cate)
     
    if(idCategoria > cate) {
      return <h2 className='titulo'>La categoria no existe</h2>
    } else if (cate === null) {
      return <h2 className='titulo'>La categoria no existe</h2>
    }

  
  return (
    <>
      <h2 className="titulo">{greeting}</h2>
      <ItemList productos={productos}/>
    </>
  ) 
}

export default ItemListContainer