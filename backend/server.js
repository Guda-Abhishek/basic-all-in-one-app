const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/agri', require('./routes/agriRoutes'));
app.use('/api/traffic', require('./routes/trafficRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/security', require('./routes/securityRoutes'));
app.use('/api/spam', require('./routes/spamRoutes'));
app.use('/api/fakenews', require('./routes/fakeNewsRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));