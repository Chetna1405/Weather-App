const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const weatherRoutes = require('./routes/Weather.js');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Weather API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});