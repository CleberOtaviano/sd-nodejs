function login(app) {
    app.get('/login', function(req, res) {

        // let isLogado = req.user ? true : false;

        res.render('login/index', {
            // isLogado,
            // notLayoutMenu: true,
            // invertedMenu: true
            teste: 'LOGIN POLA'
        })
    });
}

module.exports = login;