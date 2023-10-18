//crea una constante llamada math de tipo objeto 
const math = {};

//define una funcion flecha 
    const invertirNumero = numero => {
//Esta declarando una variable llamada invertido y se le esta dando el valor inicial 0 
    let invertido = 0;
//esta iniciando un bucle en el que la condicion de ejecucion es que el valor de la varibale 'numero' no sea igual a cero
    while (numero != 0) {
//construir un numero invertido tomnado uno a uno los digitos del numero original 
      invertido = 10 * invertido + numero % 10
//divide el valor da la variable 'numero' por 10 y redondear hacia abajo la funcion 
      numero = (Math. floor (numero / 10))
     }
//retorna la varibale nombrada invertido 
     return invertido
  };
//crea una funcion flecha que toma como argumento 'numero'
    const invertirNumeroComoTexto = numero => {
/**llama la constante numeroInvertidoComoTexto toma el argumento nuemro toSring convierte el valor de la variable
 * en una cade de texto,
 * split divide una cadena en un arreglo de caracteres individuales
 * reverse invierte el orden de los elementos en un arreglo
 * join une los elementos de un arreglo en una cadena utilizando el argumento proporcionado como separador 
  */
 //crea una constante de los anteriores metodos 
    const numeroInvertidoComoTexto = numero.toString().split("").reverse(). join("");
// retorna la constante anaterior con los metodos 
    return numeroInvertidoComoTexto;
  };
//Define una funcion flecha que toma como argumento 'texto'
    const invertirTexto = texto => {
//utiliza el metodo spliten una cadena de texto y la divide en un arreglo 
    const splitText = texto.split('');
//utiliza el metodo reverse y se convierte en una una version invertida de splittext
    const reversedText = splitText.reverse();
//utiliza el metodo join en un arreglo para unir loes elementos de arreglo en una cadena de texto 
    const joinedText = reversedText.join('');
//retorna el anterior metodo 
    return joinedText;
  };
//define una funcion flecha con argumento arregio
    const invertirArregio = arreglo => {
//utiliza el metodo reverse en un metodo llamado arreglo 
    const reverseObject = arreglo.reverse();
    return reverseObject;
  };
//define una funcion flecha con argumento data 
    const conversionDatos = data => {
//una variable llamada dats typeof se utiliza para obtener una cadena de texto que represente el tipo de datos en un valor 
    let dataType = typeof data;
//declara una variable 
    let dataVar;
    
/**data === '' verfica si data es una cadena de texto vacia 
 * data null verifica si dta es null 
 * data undefined verifica si data es undefined
 * data.length verifica si la propiedad length de data es igaual a cero 
 * esto se utiliza para verificar si un arreglo, una cadena de texto u otros objetos tienen longitud de cero o estan vacios 
 */

    if (data === '' || data === null || data === undefined || data. length === 0) {
        dataVar = 'El valor ingresado está vacio o incorrecto';
    }else {
        console.log(`El valor ingresado es de tipo: ${dataType}, con valor de: ${data}`.bgCyan);
        switch(dataType) {
  //es una etiqueta que representa un valor particular que se compara con la expresion en el switch 
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArregio(data);
                break;
//se utiliza para para definir el codigo que se ejecutara cunado no hay coincidencias entre las expresion y nunguno de los case
            default:
                dataVar = 'el valor ingresado no se puede invertir';

        }
    }
    return dataVar;
    }

    math.invertirNumero = invertirNumero;
    math.invertirNumeroComoCadena = invertirNumeroComoTexto;
    math.invertirTexto = invertirTexto;
    math.invertirArreglo = invertirArregio;
    math.conversionDatos = conversionDatos;

    module.exports = math;