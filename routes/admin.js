/* Admin Page */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin' });
});

/* Create guest list page. */
router.get('/guestlist', function(req, res, next) {
  res.render('index', { title: 'The Guest List' });
});

/* Create wedding details page. */
router.get('/weddinginfo', function(req, res, next) {
  res.render('index', { title: 'Wedding Information' });
});


module.exports = router;