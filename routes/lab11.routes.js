const express = require("express");
const router = express.Router();
const isAuth = require("../util/is-auth");

const tiendaController = require("../controllers/tienda.controller");
const discosController = require("../controllers/discos.controller");
const peliculasController = require("../controllers/peliculas.controller");
const preguntasController = require("../controllers/preguntas.controller");

router.get("/labs/tienda", isAuth, tiendaController.get_add);
router.post("/labs/tienda", isAuth, tiendaController.post_add);
router.get("/tienda", isAuth, tiendaController.get_list);

router.get("/nuevodisco", isAuth, discosController.get_add);
router.post("/nuevodisco", isAuth, discosController.post_add);
router.get("/discos", isAuth, discosController.get_list);

router.get("/nuevapelicula", isAuth, peliculasController.get_add);
router.post("/nuevapelicula", isAuth, peliculasController.post_add);
router.get("/peliculas", isAuth, peliculasController.get_list);
router.get("/peliculas/:id", isAuth, peliculasController.get_list);

router.get("/labs/preguntas", isAuth, preguntasController.get_add);
router.post("/labs/preguntas", isAuth, preguntasController.post_add);
router.get("/preguntas", isAuth, preguntasController.get_list);

router.post("/labs", (request, response, next) => {
  console.log(request.body);

  response.redirect("/preguntas");
});

module.exports = router;
