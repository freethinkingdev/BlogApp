var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var posts = require('./routes/posts');
var postsnew = require('./routes/postsnew');
var postsshow = require('./routes/postsshow');
var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var error = require('./routes/error');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Assigning usr path to a particular routes */
app.use('/', index);
app.use('/posts', posts);
app.use('/posts/new', postsnew);
app.use('/post/:id', postsshow);
app.use('/users', users);
app.use('/about', about);
app.use('/contact', contact);
app.use('/*', error);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* Database setup with mongodb */
/* Creating database schema and model */
mongoose.connect("mongodb://localhost/BlogApi");
global.blogAppSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: {type: String, default: 'http://www.northvets.co.nz/wp-content/uploads/2015/07/kitten-250x250.jpg'},
    created: {type: Date, default: Date.now}
});
global.BlogApi = mongoose.model("BlogApi", blogAppSchema);
/*BlogApi.create({
 title:"Nice sun today",
 body:"It is nice to have such view right before bed",
 image:"https://s3-media4.fl.yelpcdn.com/bphoto/weQisgb-ThHYj6MgKiOlDQ/ls.jpg"
 }, function (err, result) {
 if(err)
 {
 console.log(err)
 } else {
 console.log("Item added")}}
 );*/


module.exports = app;
