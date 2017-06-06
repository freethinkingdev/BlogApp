var express = require('express', {mergeParams: true});
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

/* POST creates new post item*/
router.post('/', function (req, res, next) {

    var postTitle = req.body.postTitle;
    var postBody = req.body.postBody;
    var postImageUrl = req.body.postImage;

    BlogApi.create({
            title: postTitle,
            body: postBody,
            image: postImageUrl
        },
        function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("Item added");
                res.redirect("/posts")
            }
        });
});


module.exports = router;
