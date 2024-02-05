const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3306   ;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11879061',
  database: 'empleados_db'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida con el ID ' + db.threadId);
});

// Ruta de ejemplo para manejar una solicitud desde el front-end
app.get('/buscar-empleados', (req, res) => {
  // Realizar una consulta a la base de datos
  db.query('SELECT * FROM empleados WHERE anos_experiencia < 5', (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ' + err.stack);
      res.status(500).send('Error interno del servidor');
      return;
    }
    // Enviar los resultados al front-end
    res.json(resultados);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
