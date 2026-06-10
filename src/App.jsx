import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import WeatherHome from "./pages/WeatherHome";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation when route changes
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-40">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Header Section - Fixed, No Animation */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 shadow-xl border border-white/20">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Weather Cambodia
              </span>
            </h1>

            <div className="flex justify-center items-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white"></div>
              <svg
                className="w-5 h-5 text-white/60"
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
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white"></div>
            </div>

            <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
              Real-time weather information for cities and provinces in Cambodia
            </p>

            <div className="flex justify-center mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-white/70 animate-pulse-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  <span className="text-white/70 text-xs">Live Updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar - Fixed, No Animation */}
          <nav className="flex justify-center gap-3 mb-10">
            <Link
              to="/"
              className={`px-7 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 font-medium ${
                location.pathname === "/"
                  ? "bg-white/25 text-white shadow-lg backdrop-blur-sm border border-white/40"
                  : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10 hover:border-white/30"
              }`}
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
            <Link
              to="/favorites"
              className={`px-7 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 font-medium ${
                location.pathname === "/favorites"
                  ? "bg-white/25 text-white shadow-lg backdrop-blur-sm border border-white/40"
                  : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10 hover:border-white/30"
              }`}
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Favorites
            </Link>
            <Link
              to="/about"
              className={`px-7 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 font-medium ${
                location.pathname === "/about"
                  ? "bg-white/25 text-white shadow-lg backdrop-blur-sm border border-white/40"
                  : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10 hover:border-white/30"
              }`}
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>
          </nav>

          {/* Content Section - Slides up from below when clicked */}
          <div className="min-h-[500px] overflow-hidden">
            <div
              className={`transform transition-all duration-500 ease-out ${
                isAnimating
                  ? "translate-y-8 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <Routes>
                <Route path="/" element={<WeatherHome />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>

          {/* Footer - Fixed, No Animation */}
          <div className="text-center text-white/40 text-xs mt-10 pt-6 border-t border-white/10">
            <p>© 2024 Weather Cambodia | Powered by OpenWeatherMap</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.95);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
