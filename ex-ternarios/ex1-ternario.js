/**
 * Utiliza el operador ternario https://javascript.info/ifelse#conditional-operator  para conseguir el mismo resultado
 */

let edad = 21;
let mensaje = edad<18 ? "No puedes pasar" : "Puedes pasar";

if (edad >= 18) {
    mensaje = "Puedes pasar";
}

else {
    mensaje = "No puedes pasar";
}

console.log(mensaje);