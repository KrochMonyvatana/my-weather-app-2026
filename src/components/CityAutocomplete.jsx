import React, { useState, useEffect, useRef } from "react";
import { cambodiaCities } from "../data/cambodiaCities";

const CityAutocomplete = ({ onCitySelect, isLoading }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setErrorMessage("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setErrorMessage("");

    if (value.trim().length > 0) {
      // ONLY show cities that START WITH the typed letters (not contains)
      const filtered = cambodiaCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase()),
      );
      setSuggestions(filtered.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city);
    setShowSuggestions(false);
    setErrorMessage("");
    onCitySelect(city);
  };

  const handleSearch = () => {
    const searchTerm = inputValue.trim();

    if (!searchTerm) {
      setErrorMessage("Please enter a city name");
      return;
    }

    // Check if the searched city exists (case-insensitive)
    const cityExists = cambodiaCities.some(
      (city) => city.toLowerCase() === searchTerm.toLowerCase(),
    );

    if (cityExists) {
      setErrorMessage("");
      setShowSuggestions(false);
      onCitySelect(searchTerm);
    } else {
      setErrorMessage(
        `"${searchTerm}" is not a valid city in Cambodia. Please try again.`,
      );
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl">
      <div className="flex w-full">
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              className="w-5 h-5"
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
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search city or province in Cambodia..."
            className={`w-full pl-11 pr-4 py-4 text-gray-700 bg-white rounded-l-2xl text-lg border-0 outline-none shadow-lg ${errorMessage ? "border-2 border-red-500" : ""}`}
            disabled={isLoading}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 font-semibold text-lg shadow-lg flex items-center gap-2 whitespace-nowrap"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>Search</span>
        </button>
      </div>

      {errorMessage && (
        <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center shadow-md flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {showSuggestions && suggestions.length > 0 && !errorMessage && (
        <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-80 overflow-auto">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(city)}
              className="px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 text-gray-700 transition-all duration-150 border-b border-gray-100 last:border-b-0 flex items-center gap-3"
            >
              <svg
                className="w-5 h-5 text-gray-500"
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
              <span className="text-lg font-medium">{city}</span>
              <span className="text-xs text-gray-400 ml-auto">Cambodia</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityAutocomplete;
