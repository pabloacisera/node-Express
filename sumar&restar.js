let sumar=function(num1, num2){
    return num1 + num2;
}

let restar=function(num1, num2){
    return num1 - num2;
}

let multiplicar= function(num1, num2){
    return num1 * num2;
}

//module.exports.sumar=sumar;
//module.exports.restar=restar;

/**FORMA ALTERNATIVA DE EXPORTAR */

module.exports={
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
};
