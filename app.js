// jshint esversion:6
const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;

// TODO: habilitar cuando se este usando
//app.use(require('./BackEnd/middlewares'))
app.use('/', require('./BackEnd/controllers/index'))
app.use('/user', require('./BackEnd/controllers/user'))

/**
 * Middleware de terceros
 * @type {[type]}
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
