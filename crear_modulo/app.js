/**primero llamamos al paquete http, luego en una variante incorporamos ese paquete y 
 * le asignamos el metodo createServer()
 Dentro de dicho metodo uitlizamos una funcion flecha (req, res)=>{*/

 const http=require('http');

 const servidor= http.createServer((req, res)=>{
    /**una vez realizada lo necesario en el servidor res.end() */
    res.end('Server Local Host');
 });

const PORT=3000;
 servidor.listen(PORT,()=>{
    console.log(`Server Local Host: port ${PORT}`);
 })