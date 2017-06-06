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


/* PUT Editing current post */
router.put('/', function (req, res, next) {
    var postId = req.params.id;
    var postTitle = req.body.postTitle;
    var postBody = req.body.postBody;
    var postImageUrl = req.body.postImage;

    BlogApi.findByIdAndUpdate(postId, {
            title: postTitle,
            body: postBody,
            image: postImageUrl
        },
        function (err, result) {
            if (err) {
                res.redirect('/posts');
            } else {
                console.log("Item updated");
                res.redirect("/posts/" + postId);
            }
        });
});


module.exports = router;
