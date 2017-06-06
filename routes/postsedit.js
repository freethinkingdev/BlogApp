var express = require('express');
var router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/', function (req, res, next) {
    var postId = req.params.id;

    BlogApi.findById(postId, function (err, postsResults) {
        if (err) {
            res.redirect('/posts');
        } else {
            // console.log(postsResults);
            res.render('postsedit', {
                title: 'Edit your post',
                author: 'Pimpek Max',
                post: postsResults
            });
        }
    });
});


module.exports = router;
