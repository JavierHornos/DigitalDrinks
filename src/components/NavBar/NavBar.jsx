import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import Profile from "../Profile/Profile"
import Swal from "sweetalert2";
import { useState } from "react";

function NavBar() {
    const imgLogo = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682700045/DigitalDrinksLogo_odwwyh.png"

    const data = window.localStorage.getItem('login',)
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const [modoOscuro, setModoOscuro] = useState(false)

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro)
    }
    const estilo = modoOscuro ? "nav visible" : "nav";


    const  desloguear  = async () =>  {
        window.localStorage.clear();
        Swal.fire('Estas navegando como Invitado')
        await sleep(2000);
        window.location.href='/'
     }
     

    

  return (
    <header>
        <div className="logoBoton">
        <Link to={"/"}><img className="imgLogo" src={imgLogo} alt="Digital Drinks" /></Link>

        <button className="abrir-menu" onClick={cambiarModo}> <i class="bi bi-list"></i> </button>
        </div>

        <nav className={estilo}>
            
            <button className="cerrar-menu" onClick={cambiarModo}> <i class="bi bi-x-circle-fill"></i>  </button>

        <nav className="categorias">
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/categoria/1`}>VINOS</NavLink>
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/2`}>ESPUMANTES</NavLink>
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/3`}>WHISKIES</NavLink>    
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/4`}>GIN</NavLink>    
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/5`}>LICORES</NavLink>       
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/6`}>VODKA</NavLink>  
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/7`}>RON</NavLink>  
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/8`}>APERITIVOS</NavLink>  
                </li>
                <li>
                   <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/9`}>CERVEZAS</NavLink>   
                </li>
            </ul>
        </nav>

                  {data ? (  

        <nav className="profile">
            <ul>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/`}>{<Profile/>}</NavLink>
                </li>
                <li>
                      <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/registro`} onClick={desloguear}>desloguear</NavLink> 
              </li>
              <li className="cartWidget"><CartWidget/></li>     
            </ul>
        </nav>

                  ) : 
                       
                  (

        <nav className="ingresa">
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/login`}>INGRESÁ</NavLink>
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/registro`}>REGSITRATE</NavLink> 
                </li>
                <li className="cartWidget"><CartWidget/></li>
                     
            </ul>
        </nav>
   
                    )}

        </nav>
       
    </header>
  )
}

export default NavBar