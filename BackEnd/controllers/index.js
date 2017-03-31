let express = require('express')
let router = express.Router();

/**
 * Middleware de nivel de direccionador
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.get('/doc', function(req, res) {
    console.log('Request URL:', req.originalUrl);
    res.json({
        message: 'hello world 2017'
    });
    next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

module.exports = router;
