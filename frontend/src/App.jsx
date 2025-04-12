import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'http://localhost:5000/weather';

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.get(`${API_URL}?city=${encodeURIComponent(city)}`);
      setWeatherData(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Real-Time Weather Dashboard</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        {isLoading && <div className="loading">Loading weather data...</div>}
        <ErrorMessage message={error} />
        {weatherData && !isLoading && <WeatherCard weatherData={weatherData} />}
        {!weatherData && !isLoading && !error && (
          <div className="initial-message">
            <p>Enter a city name to get the current weather</p>
          </div>
        )}
      </main>
      <footer>
        <p>Weather Dashboard &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;