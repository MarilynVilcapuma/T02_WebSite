const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const ip = '3.227.115.5'; // IP de tu entorno en AWS

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public')); // Esto sirve los archivos estáticos de 'public'

// Manejar la ruta raíz y enviar 'index.html' desde la raíz del proyecto (fuera de 'public')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Ruta corregida para que apunte a la raíz
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`);
});