let usuarios = [];

let crearUsuario = function (nombre, apellido, edad, direccion) {
    let nuevoObjeto = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        direccion: direccion
    }
    return new Promise((resolve, reject) => {
        console.log('Creando nuevo usuario...');
        setTimeout(() => {
            if (nuevoObjeto) {
                resolve(nuevoObjeto);  
            } else {
                reject('No se ha podido crear usuario');
            }
        }, 2500);
    });
}

let incorporarUsuario = function (nuevoObjeto) {
    console.log('Incorporando usuario a Base de Datos')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            usuarios.push(nuevoObjeto);
            resolve(`Se ha incorporado el usuario: ${nuevoObjeto.nombre} ${nuevoObjeto.apellido}`);
        }, 3000);  // Reduced the timeout for faster execution
    });
}

crearUsuario('carlos', 'carlitos', 27, 'desconocida')
    .then(nuevoObjeto => {
        console.log('Actualizando la base de datos...');
        return incorporarUsuario(nuevoObjeto);
    })
    .then(incorporar => {
        console.log(incorporar);
        console.log(usuarios);  
    })
    .catch(err => {
        console.log(err);
    });



