var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        title: 'About Us',
        author: 'Pimpek Max'
    });
});

module.exports = router;
