'use strict';
let express = require('express');
let router = express.Router();
let User = require('./../helpers/user');
let r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost',
    db: 'curso'
});
const uuidV1 = require('uuid/v1');

router.post('/current', function (req, res) {
    r.table("user")
        .insert(req.body.data)
        .run()
        .then(function(response){
            res.json({
                success: true,
                uuid: response.generated_keys[0]
            });
        })
        .error(function(err){
            console.log('error occurred ',err);
        });
});
router.get('/current', function (req, res) {
    r.table('user')
        .run()
        .then(function (response) {
            res.json({
                data: response,
                success: true
            });
        })
        .error(function (err) {
            console.log(err);
        });
});
router.put('/current', function (req, res) {
    let currentId = req.body.data.id;
    delete req.body.data.id;
    r.table('user')
        .get(currentId.toString())
        .update(req.body.data)
        .run()
        .then(function(response){
            res.json({
                success: true,
                data: response
            });
        })
        .error(function(err){
            console.log(err);
        });
});

module.exports = router;
