const Discos= require('../models/discos.model');


exports.get_add = (request, response, next) => {

    response.render('labs/nuevodisco.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    })
};

exports.post_add = (request, response, next) => {
    const discos = new Discos({
        nombre: request.body.nombre,
        imagen: request.body.imagen,
    });
    discos.save()
        .then(() => {
            return response.redirect('discos');
        }).catch((error) => {
            console.log(error);
            response.redirect('nuevodisco');
        });
}


exports.get_list = (request, response, next) => {

    Discos.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);

            return response.render('labs/discos.ejs', {
                discos: rows,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || false,
            });

        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });

}