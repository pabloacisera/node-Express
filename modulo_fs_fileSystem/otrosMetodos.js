/**vimos que con appendFile() agregabamos un elemento al final 
 * con el siguiente metodo cambiamos todo el contenido
*/

const fs=require('fs');


//fs.writeFile('main.html', '<!DOCTYPE html><html //lang="en"><head><metacharset="UTF-8"><meta name="viewport" //content="width=device-width, initial-scale=1.0"><title>app //modificada</title></head><body><h1>He modificado esta //web!!! SOY CRACK!!</h1></body></html>',(err)=>{
//    if(err){
//        throw err;
//    } 
//    console.log('pagina MODIFICADA...' );
//});

/**COMO ELIMINAR UN ARCHIVO */

fs.unlink('../index.html', (err)=>{
    if(err){
        throw err;
    }
    console.log('Se ha eliminado la pagina exitosamente...')
});


/**LO SIGUIENTE ES MUY IMPORTANTE. SI NECESITAMOS QUE EL CODIGO SE EJECUTE EN UN ORDEN PREESTABLECIDO DEBERA AGRAGARSE SYNC=== fs.readFileSync() */


/**por otro lado en las funciones sincronas no es 
 * necesario la utilizacion de funciones dentro del codigo
 */