var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Initialize Mongodb
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
// Use Mongoose
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodetest1")
var mongooseDb = mongoose.connection;
mongooseDb.on("error", console.error.bind(console, "connection error"));
mongooseDb.once("open", function(callback) {
console.log("MongoDb2 Connection succeeded.");
});

var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var admin = require('./routes/admin');
var guest = require('./routes/guest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = mongooseDb;
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/home', home);
app.use('/admin', admin);
app.use('/guest', guest);

//API Router setup
var apiRouter = require('./routes/api');              // get an instance of the express Router
app.use('/api', apiRouter);

//MAIL Router setup
var mailRouter = require('./routes/mail');              // get an instance of the express Router
app.use('/mail', mailRouter);

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

module.exports = app;
