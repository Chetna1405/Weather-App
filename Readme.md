# Real-Time Weather Dashboard

A MERN stack application that allows users to search for and view real-time weather information for cities around the world.

## Project Structure

```
weather-dashboard/
├── frontend/               # React Frontend
├── backend/               # Node.js Backend
├── .gitignore
└── README.md
```

## Features

- Search for weather by city name
- Display current weather conditions
- Show temperature, humidity, wind speed, and pressure
- Error handling for invalid city inputs
- Responsive design

## Prerequisites

- Node.js and npm installed
- OpenWeatherMap API key

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```
OPENWEATHERMAP_API_KEY=your_api_key_here
PORT=5000
```

Replace `your_api_key_here` with your OpenWeatherMap API key. You can get one for free at [OpenWeatherMap](https://openweathermap.org/appid).

Start the server:

```bash
npm start
```

The server will run on http://localhost:5000

### 3. Frontend Setup

Open a new terminal and navigate to the client directory:

```bash
cd ../client
npm install
npm start
```

The React app will run on http://localhost:3000

## API Endpoint

- `GET /weather?city={cityName}`: Returns weather data for the specified city

## Technologies Used

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express
- **External API**: OpenWeatherMap

## Notes

- The app uses the free tier of OpenWeatherMap API which has rate limits
- Weather data is fetched in real-time and not cached