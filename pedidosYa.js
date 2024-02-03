const stock = 100;
const venta = true;
const cantidad = 20;

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (venta) {
            const nuevoStock = stock - cantidad;
            console.log(`Se ha vendido ${cantidad} productos. Quedan en stock ${nuevoStock} productos.`);
            resolve; // Resuelve la promesa con el nuevoStock
        } else {
            reject('No se han vendido productos'); // Rechaza la promesa si no hay venta
        }
    }, 1500);
});

promesa
    .then((confirmacion) => {
        console.log(confirmacion);
    })
    .catch((rechazo) => {
        console.log(rechazo);
    });




