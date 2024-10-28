const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const ip = 'localhost';
const port = 3000;
const fs = require('fs');

// Configuración de middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname)));

// Configuración de conexión a MySQL con un pool
let pool = mysql.createPool({
    host: "database-node.c1cj3rhxrftu.us-east-1.rds.amazonaws.com",
    database: "ODS1",
    user: "admin",
    password: "Holamundocruel1",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Manejo de la solicitud POST del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, apellidos, celular, gmail, descripcion } = req.body;

    // Consulta SQL para insertar los datos del formulario en la base de datos
    const query = 'INSERT INTO Contactanos (nombre, apellidos, celular, gmail, descripcion) VALUES (?, ?, ?, ?, ?)';

    pool.query(query, [nombre, apellidos, celular, gmail, descripcion], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack);
            res.status(500).send('Ocurrió un error al procesar tu consulta.');
            return;
        }

        // Redirige a la página de confirmación o éxito
        const htmlPath = path.join(__dirname, 'index.html');
        fs.readFile(htmlPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo HTML: ' + err);
                res.status(500).send('Ocurrió un error al procesar tu consulta.');
                return;
            }
            res.send(data);
        });
    });
});