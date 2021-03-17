const {
    request
} = require("express");

// Importamos para usar express
const express = require('express')

const PORT = 5000;

// Creamos una aplicacion de express
const app = express();

app.get("/", (request, response) => {
    // Devolverá un texto plano en
    response.status(200).send("Home");
});

app.get("/info", (request, response) => {
    // Devolverá un JSON 
    response.setHeader("Content-Type", "application/json")
    response.status(200).send(JSON.stringify({version: "0.0.1", appName: "Test NodeJS"}));
});

app.get("/detail", (request, response) => {
    response.status(200).send("Detail");
});

// ------ Pagina 404 (Siempre va ultimo de todo, luego de las rutas) -------
app.use((request, response) => { // Con use tomamos GET, POST, DELETE, etc.. 
    response.status(404).send("NOT FOUND");
});

// ---- Cuando empezamos a escuchar al puerto ------
app.listen(PORT, () => {
    console.log('running on ' + PORT);
});