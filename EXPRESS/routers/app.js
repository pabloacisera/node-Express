const express=require('express');
const app=express();
const { infoCursos }= require('/cursos/cursos')
const r_mathematic=require('/routers/matematicas.js')
const r_programming=require('../routers/programacion.js')
const port= 3000;

app.use('/api/cursos/matematicas', r_mathematic);
app.use('/api/cursos/programacion', r_programming);


app.get('/', (req, res)=>{
    res.end('Mi primer Servidor con Node.js y Express. Proceso de enrutamiento...')
});

app.get('api/cursos', (req, res)=>{
    res.send(JSON.stringify(cursos));
});



app.listen(port, ()=>{
    console.log(`Server Listening, Port: ${port}...`)
});
