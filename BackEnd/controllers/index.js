let express = require('express')
let router = express.Router();

//router.use('/others', require('./others'))

router.get('/', function(req, res) {
    res.json({
        message: 'hello world'
    });
});

module.exports = router;
