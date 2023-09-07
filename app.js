const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {

    console.log('Middleware!');

    const cookies = request.get('Cookie');
  
    console.log(cookies); 
    
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');
    next(); 
});

const rutasLabs = require('./routes/lab11.routes');

app.use('/labs', rutasLabs);
app.use('/tienda', rutasLabs);
app.use('/peliculas', rutasLabs);
app.use('/nuevodisco', rutasLabs);
app.use('/preguntas', rutasLabs);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.send('La página no se encontró.'); //Manda la respuesta
});

app.listen(3000);