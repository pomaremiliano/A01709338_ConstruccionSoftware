

exports.get_add = (request, response, next) => {

    response.render('labs/preguntas.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    })
};

exports.post_add = (request, response, next) => {
    response.redirect('preguntas');
}


exports.get_list = (request, response, next) => {
    response.render('labs/preguntas.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
}
