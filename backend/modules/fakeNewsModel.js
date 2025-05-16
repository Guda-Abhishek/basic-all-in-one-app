const mongoose = require('mongoose');

const fakeNewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  source: String,
  reportedBy: String,
  verified: Boolean,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FakeNews', fakeNewsSchema);