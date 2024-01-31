//console.log(process);

/*console.log(process.argv);/*['/opt/node/bin/node',
'/home/pabloc/Documentos/Descarga de Repositorios/node-Express/process.js'
]*/

/**si quisieramos recorrer todo los elementos , debemos recordar que posicion indice 0 y 1 estan 
 * ocupados por "node apps.js" entonce se comienza a iterar sobre el segundo indice, por ejemplo:*/

/*for(let i= 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

/**con process tambien podemos saber cuanta memoria se esta usando */

console.log(process.memoryUsage());