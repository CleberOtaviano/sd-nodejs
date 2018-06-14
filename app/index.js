const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const nunjucks  = require('nunjucks')

const app = express()

app.use(bodyParser())

nunjucks.configure('./app', {
    watch: true,
    noCache: true,
    express: app
});

app.engine('html', nunjucks.render);

app.set('view engine', 'html');
// app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/public', express.static(path.join(__dirname, '../public')))

// require('./cliente').init(app)
// require('./workflow').init(app)
require('./home')(app)
require('./login')(app)
require('./dashboard')(app)
// require('./builder').init(app)

module.exports = app