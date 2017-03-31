let express = require('express')
let router = express.Router();
let User = require('./../helpers/user');

/**
 * Middleware de nivel de direccionador
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.put('/current', function(req, res) {
    const user = new User('d7f14a07-91db-4f43-b582-090e3f996ffe');
    res.json(user.getCurrentUser());
    // user.getCurrentUser().then((data) => {
    //     res.json(data);
    // });
});

module.exports = router;
