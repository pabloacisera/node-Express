const myUrl= new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(myUrl.hostname);
console.log(myUrl.pathname);

console.log(myUrl.searchParams); //obtenemos la consulta en si

console.log(myUrl.searchParams.get('ordenar')); //se obtiene vistas;


