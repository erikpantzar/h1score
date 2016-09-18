var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HiscoreSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You gotta have a name ya!?']
  },
  score: [Number],
  time: [Date]
});

module.exports = mongoose.model('Hiscore', HiscoreSchema);
