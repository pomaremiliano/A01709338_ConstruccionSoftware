const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, 
    saveUninitialized: false, 
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        
        callback(null, '/public/uploads');
    },
    filename: (request, file, callback) => {
        
        callback(null, new Date().getMilliseconds() + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});


//Middleware
app.use((request, response, next) => {

    console.log('Middleware!');

    const cookies = request.get('Cookie');
  
    console.log(cookies); 
    
    //console.log(cookies.split('=')[1]);

    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');
    next(); 
});



const rutasLabs = require('./routes/lab11.routes');

const rutasUsuarios = require('./routes/users.routes');

app.use('/users', rutasUsuarios);
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