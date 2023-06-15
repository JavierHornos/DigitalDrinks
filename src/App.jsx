import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Registro from './components/Registro/Registro';
import Login from './components/Login/Login';




function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos" />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting="Productos" />} />
          <Route path='/categoria/*' element={<h2 className='titulo'>La categoria no existe </h2>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
          <Route path='/item/*' element={<h2 className='titulo'>El producto no existe </h2>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={ <Checkout/> } />
          <Route path='/registro' element={ <Registro/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='*' element={<h2 className='titulo'>Sitio en Construcción </h2>}  />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
   </>
  );
}

export default App;
