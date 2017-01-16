/* Guest Page */
var express = require('express');
var router = express.Router();

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

module.exports = router;