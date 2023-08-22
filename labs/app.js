// Node js se ejecuta en cualquier computadora en vez de un navegador
// Por default todo es asincrono en node.js
console.log("hola desde node!");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','Hola desde node'); // escribir de forma sincrona en un archivo. 

// codigo asincrono: se puede ejecutar a cualquier momento no necesariamente de manera secuencial. Casi todas las operaciones que normalmente bloquearia el sistema, en node js no se bloquearian como write file.

console.log("Ya acabe de escribir");

setTimeout(()=>{console.error("h")},11000); // se ejecuta hasta los 11 segundos (milisegundos)

// funcion asincrona de manera ordenada
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}


const http = require('http'); // contiene funciones para recibir peticiones y mandar respuestas de http


// Createserver: recibe prototipo request y response. Request es un objeto 
const server = http.createServer((request, response) => { 
    console.log(request.url);
    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>
            Labs A01709338 
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <p>hola</p>
        <h2> Mis discos favoritos : </h2>
        <hr>
        <div class="columns">
            <div class="column">
                <div id= "Soundtracks"> soundtracks for the blind (1995)- swans</div>
                <div class="Soundtracks">
                    <figure class="image is-96x96">
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/11/19/f6/1119f602-b7dc-024d-1d7d-22c60e19fe2b/658457000120_cover.jpg/1200x1200bf-60.jpg">
                    </figure>

                <div id= "velvet"> The Velvet Underground (1969) - The Velvet Underground</div>
                <div class="velvet">
                    <figure class="image is-96x96">
                        <img src="velvet.jpg">
                    </figure>

                
                <div id= "siamesed"> Siamese Dream (1993)- The Smashing Pumpkins</div>
                <div class="siamesed">
                    <figure class="image is-96x96">
                        <img src="siamesed.jpg">
                    </figure>
                    
                <div id= "HR"> Hot Rats (1969)- Frank Zappa</div>
                <div class="HR">
                    <figure class="image is-96x96">
                        <img src="Hot_Rats_(Frank_Zappa_album_-_cover_art).jpg">
                    </figure>
                
                <div id= "doublen"> Double Nickels on the Dime (1984) - Minutemen</div>
                <div class="doublen">
                    <figure class="image is-96x96">
                        <img src="double.jpg">
                    </figure>

                <div id= "bm"> Double Nickels on the Dime (1984) - Minutemen</div>
                <div class="bm">
                    <figure class="image is-96x96">
                        <img src="bm.jpeg">
                    </figure>

                <div id= "sabbath"> Hellfire (2022) - Black Midi</div>
                <div class="sabbath">
                    <figure class="image is-96x96">
                        <img src="masterofreality.jpg">
                    </figure>
                
                
            </div>
        </div>
    </body>
    </html>
`);

    response.end();
} else if(request.url == "/new") {
    response.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>
            Labs A01709338 
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Registro de discos</h1>
                </div>
            </section>
        </main>
    </body>
    </html>`);

    response.end();
} else {
    response.statusCode = 404;
    response.write(`    
    <!DOCTYPE html>
    <html>
    <head>
        <title>
            Labs A01709338 
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Tu disco no se encontró :( </h1>
                </div>
            </section>
        </main>
    </body>
    </html>
    `);

    response.end();
}

});

server.listen(3000); // necesita de una funcion que escuche. El numero indica el puerto en el que se van a esuchar las peticiones (se recomienda mas de 1000 por si estan ocupados)

