exports.get_add = (request, response, next) => {
  response.render("labs/preguntas.ejs", {
    username: request.session.username || "",
    isLoggedIn: request.session.isLoggedIn || false,
    privilegios: request.session.privilegios || [],
  });
};

exports.post_add = (request, response, next) => {
  response.redirect("preguntas");
};

exports.get_list = (request, response, next) => {
  console.log(request.session.privilegios);

  response.render("labs/preguntas.ejs", {
    username: request.session.username || "",
    isLoggedIn: request.session.isLoggedIn || false,
    privilegios: request.session.privilegios || [],
  });
};
