const app = require('./app')
const port = process.env.PORT || 80

app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log('SERVINDO NA PORTA: ' + port);
});