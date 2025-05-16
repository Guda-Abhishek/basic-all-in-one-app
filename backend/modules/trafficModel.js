const mongoose = require('mongoose');

const trafficSchema = new mongoose.Schema({
  location: String,
  congestionLevel: Number,
  incidentReport: String,
  averageSpeed: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Traffic', trafficSchema);