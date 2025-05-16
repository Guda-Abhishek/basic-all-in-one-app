const mongoose = require('mongoose');

const spamSchema = new mongoose.Schema({
  content: String,
  source: String,
  category: String,
  reportedBy: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Spam', spamSchema);