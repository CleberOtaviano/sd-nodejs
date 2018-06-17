function login(app) {
    app.get('/cadastro', function(req, res) {

        // let isLogado = req.user ? true : false;

        res.render('cadastro/index', {
            // isLogado,
            // notLayoutMenu: true,
            // invertedMenu: true
            teste: 'Cadastro'
        })
    });
}

module.exports = login;