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
}

module.exports = dashboard;