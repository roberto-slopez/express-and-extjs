let express = require('express')
let router = express.Router();


router.get('/', function(req, res) {
    res.json({
        message: 'hello world'
    });
});

module.exports = router;
