function perfil(app) {
    app.get('/perfil', function(req, res) {
        res.render('perfil/index', {
            teste: 'Perfil POLA'
        })
    });
}

module.exports = perfil;