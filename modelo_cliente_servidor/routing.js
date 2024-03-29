//IMPORTANTE SE DEBE ANALIZAR ESTE CODIGO EN CONJUNTO CON "cursos.js"

const http = require('http'); // Se llama al protocolo;
const cursos = require('./cursos'); // Se guarda la base de datos;

const server = http.createServer((req, res) => { // Creamos el servidor;
    const { method } = req; // Guardar los métodos para poder extraerlos y trabajar con ellos;

    switch (method) {
        case 'GET':
            // Cuando el método sea GET se lo manejará con la siguiente función
            // que todavía no está definida;
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPost(req, res);
        default:
            console.log(`El método no puede ser manejado por el servidor: ${method}`);
    };
});

function manejarSolicitudGet(req, res) {
    let path = req.url;

    if (path === '/') {//si path es la direccion www...=>
        res.statusCode = 200;// se establece el estado y luego => res devuelve la direccion indicada mas arriba;
        return res.end('Bienvenidos a mi primer servidor y API creado con Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos)); //cuando enecuentre un archivo json debera modficar para presentacion en cliente;
    } else if(path=== '/cursos/programacion'){
        res.statusCode=200;//este estatus se establece por defecto asi que no es necesario asignarlo
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else {
        res.statusCode = 501; //si es necesario asignarlo;
        return res.end(`Error 501: el metodo no puede ser manejado por el servidor.`);
    }
}

function manejarSolicitudPost(req, res){
    const path = req.url;

    if (path === '/cursos/programacion') {
        let body = '';

        req.on('data', (contenido) => { // <-- Corregir aquí
            body += contenido.toString(); // <-- Corregir aquí
        });

        req.on('end', () => {
            console.log(body);
            console.log(typeof body); // <-- Corregir aquí
            return res.end('El servidor recibió una solicitud post para /cursos/programacion');
        });
    };
};


const PUERTO = 3000;

server.listen(PUERTO, () => { //el puerto escucha la accion del cliente
    console.log(`El servidor está escuchando en el puerto: ${PUERTO}`);
});