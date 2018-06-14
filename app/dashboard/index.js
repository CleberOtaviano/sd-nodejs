function dashboard(app) {
    app.get('/dashboard', function(req, res) {

        // let isLogado = req.user ? true : false;

        res.render('dashboard/index', {
            // isLogado,
            // notLayoutMenu: true,
            // invertedMenu: true
            teste: 'LOGIN POLA'
        })
    });
    app.get('/dashboard/detalhe-chamado/:idchamado', function(req, res) {

        // let isLogado = req.user ? true : false;

        res.render('dashboard/detalhe-chamado/index', {
            // isLogado,
            // notLayoutMenu: true,
            // invertedMenu: true
            teste: 'Detalhe chamado POLA'
        })
    });
}

module.exports = dashboard;