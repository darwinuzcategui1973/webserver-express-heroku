// archivo principal. 
// Para crear l servidor http

const http = require('http');

//crear servidor
http.createServer((solicitudes, respuestas) => {

        respuestas.writeHead(200, { 'Content-Type': 'application/json' });


        let jsonSalida = {
            nombre: 'Darwin Uzcategui',
            edad: 46,
            sexo: 'Masculino',
            activo: true,
            url: solicitudes.url
        }

        // respuestas.write('hola Servidor!');
        respuestas.write(JSON.stringify(jsonSalida));

        respuestas.end();



    })
    .listen(8080);

console.log('Escuchando en el Puerto 8080');