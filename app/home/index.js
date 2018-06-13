function home(app) {
    app.get('/', function(req, res) {

        let isLogado = req.user ? true : false;

        res.render('home/index', {
            isLogado,
            notLayoutMenu: true,
            invertedMenu: true
        })
    });
}

module.exports = home;