var express = require('express');
var router = express.Router();

/* GET showing form which is used to edit the post*/
router.get('/', function (req, res, next) {
    res.render('postsnew', {
        title: 'New Post',
        author: 'Pimpek Max'
    });
});

module.exports = router;
