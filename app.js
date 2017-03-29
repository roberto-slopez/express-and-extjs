// jshint esversion:6
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;

// app.set('views', __dirname + '/views')
// app.engine('jade', require('jade').__express)
// app.set('view engine', 'jade')
// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// TODO: habilitar cuando se este usando
//app.use(require('./BackEnd/middlewares'))
app.use(require('./BackEnd/controllers'))

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
