const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use(bodyParser.urlencoded({extended: false}));

router.get('/new',(request,response,next)=> {
    response.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
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