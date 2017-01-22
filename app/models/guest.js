var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Guest;

var guestSchema = new mongoose.Schema({
        name: String,
        email: String
      }, {collection: 'GuestList'});
      

   if (mongoose.models.userlist) {
      Guest = mongoose.model('GuestList');
    } else {
      Guest = mongoose.model('GuestList', guestSchema);
    }

module.exports = Guest;