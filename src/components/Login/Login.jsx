import { useForm } from "react-hook-form"
import "./Login.css"
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { useState, useEffect } from "react"
import Swal from "sweetalert2";
import CryptoJS from 'crypto-js'


const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const { register, handleSubmit } = useForm();
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const descifrar = (texto) => {
    let bytes = CryptoJS.AES.decrypt(texto, 'Registro');
    let textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado
}
  
  useEffect(() => {

    const misUsuarios = query(collection(db, "Usuarios"))

    getDocs(misUsuarios)
      .then(respuesta => {
        setUsuarios(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
  }, [usuarios])


 

  const enviar = async (data) => {
    await sleep(100);
    let usuarioAEntrar = data
    console.log(usuarioAEntrar)
    let email = usuarioAEntrar.email
    console.log(email)


    let userToLogin = usuarios.find(prod => prod.email === usuarioAEntrar.email);
    console.log(userToLogin)
    if (userToLogin) {
      console.log("email encotrando")
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'email incorrecto',
      })
    }


    let claveBase = descifrar(userToLogin.contraseña);
    console.log(claveBase)
    let claveBody = usuarioAEntrar.password;
    console.log(claveBody)

    if (claveBase === claveBody) {
      console.log("Claves correcta")
      window.localStorage.setItem('login', JSON.stringify({ userToLogin }))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Contraseña incorrecta',
      })
    }
    await sleep(2000);
    window.location.href='/'
  }




  return (

    <div className='Login'>
      <h1 className='titulo'>Login</h1>

      <form id="form" className='formulario' onSubmit={handleSubmit(enviar)}>
        <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
        <input type="password" placeholder='ingresa tu clave' {...register("password")} />
        <button type='submit'> enviar </button>
      </form>

    </div>


  )
}

export default Login