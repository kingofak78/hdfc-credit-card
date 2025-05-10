// models/User.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  name:        { type: String, required: true },
  mobileNumber:{ type: String, required: true },
  panNumber:   { type: String, required: true },
  dob:         { type: String, required: true },
  submittedAt: { type: Date,   default: Date.now }
});

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries:  [ entrySchema ]
});

module.exports = mongoose.model('User', userSchema);
