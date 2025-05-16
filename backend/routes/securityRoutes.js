const express = require('express');
const router = express.Router();
const Security = require('../models/securityModel');

router.post('/', async (req, res) => {
  try {
    const newAlert = new Security(req.body);
    await newAlert.save();
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const alerts = await Security.find().sort({ timestamp: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;