let promesaCumplida = true; // Cambiado a false para probar el rechazo

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('promesa cumplida');
        } else {
            reject('promesa rechazada');
        }
    }, 3000);
});

miPromesa
.then((valor) => {
    console.log(valor);
})
.catch((razon) => {
    console.error(razon); // Manejar el rechazo de la promesa
});

/**otra forma es guarda en variante la funcion aceptada y rechazada y luego pasarla al .then(), ejemplo. */

let manejarCumplimiento = (valor) => {
    console.log(valor);
};

let manejarRechazo = (razon) => {
    console.log(razon);
};

miPromesa.then(manejarCumplimiento, manejarRechazo);




    
