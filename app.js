//importar el paquete colors
require ('colors');

//importar las funciones y propiedades de math
const math = require('./modulos/math.js')

//define una funcion asincrona en funcion flecha 
const main = async () => {
    console.log('hola SENA CBA\n'.red);


//crea una variable de tipo arreglo 
const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
//se asigna temporalmente a la variable en cada iteracion del bucle 
for (const numero of numeros) {
//crea una constande que llama de el modulo math 
   const invertidoComoNumero = math. invertirNumero (numero);
   const invertidoComoCadena = math. invertirNumeroComoCadena (numero);
//muestra en la consola la funcion que le es requrida 
   console. log ("El número '%s' es '%s' invertido como número, y '%s' como cadena ".bgGreen,
             numero, invertidoComoNumero, invertidoComoCadena);

}
//crea una variable texto de tipo arreglo 
const textos = ['Hola Sena', 'Ficha 2798618', 'Análisis y desarrollo de software']
for (const texto of textos){
//crea una variable que llama del modulo math 
const textoInvertido = math. invertirTexto(texto);
//muestra en la consola las funciones requeridas 
console. log ("El texto '%s' se invierte como '%s*".bgBlue, texto, textoInvertido);
}
//crea una variable datos de tipo arreglo 
const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'] ]
for (let dato of datos ){
const datoConvertido = math. conversionDatos (dato);
console. log(`El resultado de conversion es : ${datoConvertido}`.bgMagenta);
}

}
main();
