const Productos= require('../models/tienda.model');

exports.get_add = (request, response, next) => {

    response.render('labs/nuevoproducto.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
        privilegios: request.session.privilegios || [],
    })
};

exports.post_add = (request, response, next) => {
    const producto = new Productos({
        nombre: request.body.nombre,
        imagen: request.body.imagen,
    });
    producto.save()
        .then(() => {
            return response.redirect('tienda');
        }).catch((error) => {
            console.log(error);
            response.redirect('nuevoproducto');
        });
}



exports.get_list = (request, response, next) => {

    console.log(request.session.privilegios);

    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);

    Productos.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        console.log(fieldData);

        return response.render('labs/tienda.ejs', {
            productos: rows,
            tiempo_transcurrido: tiempo_transcurrido,
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || false,
            privilegios: request.session.privilegios || [],
        });

    }).catch((error) => {
        console.log(error);
        response.redirect('/users/login');
    });
}



/*


*/