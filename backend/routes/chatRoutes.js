const express = require('express');
const router = express.Router();
const Chat = require('../models/chatModel');

router.post('/', async (req, res) => {
  try {
    const newMessage = new Chat(req.body);
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:room', async (req, res) => {
  try {
    const roomMessages = await Chat.find({ room: req.params.room }).sort({ timestamp: -1 });
    res.json(roomMessages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;