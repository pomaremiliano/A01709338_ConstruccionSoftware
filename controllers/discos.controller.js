const Discos = require("../models/discos.model");

exports.get_add = (request, response, next) => {
  response.render("labs/nuevodisco.ejs", {
    username: request.session.username || "",
    isLoggedIn: request.session.isLoggedIn || false,
    privilegios: request.session.privilegios || [],
  });
};

exports.post_add = (request, response, next) => {
  const discos = new Discos({
    nombre: request.body.nombre || ":'(",
    imagend: request.file.filename || ":'(",
  });
  discos
    .save()
    .then(() => {
      return response.redirect("discos");
    })
    .catch((error) => {
      console.log(error);
      response.redirect("nuevodisco");
    });
};

exports.get_list = (request, response, next) => {
  console.log(request.session.privilegios);

  Discos.fetch(request.params.id)
    .then(([rows, fieldData]) => {
      console.log(rows);
      console.log(fieldData);

      return response.render("labs/discos.ejs", {
        discos: rows,
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
        privilegios: request.session.privilegios || [],
      });
    })
    .catch((error) => {
      console.log(error);
      response.redirect("/users/login");
    });
};

exports.post_delete = (request, response, next) => {
  console.log(request.body);

  Discos.delete(request.body.id)
    .then(() => {
      Discos.fetchAll()
        .then(([discos, fieldData]) => {
          response.status(200).json({ discos: discos });
        })
        .catch((error) => {
          console.log(error);
          response.status(500).json({ message: "Error al eliminar el disco" });
        });
    })
    .catch((error) => {
      response.status(200).json({ message: "Respuesta asíncrona" });
    });
};
