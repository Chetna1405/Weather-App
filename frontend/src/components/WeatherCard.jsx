import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const {
        city,
        country,
        temperature,
        feels_like,
        condition,
        description,
        icon,
        humidity,
        wind_speed,
        pressure
    } = weatherData;

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className="weather-card">
            <div className="weather-header">
                <h2>{city}, {country}</h2>
                <div className="weather-main">
                    <img src={iconUrl} alt={description} className="weather-icon" />
                    <div className="temperature">
                        <h1>{Math.round(temperature)}°C</h1>
                        <p>Feels like: {Math.round(feels_like)}°C</p>
                    </div>
                </div>
                <h3 className="condition">{condition}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="weather-details">
                <div className="detail-item">
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{humidity}%</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">{wind_speed} m/s</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value">{pressure} hPa</span>
                </div>
            </div>
            <div className="weather-footer">
                <p>Last updated: {new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    );
};

export default WeatherCard;