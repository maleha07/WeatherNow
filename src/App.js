import "./styles.css";
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState(""); // State for the city input
  const [weather, setWeather] = useState(null); // State for storing the weather data
  const [loading, setLoading] = useState(false); // State for handling loading state
  const [error, setError] = useState(null); // State for handling error

  const handleCityChange = (e) => {
    setCity(e.target.value); // Updates city as the user types
  };

  // Function to map weather codes to descriptive names
  const mapWeatherCodeToCondition = (code) => {
    switch (code) {
      case 0:
        return "Clear Sky";
      case 1:
        return "Mainly Clear";
      case 2:
        return "Partly Cloudy";
      case 3:
        return "Overcast";
      case 45:
      case 48:
        return "Fog";
      case 51:
      case 53:
      case 55:
        return "Light Rain";
      case 56:
      case 57:
        return "Freezing Rain";
      case 61:
      case 63:
      case 65:
        return "Moderate Rain";
      case 66:
      case 67:
        return "Freezing Moderate Rain";
      case 71:
      case 73:
      case 75:
        return "Light Snow";
      case 77:
        return "Snow Grains";
      case 80:
      case 81:
      case 82:
        return "Showers of Rain";
      case 85:
      case 86:
        return "Showers of Snow";
      case 95:
      case 96:
      case 99:
        return "Thunderstorms";
      default:
        return "Unknown Condition";
    }
  };

  const fetchWeather = async () => {
    if (!city) return; // Make sure city is entered

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      // Step 1: Get latitude and longitude from the OpenCage Geocoder API
      const geocodeResponse = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=85e5978ed2e549ea999f5fca5a32378a`
      );
      const geocodeData = await geocodeResponse.json();

      // Check if no results are returned for the city (invalid city)
      if (geocodeData.results.length === 0) {
        setError("City not found. Please enter a valid city name.");
        setLoading(false);
        return;
      }

      const { lat, lng } = geocodeData.results[0].geometry;

      // Check if the coordinates are valid
      if (!lat || !lng) {
        setError("Invalid city coordinates.");
        setLoading(false);
        return;
      }

      // Step 2: Use latitude and longitude to fetch weather data from Open-Meteo API
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      // Check if the weather data is valid
      if (!weatherData.current_weather) {
        setError("Weather data not available for this city.");
        setLoading(false);
        return;
      }

      const { temperature, weathercode } = weatherData.current_weather;

      // Map weather condition code to description
      const condition = mapWeatherCodeToCondition(weathercode);

      // Step 3: Set the weather data state
      setWeather({
        temperature: temperature.toFixed(1), // Show temperature with one decimal point
        condition: condition,
      });

      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again later.");
      setLoading(false); // Stop loading in case of an error
    }
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="title">Weather Now</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          className="city-input"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="submit-btn"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {error && <p className="error">{error}</p>}

        {weather && !loading && (
          <div className="weather-info">
            <h2 className="weather-location">Weather in {city}</h2>
            <p className="temperature">{weather.temperature}°C</p>
            <p className="condition">{weather.condition}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
