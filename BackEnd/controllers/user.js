let express = require('express')
let router = express.Router();
let User = require('./../helpers/user');

/**
 * Middleware de nivel de direccionador
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.post('/current', function(req, res) {
    //const user = new User('d7f14a07-91db-4f43-b582-090e3f996ffe');
    res.json({
        data: [
            {first: 'Lisa', last: 'Simpson', email: 'lisa@simpsons.com', phone: '555-111-1224'},
            {first: 'Bart2', last: 'Simpson2', email: 'bart2@simpsons.com', phone: '2555-222-1234'},
            {first: 'Bart', last: 'Simpson', email: 'bart@simpsons.com', phone: '555-222-1234'},
            {first: 'Homer', last: 'Simpson', email: 'homer@simpsons.com', phone: '555-222-1244'},
            {first: 'Marge', last: 'Simpson', email: 'marge@simpsons.com', phone: '555-222-1254'}
        ]
    });
    // user.getCurrentUser().then((data) => {
    //     res.json(data);
    // });
});

module.exports = router;
