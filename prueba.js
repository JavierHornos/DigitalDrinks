let precio = "20000,45";
let precioFormateado = precio.toLocaleString();

console.log(precioFormateado);  // Resultado: "20,000"

let precioFormateado2 = precio.toLocaleString('de-DE');
console.log(precioFormateado2);  // Resultado: "20.000"

let preioFormateado3 = parseInt(precio)
console.log(preioFormateado3)


