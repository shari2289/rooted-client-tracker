const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {type: String, required: true},
  nextAppointment: {type: Date},
  styleRequested: {type: String},
  Comments: { type: String}
},{
  timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);