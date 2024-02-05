const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contrasena_mysql',
  database: 'empleados_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

app.use(express.json());

app.get('/buscar', (req, res) => {
  const query = req.query.query;

  // Realizar la búsqueda en la base de datos
  const sql = `SELECT * FROM empleados WHERE nombre LIKE '%${query}%'`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la consulta' });
    } else {
      const cantidad = result.length;
      const nombres = result.map((empleado) => empleado.nombre);

      res.json({ cantidad, nombres });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
