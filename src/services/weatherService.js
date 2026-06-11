import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Complete mapping of ALL provinces to API-friendly city names
const cityNameMapping = {
  // Province to Capital City mapping
  "Banteay Meanchey": "Serei Saophoan",
  "Oddar Meanchey": "Samraong",
  Mondulkiri: "Senmonorom",
  Ratanakiri: "Banlung",
  "Preah Vihear": "Tbaeng Meanchey",
  "Stung Treng": "Stung Treng City",
  Kep: "Krong Kep",
  Pailin: "Pailin City",
  "Tboung Khmum": "Suong",
  "Kampong Speu": "Kampong Speu City",
  "Koh Kong": "Khemarak Phoumin",
  Kandal: "Ta Khmau",
  "Kampong Chhnang": "Kampong Chhnang",
  "Kampong Thom": "Kampong Thom",
  "Prey Veng": "Prey Veng",
  "Svay Rieng": "Svay Rieng",
  Takeo: "Takeo",
  Kratie: "Kratie",
  Pursat: "Pursat",
  "Kampong Cham": "Kampong Cham",
  Kampot: "Kampot",
  "Siem Reap": "Siem Reap",
  Battambang: "Battambang",
  Sihanoukville: "Sihanoukville",
  "Phnom Penh": "Phnom Penh",
  Poipet: "Poipet",
  "Ta Khmau": "Ta Khmau",
  "Serei Saophoan": "Serei Saophoan",
  Samraong: "Samraong",
  Senmonorom: "Senmonorom",
  Banlung: "Banlung",
  "Tbaeng Meanchey": "Tbaeng Meanchey",
  "Stung Treng City": "Stung Treng City",
  "Krong Kep": "Krong Kep",
  "Pailin City": "Pailin City",
  Suong: "Suong",
  "Kampong Speu City": "Kampong Speu City",
  "Khemarak Phoumin": "Khemarak Phoumin",
  Lumphat: "Lumphat",
  Sisophon: "Sisophon",
};

// Get the API-friendly city name
const getApiCityName = (city) => {
  return cityNameMapping[city] || city;
};

// Get weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const apiCityName = getApiCityName(city);
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: `${apiCityName},KH`,
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
    const apiCityName = getApiCityName(city);
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: `${apiCityName},KH`,
        appid: API_KEY,
        units: "metric",
        cnt: 40,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};

// Get weather by coordinates
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
