/* Admin Page */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin' });
});

/* Create guest list page. */
router.get('/guestlist', function(req, res, next) {
  res.render('guestlist', { title: 'The Guest List page ko!' });
});

/* Create wedding details page. */
router.get('/weddinginfo', function(req, res, next) {
  res.render('index', { title: 'Wedding Information' });
});

router.get('/sendmail', function(req, res, next) {
  var smtpConfig = {
     host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "ralphryan.bautista@gmail.com",
        pass: "gmail316061984"
      }
  };
   var transporter = nodemailer.createTransport(smtpConfig);
   // replace hardcoded options with data passed (somedata)
  var mailOptions = {
    from: 'ralphryan.bautista@gmail.com', // sender address
    to: 'mariusladio2@gmail.com', // list of receivers
    subject: 'Test email from yours truly!', // Subject line
    text: 'Congrats Marius and Leslie!', //, // plaintext body
    html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      res.render('index', { title: 'Message failed: ' + info.response });
      //return false;
    }else{
      //console.log('Message sent: ' + info.response);
      res.render('index', { title: 'Message sent: ' + info.response });
      //return true;
    };
  });
  
});


module.exports = router;