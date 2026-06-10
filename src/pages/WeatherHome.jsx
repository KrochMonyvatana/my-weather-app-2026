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
  const [loading, setLoading] = useState(false);
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

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLoading(true);
          try {
            const [weatherData, forecastData] = await Promise.all([
              getWeatherByCoords(latitude, longitude),
              getForecastByCoords(latitude, longitude),
            ]);
            setWeather(weatherData);
            setForecast(forecastData);
          } catch (err) {
            setError("Could not fetch weather for your location.");
          } finally {
            setLoading(false);
          }
        },
        () => fetchWeatherData("Phnom Penh"),
      );
    } else {
      fetchWeatherData("Phnom Penh");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="animate-fadeInSlow">
      {/* Search Section */}
      <div className="flex justify-center mb-8">
        <CityAutocomplete onCitySelect={fetchWeatherData} isLoading={loading} />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-white text-xl py-12">
          <div className="inline-block animate-spin-slow rounded-full h-12 w-12 border-b-2 border-white mr-3"></div>
          <p>Loading weather data...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl max-w-md mx-auto text-center">
          ⚠️ {error}
        </div>
      )}

      {/* Weather Content */}
      {!loading && weather && (
        <div className="space-y-8 animate-slideUpSlow">
          <WeatherCard weather={weather} />
          <Forecast forecast={forecast} />
        </div>
      )}

      <style>{`
        @keyframes fadeInSlow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUpSlow {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fadeInSlow {
          animation: fadeInSlow 1s ease-out;
        }
        
        .animate-slideUpSlow {
          animation: slideUpSlow 0.8s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WeatherHome;
