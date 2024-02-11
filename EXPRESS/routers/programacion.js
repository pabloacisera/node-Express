const express=required('express');
const app= express;

const { programacion }= require('../cursos/cursos.js').infoCursos;/**Desestructuracion */

const r_programming=express.router();/**enru */

r_programming.get('/', (req, res)=>{
    res.send(JSON.stringify(programacion));
});

r_programming.get('/:lenguaje', (req, res)=>{
    const lenguaje= res.params.lenguaje;
    const resultados= programacion.filter(curso=> curso.lenguaje=== lenguaje);

    if(resultados.length===0){
        return res.status(404).send(`No se encontro ningun lenguaje: ${tema}`);
    }

    /**si quisieramos que la respuesta se devuelva ordenada, por vistas o por nivel por ejemplo: */
    if(req.query.ordenar=== 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b)=>b.vistas, a.vistas)));
    };

    res.send(JSON.stringify(resultados));
});

module.exports.r_programming=r_programming;