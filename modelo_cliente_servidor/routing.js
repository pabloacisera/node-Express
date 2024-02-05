//IMPORTANTE SE DEBE ANALIZAR ESTE CODIGO EN CONJUNTO CON "cursos.js"

const http = require('http'); // Se llama al protocolo;
const cursos = require('./cursos'); // Se guarda la base de datos;

const servidor = http.createServer((req, res) => { // Creamos el servidor;
    const { method } = req; // Guardar los métodos para poder extraerlos y trabajar con ellos;

    switch (method) {
        case 'GET':
            // Cuando el método sea GET se lo manejará con la siguiente función
            // que todavía no está definida;
            return manejarSolicitud(req, res);
        default:
            console.log(`El método no puede ser manejado por el servidor: ${method}`);
    }
});

function manejarSolicitud(req, res) {
    let path = req.url;

    if (path === '/') {//si path es la direccion www...=>
        res.statusCode = 200;// se establece el estado y luego => res devuelve la direccion indicada mas arriba;
        res.end('Bienvenidos a mi primer servidor y API creado con Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos)); //cuando enecuentre un archivo json debera modficar para presentacion en cliente;
    } else if(path=== '/cursos/programacion'){
        res.statusCode=200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else {
        res.statusCode = 404;
        res.end('El recurso solicitado no existe');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => { //el puerto escucha la accion del cliente
    console.log(`El servidor está escuchando en el puerto: ${PUERTO}`);
});

