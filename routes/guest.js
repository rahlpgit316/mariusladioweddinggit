/* Guest Page */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guest' });
});

/* Wedding details page. */
router.get('/weddinginfo', function(req, res, next) {
  res.render('index', { title: 'The Guest List' });
});

/* wedding map page. */
router.get('/weddingmap', function(req, res, next) {
  res.render('index', { title: 'Wedding Information' });
});

/* GET guests. */
router.get('/list', function(req, res, next) {
   var mongooseDb = req.db;
   // Create a schema
    let userListSchema = new mongoose.Schema({
        username: String,
        email: String
      }, {collection: 'GuestList'});
      

   if (mongoose.models.userlist) {
      model = mongoose.model('GuestList');
    } else {
      model = mongoose.model('GuestList', userListSchema);
    }
     model.find({},{},function(e,docs){
        res.json(docs);
      });
});

/* POST add guest. */
router.get('/add', function(req, res, next) {
   var mongooseDb = req.db;
   // Create a schema
    let userListSchema = new mongoose.Schema({
        username: String,
        email: String
      }, {collection: 'userlist'});
      

   if (mongoose.models.userlist) {
      model = mongoose.model('userlist');
    } else {
      model = mongoose.model('userlist', userListSchema);
    }
     model.find({},{},function(e,docs){
        res.json(docs);
      });
});

module.exports = router;