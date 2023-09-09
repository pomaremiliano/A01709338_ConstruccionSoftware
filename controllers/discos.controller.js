const Discos= require('../models/discos.model');


exports.get_add = (request, response, next) => {

    response.render('labs_list/discos.ejs', {
        username: request.session.username || '',
    });
};


exports.get_list = (request, response, next) => {
    response.render('labs_list/discos.ejs', {
        discos: Discos.fetchAll(), 
        username: request.session.username || '',
    });
}
