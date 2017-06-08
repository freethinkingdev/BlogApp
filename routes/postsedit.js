var express = require('express');
var router = express.Router({mergeParams: true});

/* GET post edit page. */
router.get('/', function (req, res, next) {
    /* Getting the post id to make sure right post will be edited*/
    var postId = req.params.id;
    /* Using findbyid method to find right post*/
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
