const {
    request
} = require("express");
const bodyParser = require("body-parser");

// Importamos para usar express
const express = require('express')

const PORT = 5000;

// Creamos una aplicacion de express
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
// Para soportar un body en JSON
app.use(bodyParser.json());

app.get("/", (request, response) => {
    // Devolverá un texto plano en
    response.status(200).send("Home");
});

app.get("/info", (request, response) => {
    // Devolverá un JSON 
    response.setHeader("Content-Type", "application/json")
    response.status(200).send(JSON.stringify({
        version: "0.0.1",
        appName: "Test NodeJS"
    }));
});

app.get("/detail", (request, response) => {
    response.status(200).send("Detail");
});

app.post("/login", (request, response) => {
    //Body desde Postman => x-www-form-urlencoded o raw si queremos enviar un JSON

    // Cuando llamamos a send, no es necesario mandar un status code 200
    // response.send("Recibido ok");

    // Obtenemos lo que le enviamos en el body
    console.log(request.body);

    // Guardamos lo recibido en parametros
    const {username , password } = request.body;
    // "Chequeamos el login" y responsemos con un JSON
    username == 'denulemos' && password == 'password' ? response.send({status: "CREDENCIALES VALIDAS"}) : response.send({status: "CREDENCIALES INVALIDAS"});
})

// ------ Pagina 404 (Siempre va ultimo de todo, luego de las rutas) -------
app.use((request, response) => { // Con use tomamos GET, POST, DELETE, etc.. 
    response.status(404).send("NOT FOUND");
});

// ---- Cuando empezamos a escuchar al puerto ------
app.listen(PORT, () => {
    console.log('Estoy vivo en el puerto ' + PORT);
});