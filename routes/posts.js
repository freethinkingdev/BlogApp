var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    BlogApi.find({}, function (err, postsResults) {
        if (err) {
            console.log(err);
        } else {
            // console.log(postsResults);
            res.render('posts', {
                title: 'My Blog App',
                author: 'Pimpek Max',
                postArray: postsResults
            });
        }
    });
});

module.exports = router;
