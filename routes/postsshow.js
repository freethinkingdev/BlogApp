var express = require('express');
var router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/', function (req, res, next) {
    var postId = req.params.id;
    BlogApi.findById(postId, function (err, postsResults) {
        if (err) {
            console.log(err);
        } else {
            // console.log(postsResults);
            res.render('postsshow', {
                title: 'Post detail',
                author: 'Pimpek Max',
                post: postsResults
            });
        }
    });
});


module.exports = router;
