import axios from "axios";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
 // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: `${city},KH`,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

// Get 7-day forecast
export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: `${city},KH`,
        appid: API_KEY,
        units: "metric",
        cnt: 40, // 5 days * 8 readings per day = 40 (we'll extract 7 days)
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};

// Get weather by coordinates (for geolocation)
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather by coordinates:", error);
    throw error;
  }
};

// Get forecast by coordinates
export const getForecastByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
        cnt: 40,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast by coordinates:", error);
    throw error;
  }
};

// Get weather icon URL
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
