/* Admin Page */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin' });
});

/* Create guest list page. */
router.get('/guests', function(req, res, next) {
  res.render('guestAdmin', { title: 'The Guest List page ko!' });
});

/* Create wedding details page. */
router.get('/weddinginfo', function(req, res, next) {
  res.render('index', { title: 'Wedding Information' });
});

module.exports = router;