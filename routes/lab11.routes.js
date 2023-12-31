const express = require("express");
const router = express.Router();
const isAuth = require("../util/is-auth");

const tiendaController = require("../controllers/tienda.controller");
const discosController = require("../controllers/discos.controller");
const peliculasController = require("../controllers/peliculas.controller");
const preguntasController = require("../controllers/preguntas.controller");
const canVerPeliculas = require("../util/can-ver-peliculas.js");
const canAgregarPeliculas = require("../util/can-agregar-peliculas");
const canVerDiscos = require("../util/can-ver-discos");
const canAgregarDiscos = require("../util/can-agregar-discos");
const canAgregarProductos = require("../util/can-agregar-productos");
const canVerProductos = require("../util/can-ver-productos");

router.get(
  "/nuevoproducto",
  isAuth,
  canAgregarProductos,
  tiendaController.get_add
);
router.post(
  "/nuevoproducto",
  isAuth,
  canAgregarProductos,
  tiendaController.post_add
);
router.get("/tienda", isAuth, canVerProductos, tiendaController.get_list);


router.get(
  "/nuevapelicula",
  isAuth,
  canAgregarPeliculas,
  peliculasController.get_add
);
router.post(
  "/nuevapelicula",
  isAuth,
  canAgregarPeliculas,
  peliculasController.post_add
);
router.get("/peliculas", isAuth, canVerPeliculas, peliculasController.get_list);
router.get(
  "/peliculas/:id",
  isAuth,
  canVerPeliculas,
  peliculasController.get_list
);

router.get("/preguntas", isAuth, preguntasController.get_add);
router.post("/preguntas", isAuth, preguntasController.post_add);
router.get("/preguntas", isAuth, preguntasController.get_list);

router.get("/nuevodisco", isAuth, canAgregarDiscos, discosController.get_add);
router.post("/nuevodisco", isAuth, canAgregarDiscos, discosController.post_add);
router.get("/discos", isAuth, canVerDiscos, discosController.get_list);
router.post("/delete", isAuth, canAgregarDiscos, discosController.post_delete);

router.post("/", (request, response, next) => {
  console.log(request.body);

  response.redirect("/preguntas");
});

module.exports = router;
