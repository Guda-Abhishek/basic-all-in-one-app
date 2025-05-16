const express = require('express');
const router = express.Router();
const Spam = require('../models/spamModel');

router.post('/', async (req, res) => {
  try {
    const newReport = new Spam(req.body);
    await newReport.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reports = await Spam.find().sort({ timestamp: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;