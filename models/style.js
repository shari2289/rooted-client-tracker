const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const styleSchema = new Schema({
  name: {type: String, required: true},
  timeToComplete: {type: String},
  Price: {type: String},
  Comments: { type: String}
},{
  timestamps: true
});

module.exports = mongoose.model('Style', styleSchema);