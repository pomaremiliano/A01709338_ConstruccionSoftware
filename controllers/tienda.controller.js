const Productos= require('../models/tienda.model');

exports.get_add = (request, response, next) => {

    response.render('labs_list/tienda/add.ejs', {
        username: request.session.username || '',
    });
};

exports.post_add = (request, response, next) => {
    const producto = new Productos({
        nombre: request.body.nombre,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg",
    });
    producto.save();
    response.redirect('tienda');
}


exports.get_list = (request, response, next) => {

    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);

    response.render('labs_list/tienda.ejs', {
        productos: Productos.fetchAll(),
        tiempo_transcurrido: tiempo_transcurrido,
        username: request.session.username || '',
    });
}

/*


*/