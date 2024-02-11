const express=required('express');
const app= express;


const { matematicas }= require('../cursos/cursos.js').infoCursos;

const r_mathematic=express.router();

r_mathematic.get('/', (req, res)=>{
    res.send(JSON.stringify(matematicas));
});

r_mathematic.get('/:titulo', (req, res)=>{
    const titulo= res.params.titulo;
    const resultados= matematicas.filter(curso=> curso.titulo=== titulo);

    if(resultados.length===0){
        return res.status(404).send(`No se encontro ningun tema de ${titulo}`);
    }

    /**si quisieramos que la respuesta se devuelva ordenada, por vistas o por nivel por ejemplo: */
    if(req.query.ordenar=== 'titulo'){
        return res.send(JSON.stringify(resultados.sort((a, b)=>b.vistas, a.vistas)));
    };

    res.send(JSON.stringify(resultados));

}); 

module.exports.r_mathematic=r_mathematic;