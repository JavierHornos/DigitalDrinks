import React from 'react'
import { useState, useEffect } from 'react'
import './Profile.css'
import Swal from "sweetalert2";

const Profile = () => {
    const [nombre, setNombre] = useState('');

    
    useEffect(() => {
            
            if (window.localStorage.getItem('login',)){
              const data = window.localStorage.getItem('login',)
                const data2 = JSON.parse(data)
                 let user = data2.userToLogin.email
                     console.log(user)
                 setNombre(user)
                 Swal.fire({
                  icon: 'success',
                  title: 'Has iniciado sesión correctamente',
                  html: `<p>Bienvenido: <b>${nombre}<b/><p/>`,
                  footer: '<b>¡Gracias por visitarnos!<b/>'
              }) 
            } else {
              console.log("siga")
              Swal.fire('Estas navegando como Invitado')
            }
            
    }, [nombre]);
    

  return (
    <div>
        <h4 className='bienvenido'>{nombre}</h4>
    </div>
  )
}

export default Profile