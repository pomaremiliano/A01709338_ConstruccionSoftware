const Discos= require('../models/discos.model');

exports.get_add = (request, response, next) => {

    response.render('labs_list/nuevodisco.ejs', {
        username: request.session.username || '',
    });
};

exports.post_add = (request, response, next) => {
    const disco_nuevo = new Discos({
        nombre: request.body.nombre,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg",
    });

    disco_nuevo.save()
        .then(() => {
            return response.redirect('/labs/discos');
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
}


exports.get_list = (request, response, next) => {
    response.render('labs_list/nuevodisco.ejs', {
        disco_nuevo: Discos.fetchAll(), 
        username: request.session.username || '',
    });
}
