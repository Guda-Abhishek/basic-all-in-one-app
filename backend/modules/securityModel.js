const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
  deviceId: String,
  alertType: String,
  location: String,
  status: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Security', securitySchema);