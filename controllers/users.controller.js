exports.get_login = (request, response, next) => {
    response.render('users/users.views.ejs', {
        username: '',
    });
};
exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/labs/tienda');

    
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};