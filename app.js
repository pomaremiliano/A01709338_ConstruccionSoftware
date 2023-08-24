const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/new',(request,response,next)=> {
    const html = `   <!DOCTYPE html>
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
    </html>`;
    response.send(html);
});

app.post('/new',(request,response,next)=>{
    console.log(request.body);
    response.redirect('/');
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


const rutasPeliculas = require('./routes/peliculas.routes');

app.use('/peliculas', rutasPeliculas);

app.listen(3000);