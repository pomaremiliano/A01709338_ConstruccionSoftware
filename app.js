/*
Pregunta Lab 11 Express:

El archivo package.json tiene información útil del proyecto de npm.
Puedes incluír documentación como el nombre del proyecto, archivos, versión. Al igual que
puedes incluír la información del repositorio
en el que se almacena el proyecto. 
Incluye metadatos como el nombre, la versión y las dependencias. Que esta última es 
información necesaria para las bibliotecas que se instalan con npm-install.
Así que es muy útil para gestionar los proyectos de npm.

*/




const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasLabs = require('./routes/lab11.routes');

app.use('/labs', rutasLabs);
app.use('/tienda', rutasLabs);
app.use('/peliculas', rutasLabs);
app.use('/nuevodisco', rutasLabs);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('La página no se encontró.'); //Manda la respuesta
});

app.listen(3000);