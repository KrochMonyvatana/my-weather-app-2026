import React, { useState, useEffect } from "react";
import { getWeatherByCity } from "../services/weatherService";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    "Phnom Penh",
    "Siem Reap",
    "Battambang",
  ]);
  const [favoriteWeather, setFavoriteWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      const results = [];
      for (const city of favorites) {
        try {
          const weather = await getWeatherByCity(city);
          results.push(weather);
        } catch (error) {
          console.error(`Error fetching ${city}:`, error);
        }
      }
      setFavoriteWeather(results);
      setLoading(false);
      setInitialLoadDone(true);
    };
    fetchFavorites();
  }, [favorites]);

  const addFavorite = () => {
    const city = prompt("Enter city name to add to favorites:");
    if (city && !favorites.includes(city)) {
      setFavorites([...favorites, city]);
    } else if (city && favorites.includes(city)) {
      alert("This city is already in your favorites!");
    }
  };

  const removeFavorite = (cityToRemove) => {
    if (confirm(`Remove ${cityToRemove} from favorites?`)) {
      setFavorites(favorites.filter((city) => city !== cityToRemove));
      setFavoriteWeather(
        favoriteWeather.filter((weather) => weather?.name !== cityToRemove),
      );
    }
  };

  const getCardGradient = (condition) => {
    const conditionLower = condition?.toLowerCase() || "";
    if (conditionLower.includes("rain")) {
      return "from-slate-800 via-slate-700 to-slate-800";
    }
    if (conditionLower.includes("clear")) {
      return "from-blue-600 via-blue-500 to-indigo-600";
    }
    if (conditionLower.includes("cloud")) {
      return "from-gray-700 via-gray-600 to-blue-700";
    }
    if (conditionLower.includes("storm")) {
      return "from-gray-900 via-purple-900 to-indigo-900";
    }
    return "from-blue-700 via-blue-600 to-indigo-700";
  };

  // Don't show anything while loading on first visit
  if (loading && !initialLoadDone) {
    return null;
  }

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div
        className="px-6 py-3"
        style={{
          backgroundColor: "rgba(184, 184, 184, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="text-white text-md font-medium drop-shadow-md">
              Favorite Cities
            </p>
          </div>
          <button
            onClick={addFavorite}
            className="bg-white/20 text-white px-4 py-1.5 rounded-lg flex items-center gap-1 text-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
            title="Add a new city to your favorites list"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add City
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {favoriteWeather.length === 0 ? (
          <div className="text-center py-12 text-white/60">
            <p className="text-lg">No favorite cities yet.</p>
            <p className="text-sm mt-2">
              Click "Add City" to save your favorite locations!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteWeather.map((weather, index) => {
              const weatherCondition = weather?.weather[0]?.description || "";
              const gradientClass = getCardGradient(weatherCondition);
              const isHovered = hoveredCity === weather.name;

              return (
                weather && (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${gradientClass} rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-200 relative`}
                  >
                    {/* Weather Condition Banner */}
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 border-b border-white/20">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">
                          {weatherCondition.includes("rain")
                            ? "🌧️"
                            : weatherCondition.includes("clear")
                              ? "☀️"
                              : weatherCondition.includes("cloud")
                                ? "☁️"
                                : weatherCondition.includes("storm")
                                  ? "⛈️"
                                  : "🌤️"}
                        </span>
                        <p className="text-white/70 text-xs capitalize">
                          {weatherCondition}
                        </p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold drop-shadow-lg">
                            {weather.name}
                          </h3>
                          <p className="text-3xl font-bold drop-shadow-lg mt-1">
                            {Math.round(weather.main.temp)}°C
                          </p>
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => removeFavorite(weather.name)}
                            onMouseEnter={() => setHoveredCity(weather.name)}
                            onMouseLeave={() => setHoveredCity(null)}
                            className="bg-white/20 hover:bg-red-500/80 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer"
                          >
                            ✕
                          </button>
                          {/* Tooltip */}
                          {isHovered && (
                            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-20 shadow-lg border border-white/20">
                              Remove {weather.name} from favorites
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/20">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1 group relative">
                            <svg
                              className="w-3.5 h-3.5 text-white/70"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7 7 7"
                              />
                            </svg>
                            <div>
                              <p className="text-sm font-semibold">
                                {weather.main.humidity}%
                              </p>
                              <p className="text-[10px] opacity-70">Humidity</p>
                            </div>
                            {/* Tooltip for humidity */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 border border-white/20">
                              Current humidity level
                            </div>
                          </div>
                          <div className="flex items-center gap-1 group relative">
                            <svg
                              className="w-3.5 h-3.5 text-white/70"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7-7 7M3 12h15"
                              />
                            </svg>
                            <div>
                              <p className="text-sm font-semibold">
                                {Math.round(weather.wind.speed)} m/s
                              </p>
                              <p className="text-[10px] opacity-70">Wind</p>
                            </div>
                            {/* Tooltip for wind */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 border border-white/20">
                              Current wind speed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
