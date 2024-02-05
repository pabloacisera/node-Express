const http= require('http');

const server= http.createServer((req, res)=>{
    console.log('===> req(solicitud)');
    //console.log(req.url);
    //console.log(req.method);//get
    //console.log(req.headers);
    //console.log(res);
    //console.log(res.statusCode);//200
    /**podemos cambiar el status "const statusCode= 404;" */
    res.setHeader('content-type', 'aplication/json');/**configuramos un elemento de la cabezera, 
    por ejemplo el tipo de documento que le enviaremos al servidor */
    console.log(res.getHeaders());
    console.log('localhost:3000')
});

let PORT= 3000;

server.listen(PORT, ()=>{
    console.log(`Active Server in LocalHost/${PORT}===>`);
});

/**si en la barra del navegador  colocaramos locahost3000/ -- lo que sea-- se reflejara en el terminal, 
 * estoy quiere decir que el servidor esta activo y funcionando;
 */