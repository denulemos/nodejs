//-------- Importamos modulo de nucleo y lo guardamos en una variable ---------
var http = require('http');
// ------- Importamos modulo local de forma total y lo guardamos en una variable para su uso -------
var operaciones = require('./ModuloLocalOperaciones');
// --------- Si solo quiero importar la suma y no el resto de Operations ---------
var {
    suma
} = require('.ModuloLocalOperaciones');

const PORT = 4000;

// ------- Createserver, creamos un servidor localhost -----------
var server = http.createServer((request, response) => {

    // ----- Trackear las peticiones por consola -------
    console.log(request.url);

    // Devolvemos un response distinto dependiendo del path 
    if (request.url === "/") {
        // -------- Definimos que le devolvemos al usuario --------
        //pasamos un statuscode y un JSON con la response, en este caso, html
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        // Le devolvemos algo para la vista
        response.write("<html> <head> <meta charset='utf-8'/></head><body>home</body></html>");
    } else if (request.url === "/info") { //localhost:4000/info
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("<html> <head> <meta charset='utf-8'/></head><body>info</body></html>");
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
        response.write("<html> <head> <meta charset='utf-8'/></head><body>404 not found</body></html>");
    }

    //Terminamos el response 
    response.end();
});

// usamos las funciones de operations
console.log("Suma 4 + 4", suma(4, 4));
console.log("Resta 4 - 4", operaciones.resta(4, 4));

server.listen(PORT); //localhost:4000