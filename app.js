// jshint esversion:6
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;

// TODO: habilitar cuando se este usando
//app.use(require('./BackEnd/middlewares'))
app.use('/', require('./BackEnd/controllers/index'))
app.use('/user', require('./BackEnd/controllers/user'))

// /**
//  * Middleware de nivel de aplicación
//  * @param  {[type]}   req  [description]
//  * @param  {[type]}   res  [description]
//  * @param  {Function} next [description]
//  * @return {[type]}        [description]
//  */
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });
// /**
//  * Middleware de manejo de errores
//  * @param  {[type]}   err  [description]
//  * @param  {[type]}   req  [description]
//  * @param  {[type]}   res  [description]
//  * @param  {Function} next [description]
//  * @return {[type]}        [description]
//  */
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Error!');
// });
/**
 * Middleware de terceros
 * @type {[type]}
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
