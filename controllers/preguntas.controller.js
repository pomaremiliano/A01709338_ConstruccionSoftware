

exports.get_add = (request, response, next) => {

    response.render('labs_list/preguntas.ejs', {
        username: request.session.username || '',
    })
};

exports.post_add = (request, response, next) => {
    response.redirect('preguntas');
}


exports.get_list = (request, response, next) => {
    response.render('labs_list/preguntas.ejs', {
        username: request.session.username || '',
    });
}
