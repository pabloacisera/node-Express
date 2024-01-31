/**se utiliza para funciones que se ejcutaran luego de cierto periodo de tiempo */

/**LOS MAS IMPORTANTES SON:
 * A- setTimeOut(); ejecuta codigo luego de un numero especifico de milisegundos; "1s=1000mls"
 * B- setInmediate();
 * C- setInterval(); */

/**sintaxis*/

//setTimeout(function, restraso, argumento1, argumento2) es decir que luego de determinado tiempo a la funcion 
//especifica se le pasara determiandos argumentos;

let mostrarADestiempo=function(mensaje){
    console.log(`mensaje: ${mensaje}`);
};

setImmediate(mostrarADestiempo, 'este se ejecuta luego')

let mostrarPrimerMensaje=function(){
    console.log('este se ejecuta primero');
}
mostrarPrimerMensaje();

setTimeout(mostrarADestiempo, 1000, 'este mensaje es asincronico');

/**setInterval() ejecuta un codigo infinitas veces con un retraso en mls*/


let secuencia=function(str, num){
    console.log(`El mensaje "${str}" se repetira ${num} vez`);
};

setInterval(secuencia, 1250, 'programado', 1);






