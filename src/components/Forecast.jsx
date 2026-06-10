import React from "react";
import { getWeatherIconUrl } from "../services/weatherService";

const Forecast = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  const getUniqueDailyForecasts = () => {
    const dailyMap = new Map();

    forecast.list.forEach((item) => {
      const date = new Date(item.dt_txt);
      const dateKey = date.toDateString();

      if (!dailyMap.has(dateKey)) {
        dailyMap.set(dateKey, item);
      } else {
        const existingHour = new Date(dailyMap.get(dateKey).dt_txt).getHours();
        const currentHour = date.getHours();
        if (Math.abs(currentHour - 12) < Math.abs(existingHour - 12)) {
          dailyMap.set(dateKey, item);
        }
      }
    });

    const dailyForecasts = Array.from(dailyMap.values());
    dailyForecasts.sort((a, b) => new Date(a.dt_txt) - new Date(b.dt_txt));
    return dailyForecasts;
  };

  const getForecastForDayOfWeek = (targetDayOfWeek, dailyForecasts) => {
    for (let forecast of dailyForecasts) {
      const forecastDate = new Date(forecast.dt_txt);
      if (forecastDate.getDay() === targetDayOfWeek) {
        return forecast;
      }
    }
    return dailyForecasts[0] || null;
  };

  const dailyForecasts = getUniqueDailyForecasts();

  const daysInOrder = [
    { name: "Monday", dayOfWeek: 1 },
    { name: "Tuesday", dayOfWeek: 2 },
    { name: "Wednesday", dayOfWeek: 3 },
    { name: "Thursday", dayOfWeek: 4 },
    { name: "Friday", dayOfWeek: 5 },
    { name: "Saturday", dayOfWeek: 6 },
    { name: "Sunday", dayOfWeek: 0 },
  ];

  // Get gradient based on weather condition - matching weather card style
  const getDayGradient = (condition) => {
    const conditionLower = condition.toLowerCase();
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

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {daysInOrder.map((day, index) => {
            const forecastForDay = getForecastForDayOfWeek(
              day.dayOfWeek,
              dailyForecasts,
            );

            if (!forecastForDay) return null;

            const weatherCondition = forecastForDay.weather[0].description;
            const gradientClass = getDayGradient(weatherCondition);

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradientClass} rounded-xl p-4 text-center border border-white/20 hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                {/* Day Name */}
                <div className="mb-3">
                  <p className="text-white font-bold text-xl drop-shadow-lg">
                    {day.name}
                  </p>
                  <div className="w-12 h-0.5 bg-white/40 mx-auto mt-1 rounded-full"></div>
                </div>

                {/* Weather Icon */}
                <div className="flex justify-center mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <img
                      src={getWeatherIconUrl(forecastForDay.weather[0].icon)}
                      alt={forecastForDay.weather[0].description}
                      className="w-16 h-16 drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Temperature */}
                <div className="mb-2">
                  <p className="text-3xl font-bold text-white drop-shadow-lg">
                    {Math.round(forecastForDay.main.temp)}°C
                  </p>
                </div>

                {/* Weather Condition */}
                <div className="mb-3">
                  <p className="text-white/80 text-sm capitalize">
                    {weatherCondition}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-2"></div>

                {/* Humidity */}
                <div className="mt-2">
                  <div className="flex items-center justify-center gap-1">
                    <svg
                      className="w-4 h-4 text-white/70"
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
                    </svg>
                    <p className="text-white/70 text-sm">
                      {forecastForDay.main.humidity}% humidity
                    </p>
                  </div>
                  {/* Humidity Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-1 mt-2 overflow-hidden">
                    <div
                      className="bg-white/60 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${forecastForDay.main.humidity}%` }}
                    ></div>
                  </div>
                </div>

                {/* Weather Indicator */}
                <div className="mt-3">
                  {weatherCondition.includes("rain") && (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-white/60 text-xs">🌧️</span>
                      <p className="text-white/50 text-xs">Rain expected</p>
                    </div>
                  )}
                  {weatherCondition.includes("clear") && (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-white/60 text-xs">☀️</span>
                      <p className="text-white/50 text-xs">Sunny day</p>
                    </div>
                  )}
                  {weatherCondition.includes("cloud") && (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-white/60 text-xs">☁️</span>
                      <p className="text-white/50 text-xs">Cloudy skies</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
