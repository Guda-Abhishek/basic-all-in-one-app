const mongoose = require('mongoose');

const agriSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soilMoisture: Number,
  waterResource: String,
  cropType: String,
  cost: Number,
  prediction: String,
  suggestion: String,
  alert: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Agri', agriSchema);
