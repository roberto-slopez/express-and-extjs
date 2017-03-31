let express = require('express')
let router = express.Router();
let User = require('./../helpers/user');

/**
 * Middleware de nivel de direccionador
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.get('/current', function(req, res) {
    const user = new User();
    res.json(user.getCurrentUser());
    // user.getCurrentUser().then((data) => {
    //     res.json(data);
    // });
});

module.exports = router;
