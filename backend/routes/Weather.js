const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /weather endpoint
router.get('/', async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }
        // console.log(city);
        const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
        // console.log(API_KEY);
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        // console.log(weatherUrl);
        const response = await axios.get(weatherUrl);
        const weatherData = response.data;
        // console.log(weatherData);
        const structuredData = {
            city: weatherData.name,
            country: weatherData.sys.country,
            temperature: weatherData.main.temp,
            feels_like: weatherData.main.feels_like,
            condition: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            humidity: weatherData.main.humidity,
            wind_speed: weatherData.wind.speed,
            pressure: weatherData.main.pressure,
            timestamp: new Date(weatherData.dt * 1000).toISOString()
        };

        res.json(structuredData);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
        console.error('Weather API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

module.exports = router;