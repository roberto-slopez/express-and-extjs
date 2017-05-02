// jshint esversion:6
const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
let cors = require('cors');
let corsOptions = {
    // Some legacy browsers (IE11, various SmartTVs) choke on 204
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', require('./BackEnd/controllers/index'));
app.use('/user', require('./BackEnd/controllers/user'));

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
