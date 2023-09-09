const Peliculas= require('../models/peliculas.model');


exports.get_add = (request, response, next) => {

    response.render('labs/nuevapelicula.ejs', {
        username: request.session.username || '',
    })
};

exports.post_add = (request, response, next) => {
    const pelicula = new Peliculas({
        nombre: request.body.nombre,
        imagen: request.body.imagen,
    });
    pelicula.save()
        .then(() => {
            return response.redirect('peliculas');
        }).catch((error) => {
            console.log(error);
            response.redirect('nuevapelicula');
        });
}


exports.get_list = (request, response, next) => {

    Peliculas.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);

            return response.render('labs/peliculas.ejs', {
                peliculas: rows
            });

        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });

}