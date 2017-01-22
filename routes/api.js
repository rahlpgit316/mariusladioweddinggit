// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API Router setup
var router = express.Router();              // get an instance of the express Router
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
var Guest = require('../app/models/guest');
router.route('/guest')
  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {
          var guest = new Guest();      // create a new instance of the Bear model
          guest.name = req.body.name;  // set the bears name (comes from the request)
          guest.email = req.body.email;
          // save the bear and check for errors
          guest.save(function(err) {
              if (err){
                res.send(err);
              }else{
                  //res.json({ message: 'Guest created!' });
                  Guest.find(function(err, guest) {
                        if (err)
                            res.send(err);

                        res.json(guest);
                    });
              }
          });
    
  })
  // get all the bears (accessed at GET http://localhost:8080/api/bears)
  .get(function(req, res) {
      Guest.find(function(err, guest) {
          if (err)
              res.send(err);

          res.json(guest);
      });
  });
  
module.exports = router;