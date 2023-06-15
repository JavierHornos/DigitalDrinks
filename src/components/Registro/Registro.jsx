import { useForm } from "react-hook-form"
import "./Registro.css"
import Swal from "sweetalert2";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import CryptoJS from 'crypto-js'




const Registro = () => {

    const { register, formState: {errors}, handleSubmit } = useForm(); 
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const cifrar = (texto) => {
        let textoCifrado = CryptoJS.AES.encrypt(texto, 'Registro').toString()
        return textoCifrado
    }
  
    const onSubmit = async(data) => {
        await sleep(100);
        if (data.contraseña !== data.confirmarContraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden',
              })
        } else {
            console.log(data)            
            await addDoc(collection(db, "Usuarios"), {
                nombre: data.nombre,
                apellido: data.apellido,
                domicilio: data.domicilio,
                email: data.email,
                contraseña: cifrar(data.contraseña),
            }) 
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado',
                html: `<p>Se ha creado el usuario correctamente <p/>`,
                footer: '<b>Inicie sesion<b/>'
            })    
        }
        console.log("enviar a home")
        await sleep(4000);
            window.location.href='/'
    }

    

  return (
    <div>
        <h1 className="titulo">Registro</h1>
        


        <form onSubmit={handleSubmit(onSubmit)} className="formulario">

            <div className="form-group">
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p style={{color: "red"}}>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p style={{color: "red"}}>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>

            <div className="form-group">
                <label>Apellido</label>
                <input type="text" {...register('apellido', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.apellido?.type === 'required' && <p style={{color: "red"}}>El campo apellido es requerido</p>}
                {errors.apellido?.type === 'maxLength' && <p style={{color: "red"}}>El campo apellido debe tener menos de 10 caracteres</p>}
            </div>

            <div className="form-group">
                <label>Domicilio</label>
                <input type="text" {...register('domicilio', {
                    required: true,
                    maxLength: 50
                })} />
                 {errors.domicilio?.type === 'required' && <p style={{color: "red"}}>El campo domicilio es requerido</p>}
                 {errors.domicilio?.type === 'maxLength' && <p style={{color: "red"}}>El campo domicilio debe tener menos de 10 caracteres</p>}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" {...register('email', {
                    required: true,
                    maxLength: 50,
                    pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
                })} />
                 {errors.email?.type === 'required' && <p style={{color: "red"}}>El campo email es requerido</p>}
                 {errors.email?.type === 'maxLength' && <p style={{color: "red"}}>El campo email debe tener menos de 10 caracteres</p>}
                 {errors.email?.type === 'pattern' && <p style={{color: "red"}}>El formato de email es incorrecto</p>}
            </div>

            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" {...register('contraseña', {
                    required: true,
                    maxLength: 10,
                    minLength: 6,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/i 
                    
                })} />
                {errors.contraseña?.type === 'required' && <p style={{color: "red"}}>El campo contraseña es requerido</p>}
                {errors.contraseña?.type === 'maxLength' && <p style={{color: "red"}}>El campo contraseña debe tener menos de 10 caracteres</p>}
                {errors.contraseña?.type === 'minLength' && <p style={{color: "red"}}>El campo contraseña debe tener mas de 6 caracteres</p>}
                {errors.contraseña?.type === 'pattern' && <p style={{color: "red"}}>Debe tener algun por lo menos algun número y letra</p>}
            </div>

            <div className="form-group">
                <label>Confirmar Contraseña</label>
                <input type="password" {...register('confirmarContraseña', {
                    required: true,
                    maxLength: 10,
                    minLength: 6,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/i 
                })} />
                {errors.confirmarContraseña?.type === 'required' && <p style={{color: "red"}}>El campo confirmarContraseña es requerido</p>}
                {errors.confirmarContraseña?.type === 'maxLength' && <p style={{color: "red"}}>El campo confirmarContraseña debe tener menos de 10 caracteres</p>}
                {errors.confirmarContraseña?.type === 'minLength' && <p style={{color: "red"}}>El campo contraseña debe tener mas de 6 caracteres</p>}
                {errors.confirmarConstraseña?.type === 'pattern' && <p style={{color: "red"}}>Debe tener algun por lo menos algun número y letra</p>}
            </div>

            <button type="submit" value="Enviar">Registrarme</button>

        </form>
        
    </div>
  )


}

export default Registro