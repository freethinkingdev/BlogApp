var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('error', {
        title: "Error",
        author: "Pimpalek Max",
        message: "This is One Big Fat Error"
    });
});

module.exports = router;
