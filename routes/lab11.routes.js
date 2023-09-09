const express = require('express');
const router = express.Router();
const path = require('path');

const tiendaController = require('../controllers/tienda.controller');
const discosController = require('../controllers/discos.controller');
const peliculasController = require('../controllers/peliculas.controller');
const preguntasController = require('../controllers/preguntas.controller');
const nDiscoController = require('../controllers/nuevodisco.controller');

router.get('/labs/tienda', tiendaController.get_add);
router.post('/labs/tienda', tiendaController.post_add);
router.get('/tienda', tiendaController.get_list);

router.get('/labs/discos', discosController.get_add);
router.get('/discos', discosController.get_list);

router.get('/labs/nuevodisco', nDiscoController.get_add);
router.post('/labs/nuevodisco', nDiscoController.post_add);
router.get('/nuevodisco', nDiscoController.get_list);

router.get('/labs/peliculas', peliculasController.get_add);
router.post('/labs/peliculas', peliculasController.post_add);
router.get('/peliculas', peliculasController.get_list);

router.get('/labs/preguntas', preguntasController.get_add);
router.post('/labs/preguntas', preguntasController.post_add);
router.get('/preguntas', preguntasController.get_list);

router.post('/labs', (request, response, next) => {
    console.log(request.body);

    response.redirect('/preguntas');
});

module.exports = router;