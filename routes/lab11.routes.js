const express = require('express');
const router = express.Router();
const path = require('path');

const tiendaController = require('../controllers/tienda.controller');
const discosController = require('../controllers/discos.controller');
const peliculasController = require('../controllers/peliculas.controller');


router.get('/labs/tienda', tiendaController.get_add);
router.post('/labs/tienda', tiendaController.post_add);
router.get('/tienda', tiendaController.get_list);

router.get('/labs/discos', discosController.get_add);
router.post('/labs/discos', discosController.post_add);
router.get('/discos', discosController.get_list);

router.get('/labs/peliculas', peliculasController.get_add);
router.post('/labs/peliculas', peliculasController.post_add);
router.get('/peliculas', peliculasController.get_list);


router.get('/preguntas', (request, response, next) => {
    
    response.render('labs_list/preguntas.ejs');
});

router.get('/nuevodisco', (request, response, next) => {
    response.render('labs_list/nuevodisco.ejs');
});



router.post('/labs', (request, response, next) => {
    console.log(request.body);

    response.redirect('/preguntas');
});


module.exports = router;