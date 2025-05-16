const express = require('express');
const router = express.Router();
const Traffic = require('../models/trafficModel');

router.post('/', async (req, res) => {
  try {
    const newData = new Traffic(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Traffic.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;