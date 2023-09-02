const express = require('express');
const router = express.Router();
const path = require('path');
let discos = [
    {
        nombre: "Soundtracks for the blind (1995)- swans",
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/11/19/f6/1119f602-b7dc-024d-1d7d-22c60e19fe2b/658457000120_cover.jpg/1200x1200bf-60.jpg",
    }, 
    {
        nombre: "The Velvet Underground (1969) - The Velvet Underground",
        imagen: "https://m.media-amazon.com/images/I/81wyM+As6LL._UF1000,1000_QL80_.jpg",
    }, 
    {
        nombre: "Siamese Dream (1993)- The Smashing Pumpkins",
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3a/dc/08/3adc08b0-e98c-b5dd-943e-a37c7ed06205/13UABIM03615.rgb.jpg/1200x1200bf-60.jpg",
    }, 
    {
        nombre: "Hot Rats (1969)- Frank Zappa",
        imagen: "https://m.media-amazon.com/images/I/51Bez-qABuL._UF894,1000_QL80_.jpg",
    },
    {
        nombre: "Double Nickels on the Dime (1984) - Minutemen",
        imagen: "https://m.media-amazon.com/images/I/71PBYqFqyDL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre:"Hellfire (2022) - Black Midi",
        imagen: "https://indierocks.b-cdn.net/wp-content/uploads/2022/07/Black-Midi_Hellfire-portada.jpg"
    },
    {
        nombre: "Master of Reality (1971) - Black Sabbath",
        imagen: "https://progrography.com/wp-content/uploads/2020/05/masterofreality.jpg"
    },    
];

router.get('/nuevodisco', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'nuevodisco.html'));
});

router.get('/primeroslabs', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'primeroslabs.html'));
});


router.get('/tienda', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'tienda.html'));
});


router.get('/peliculas', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'peliculas.html'));
});

router.post('/labs', (request, response, next) => {
    console.log(request.body);

    response.redirect('/discos');
});


router.get("/", (request, response, next) => {
    let html = `    
    <!DOCTYPE html>
    <html>
    <head>
        <title>
            Discos 
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            <a class="navbar-item">
                <img src="https://images.vexels.com/media/users/3/161230/isolated/preview/1fa58bd038c77c9d668475b9f05126a5-ilustracion-de-banda-de-disco-de-vinilo.png" width="80" height="112">
            </a>
            <p class="title is-4-strong"> Mis Discos Favoritos</p>
        </header>
        `;
        for(let disco of discos) {
            html += `
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                            <img src="${disco.imagen}" alt="${disco.nombre}">
                                        </figure>
                                    </div>
                                <div class="media-content">
                                    <p class="title is-4">${disco.nombre}</p>
                            </div>
                    </div>
                </div>
            </div>
        
    </body>
    
    </html>
    `};
    response.send(html);
});
module.exports = router;