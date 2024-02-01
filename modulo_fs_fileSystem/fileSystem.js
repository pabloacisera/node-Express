/**todos los metodos de este modulo, como leer, modificar, etc son asincronos */
/**si se quisiero convertir alguno de estos metodos a unos sincrono
 * solo se debera agregar sync, por ejemplo 
 * para el caso de fs.rename === fs.renameSync();
 */

/**VAMOS A LEER UN ARCHIVO HTML */
/**aqui la funcion especifica
que se va a hacer si la pagina no se puede leer */

const fs=require('fs');

fs.readFile('./paginaParaLeer.html', 'utf-8', (err, content)=>{
    if(err){
        console.log('Lo siento, se ha producido un error...');
        throw err;
    } else {
        console.log(content);
    }
});

/**CAMBIAR NOMBRE DEL ARCHIVO *//**de la misma manera la funcion primera especifica que se va 
hacer si no se pudo renombrar la pagina... */

fs.rename('./paginaParaLeer.html', 'main.html', (err)=>{
    if(err){
        throw err;
    } 
    console.log('pagina renombarada...' );
   
});


//**COMO AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO */
/**debemos agreagar un etiqueta p al final del archivo... */

fs.appendFile('./main.html' ,'<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    } 
    console.log('archivo_actualizado...');
});




