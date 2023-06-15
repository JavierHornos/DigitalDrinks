# Digital Drinks
Este es un proyecto de ecommerce que se utiliza para el curso de React. La aplicación permite ver una lista de productos de bebidas alcoholicas y realizar compras en línea. Los productos y las órdenes de compra se almacenan en Firebase.

## Tecnologías utilizadas
- React
- React Router
- React Hook Form
- Sweet Alert 2
- Firebase

## Funcionalidades
- Ver una lista de productos disponibles
- *Registrar* un nuevo Usuario validando todos los campos y guardarlo en base de datos
- *Loguearse* validando los datos ingresados y navegar con el usuario guardado en el localStorage
- Si estas logueado *ves links* del NavBar que cuando no estas logueado no ves
- Pudes *desloguearte*
- *Agregar productos* al carrito de compras
- *Ver el carrito* de compras
- *Realizar la compra* retornando una orden de compra
- *Ver mensajes con Sweet Alert 2* cada vez que agregas un producto, cuando te logueas, cuando te deslogueas y cuando te llega la orden de compra realizada
- Se pueden *ver el stok disponible* en verde y en rojo cuando no hay stock
- Cuando vas a agregar la cantidad de productos *ves cuanto articulos te quedan a medida que vas seleccionando la cantidad*.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm start para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.