import React from "react";

const About = () => {
  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden">
      {/* Header Banner - Same as Favorites page */}
      <div
        className="px-6 py-3"
        style={{
          backgroundColor: "rgba(184, 184, 184, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-white text-md font-medium drop-shadow-md">
            About Weather Cambodia
          </p>
        </div>
      </div>

      {/* Content Area - Same dark background as Favorites */}
      <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="space-y-5 text-white/80">
          {/* Real-time Weather */}
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌤️</span>
            <div>
              <h3 className="font-bold text-lg mb-1 text-white">
                Real-time Weather
              </h3>
              <p className="text-white/70">
                Provides real-time weather information for all cities and
                provinces in Cambodia.
              </p>
            </div>
          </div>

          {/* Features - No icon */}
          <div className="flex items-start gap-3">
            <div className="w-8"></div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-white">Features</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-white/70">
                <li>Automatic geolocation detection</li>
                <li>Search any city in Cambodia with autocomplete</li>
                <li>Current weather with temperature, humidity, wind speed</li>
                <li>7-day weather forecast (Monday to Sunday)</li>
                <li>Weather-based animations (rain, clouds, sun, storm)</li>
                <li>Responsive design for all devices</li>
                <li>Save favorite cities</li>
              </ul>
            </div>
          </div>

          {/* Technologies Used - No icon */}
          <div className="flex items-start gap-3">
            <div className="w-8"></div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-white">
                Technologies Used
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-white/70">
                <li>React 18 + Vite</li>
                <li>Tailwind CSS</li>
                <li>OpenWeatherMap API</li>
                <li>React Router for navigation</li>
                <li>Axios for API calls</li>
              </ul>
            </div>
          </div>

          {/* Data Source - No icon */}
          <div className="flex items-start gap-3">
            <div className="w-8"></div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-white">Data Source</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-white/70">
                <li>All weather data is provided by OpenWeatherMap</li>
                <li>Updated in real-time from their global weather API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
