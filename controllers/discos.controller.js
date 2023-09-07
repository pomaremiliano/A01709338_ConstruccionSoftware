const model = require('../models/discos.model');
const Discos= require('../models/discos.model');


exports.get_add = (request, response, next) => {

    response.render('labs_list/discos.ejs');
};
exports.post_add = (request, response, next) => {
    const disco = new Discos({
        nombre: request.body.nombre,
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Oxxo_vac%C3%ADo.jpg",
    });
    disco.save();
    response.redirect('discos');
}


exports.get_list = (request, response, next) => {
    response.render('labs_list/discos.ejs', {
        discos: Discos.fetchAll()
    });
}
