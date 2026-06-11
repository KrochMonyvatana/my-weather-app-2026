import React, { useState, useEffect } from "react";
import CityAutocomplete from "../components/CityAutocomplete";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import {
  getWeatherByCity,
  getForecast,
  getWeatherByCoords,
  getForecastByCoords,
} from "../services/weatherService";

const WeatherHome = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        getWeatherByCity(city),
        getForecast(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getUserLocation = async () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const [weatherData, forecastData] = await Promise.all([
              getWeatherByCoords(latitude, longitude),
              getForecastByCoords(latitude, longitude),
            ]);
            setWeather(weatherData);
            setForecast(forecastData);
          } catch (err) {
            setError("Could not fetch weather for your location.");
            fetchWeatherData("Phnom Penh");
          } finally {
            setLoading(false);
          }
        },
        () => {
          fetchWeatherData("Phnom Penh");
          setLoading(false);
        },
      );
    } else {
      fetchWeatherData("Phnom Penh");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      {/* Search Section - Always visible */}
      <div className="flex justify-center mb-8">
        <CityAutocomplete onCitySelect={fetchWeatherData} isLoading={loading} />
      </div>

      {/* Loading State - Simple spinner only */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/20 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="text-white/70 text-sm mt-4">Loading weather data...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl max-w-md mx-auto text-center">
          ⚠️ {error}
        </div>
      )}

      {/* Weather Content - Only shows when data is ready */}
      {!loading && weather && (
        <div className="space-y-8">
          <WeatherCard weather={weather} />
          <Forecast forecast={forecast} />
        </div>
      )}
    </div>
  );
};

export default WeatherHome;
