var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('postsnew', {
        title: 'New Post',
        author: 'Pimpek Max'
    });
});

module.exports = router;
