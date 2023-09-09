const Peliculas= require('../models/peliculas.model');


exports.get_add = (request, response, next) => {

    response.render('labs_list/peliculas.ejs', {
        username: request.session.username || '',
    })
};

exports.post_add = (request, response, next) => {
    const pelicula = new Peliculas({
        nombre: request.body.nombre,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg",
    });
    pelicula.save();
    response.redirect('peliculas');
}


exports.get_list = (request, response, next) => {
    response.render('labs_list/peliculas.ejs', {
        peliculas: Peliculas.fetchAll(), 
        username: request.session.username || '',
    });
}
