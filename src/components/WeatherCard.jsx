import React from "react";
import { getWeatherIconUrl } from "../services/weatherService";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const getDayName = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const weatherCondition = weather.weather[0].description;

  const getCardGradient = () => {
    if (weatherCondition.includes("rain")) {
      return "from-slate-800 via-slate-700 to-slate-800";
    }
    if (weatherCondition.includes("clear")) {
      return "from-blue-600 via-blue-500 to-indigo-600";
    }
    if (weatherCondition.includes("cloud")) {
      return "from-gray-700 via-gray-600 to-blue-700";
    }
    if (
      weatherCondition.includes("storm") ||
      weatherCondition.includes("thunder")
    ) {
      return "from-gray-900 via-purple-900 to-indigo-900";
    }
    return "from-blue-700 via-blue-600 to-indigo-700";
  };

  return (
    <div className="mb-8 relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Moving Clouds Background */}
      <div className="cloud-container">
        <div className="cloud-bg cloud-bg1">☁️</div>
        <div className="cloud-bg cloud-bg2">☁️</div>
        <div className="cloud-bg cloud-bg3">☁️</div>
        <div className="cloud-bg cloud-bg4">☁️</div>
        <div className="cloud-bg cloud-bg5">☁️</div>
        <div className="cloud-bg cloud-bg6">☁️</div>
      </div>

      {/* Rain Effect */}
      {(weatherCondition.includes("rain") ||
        weatherCondition.includes("drizzle")) && (
        <div className="rain-container">
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
        </div>
      )}

      {/* Sun Effect */}
      {weatherCondition.includes("clear") && (
        <div className="sun-container">
          <div className="sun-glow"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
          <div className="sun-ray"></div>
        </div>
      )}

      {/* Storm Effect */}
      {(weatherCondition.includes("storm") ||
        weatherCondition.includes("thunder")) && (
        <div className="storm-container">
          <div className="lightning"></div>
          <div className="lightning"></div>
          <div className="lightning"></div>
        </div>
      )}

      {/* Main Card Content */}
      <div
        className={`bg-gradient-to-br ${getCardGradient()} backdrop-blur-sm relative z-10`}
      >
        {/* Weather Condition Banner */}
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Professional weather icon based on condition */}
              {weatherCondition.includes("rain") ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 15v2m8-2v2m-4-4v4"
                  />
                </svg>
              ) : weatherCondition.includes("clear") ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : weatherCondition.includes("cloud") ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              )}
              <p className="text-white/90 text-md font-medium capitalize drop-shadow-md">
                {weatherCondition}
              </p>
            </div>
            <div className="text-white/60 text-xs">Live update</div>
          </div>
        </div>

        <div className="p-8">
          {/* City and Date Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {weather.name}, Cambodia
              </h2>
            </div>
            <div className="flex justify-center items-center gap-4 text-white/70">
              <div className="flex items-center gap-1">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">{getDayName()}</span>
              </div>
              <span>•</span>
              <span>{formatDate()}</span>
            </div>
          </div>

          {/* Main Weather Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Weather Icon Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 mb-4">
                <img
                  src={getWeatherIconUrl(weather.weather[0].icon)}
                  alt={weather.weather[0].description}
                  className="w-32 h-32 md:w-36 md:h-36 drop-shadow-2xl animate-float"
                />
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm">Current Weather</p>
                <p className="text-white font-semibold capitalize text-lg drop-shadow-md">
                  {weatherCondition}
                </p>
              </div>
            </div>

            {/* Center - Temperature Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="relative">
                  <p className="text-7xl md:text-8xl font-bold text-white drop-shadow-2xl animate-bounce-slow">
                    {Math.round(weather.main.temp)}°C
                  </p>
                  <div className="absolute -top-4 -right-8 w-16 h-16 bg-orange-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
                <p className="text-white/60 text-md mt-2">
                  Current Temperature
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                  <svg
                    className="w-4 h-4 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <p className="text-white font-medium">
                    Feels like {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Weather Details Grid with Professional Icons */}
            <div className="grid grid-cols-2 gap-4">
              {/* Humidity */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white/80"
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
                </div>
                <div className="text-3xl font-bold text-white">
                  {weather.main.humidity}%
                </div>
                <div className="text-white/60 text-sm mt-1">Humidity</div>
                <div className="w-full bg-white/20 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-white/60 h-1.5 rounded-full"
                    style={{ width: `${weather.main.humidity}%` }}
                  ></div>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white/80"
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
                </div>
                <div className="text-3xl font-bold text-white">
                  {Math.round(weather.wind.speed)} m/s
                </div>
                <div className="text-white/60 text-sm mt-1">Wind Speed</div>
                <div className="text-xs text-white/50 mt-1">
                  {Math.round(weather.wind.speed * 3.6)} km/h
                </div>
              </div>

              {/* Pressure */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white/80 animate-spin-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white">
                  {weather.main.pressure} hPa
                </div>
                <div className="text-white/60 text-sm mt-1">Pressure</div>
                <div className="text-xs text-white/50 mt-1">
                  {weather.main.pressure > 1013
                    ? "High Pressure"
                    : weather.main.pressure < 1013
                      ? "Low Pressure"
                      : "Standard"}
                </div>
              </div>

              {/* Visibility */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white">
                  {(weather.visibility / 1000).toFixed(1)} km
                </div>
                <div className="text-white/60 text-sm mt-1">Visibility</div>
                <div className="text-xs text-white/50 mt-1">
                  {weather.visibility / 1000 > 5 ? "Excellent" : "Limited"}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Row */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-white/50 text-xs flex items-center justify-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Sunrise
                </p>
                <p className="text-white font-semibold">
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-xs flex items-center justify-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Sunset
                </p>
                <p className="text-white font-semibold">
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-xs">Max Temp</p>
                <p className="text-white font-semibold">
                  {Math.round(weather.main.temp_max)}°C
                </p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-xs">Min Temp</p>
                <p className="text-white font-semibold">
                  {Math.round(weather.main.temp_min)}°C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
          display: inline-block;
        }

        .cloud-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 5;
        }
        
        .cloud-bg {
          position: absolute;
          font-size: 100px;
          opacity: 0.2;
          animation: move-clouds linear infinite;
          white-space: nowrap;
        }
        
        .cloud-bg1 { top: 5%; left: -100px; animation-duration: 25s; font-size: 120px; }
        .cloud-bg2 { top: 25%; left: -200px; animation-duration: 35s; animation-delay: 5s; font-size: 80px; }
        .cloud-bg3 { top: 50%; left: -150px; animation-duration: 30s; animation-delay: 10s; font-size: 140px; }
        .cloud-bg4 { top: 70%; left: -250px; animation-duration: 40s; animation-delay: 3s; font-size: 60px; }
        .cloud-bg5 { top: 85%; left: -80px; animation-duration: 28s; animation-delay: 7s; font-size: 90px; }
        .cloud-bg6 { top: 15%; left: -300px; animation-duration: 45s; animation-delay: 12s; font-size: 70px; }
        
        @keyframes move-clouds {
          0% { transform: translateX(0px); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }

        .rain-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 15;
        }
        
        .rain-drop {
          position: absolute;
          top: -20px;
          width: 3px;
          height: 20px;
          background: linear-gradient(180deg, rgba(74,144,226,0.8) 0%, rgba(74,144,226,0.2) 100%);
          border-radius: 2px;
          animation: rain-fall linear infinite;
        }
        
        @keyframes rain-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        .rain-drop:nth-child(1) { left: 5%; animation-duration: 0.8s; }
        .rain-drop:nth-child(2) { left: 12%; animation-duration: 1s; animation-delay: 0.2s; }
        .rain-drop:nth-child(3) { left: 20%; animation-duration: 0.7s; animation-delay: 0.5s; }
        .rain-drop:nth-child(4) { left: 28%; animation-duration: 1.1s; animation-delay: 0.1s; }
        .rain-drop:nth-child(5) { left: 35%; animation-duration: 0.9s; animation-delay: 0.8s; }
        .rain-drop:nth-child(6) { left: 42%; animation-duration: 0.6s; animation-delay: 0.3s; }
        .rain-drop:nth-child(7) { left: 50%; animation-duration: 1.2s; animation-delay: 0.6s; }
        .rain-drop:nth-child(8) { left: 58%; animation-duration: 0.75s; animation-delay: 0.4s; }
        .rain-drop:nth-child(9) { left: 65%; animation-duration: 0.95s; animation-delay: 0.7s; }
        .rain-drop:nth-child(10) { left: 72%; animation-duration: 0.85s; animation-delay: 0.9s; }
        .rain-drop:nth-child(11) { left: 80%; animation-duration: 1.05s; animation-delay: 0.15s; }
        .rain-drop:nth-child(12) { left: 88%; animation-duration: 0.65s; animation-delay: 0.55s; }
        .rain-drop:nth-child(13) { left: 95%; animation-duration: 0.95s; animation-delay: 0.35s; }
        .rain-drop:nth-child(14) { left: 45%; animation-duration: 1.15s; animation-delay: 0.75s; }
        .rain-drop:nth-child(15) { left: 62%; animation-duration: 0.55s; animation-delay: 0.95s; }

        .sun-container {
          position: absolute;
          top: 20px;
          right: 20px;
          pointer-events: none;
          z-index: 15;
        }
        
        .sun-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0) 70%);
          border-radius: 50%;
          animation: pulse-sun 2s ease-in-out infinite;
        }
        
        .sun-ray {
          position: absolute;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: rotate-sun 10s linear infinite;
        }
        
        @keyframes pulse-sun {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        
        @keyframes rotate-sun {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .storm-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
          background: rgba(0,0,0,0.2);
          animation: storm-flash 3s infinite;
        }
        
        .lightning {
          position: absolute;
          width: 6px;
          height: 60px;
          background: linear-gradient(180deg, #fff 0%, #ffeb3b 50%, transparent 100%);
          filter: blur(3px);
          animation: lightning-flash 0.3s ease-in-out infinite;
        }
        
        .lightning:nth-child(1) { left: 25%; top: 10%; animation-delay: 0s; height: 80px; }
        .lightning:nth-child(2) { left: 55%; top: 20%; animation-delay: 1.5s; height: 100px; width: 8px; }
        .lightning:nth-child(3) { left: 75%; top: 5%; animation-delay: 0.8s; height: 70px; }
        
        @keyframes lightning-flash {
          0%, 100% { opacity: 0; transform: scaleY(0); }
          50% { opacity: 1; transform: scaleY(1); box-shadow: 0 0 30px #ffeb3b; }
        }
        
        @keyframes storm-flash {
          0%, 90%, 100% { background: rgba(0,0,0,0); }
          95% { background: rgba(255,255,255,0.3); }
        }
      `}</style>
    </div>
  );
};

export default WeatherCard;
