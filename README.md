# Weather Cambodia

A professional weather web application that provides real-time weather information for all cities and provinces in Cambodia. Built with React, Vite, Tailwind CSS, and OpenWeatherMap API.

## Live Links

Live Website: https://my-weather-app-2026.vercel.app/

GitHub Repository: https://github.com/KrochMonyvatana/my-weather-app-2026

---

## What is a README file?

A README file is the first file a person sees when they visit your project on GitHub or GitLab. It explains what the project does, how to install it, how to use it, and what technologies were used. It serves as documentation for developers, employers, and anyone who wants to understand or contribute to your project.

---

## Table of Contents

- Overview
- Features
- Technology Stack
- Project Structure
- Installation and Setup
- Environment Variables
- API Integration
- How It Works
- Deployment
- Contact

---

## Overview

Weather Cambodia is a full-stack weather application designed specifically for Cambodia. It allows users to get current weather based on their location, search for any city or province in Cambodia, view detailed weather information including temperature, humidity, wind speed, pressure, and visibility, see a 7-day weather forecast from Monday to Sunday, save favorite cities for quick access, and experience weather-based animations including rain drops, moving clouds, sun rays, and lightning flashes.

---

## Features

### Core Features

Geolocation Detection: Automatically detects user's current location and displays local weather. Status: Complete.

City Search: Search any city or province in Cambodia with autocomplete suggestions. Status: Complete.

Current Weather: Displays temperature, feels like temperature, humidity percentage, wind speed in meters per second and kilometers per hour, atmospheric pressure in hPa, and visibility in kilometers. Status: Complete.

7-Day Forecast: Shows weather predictions from Monday to Sunday including day name, weather icon, temperature, and humidity. Status: Complete.

Favorites: Save and manage favorite cities. Add new cities with a button and remove them with a delete button. Status: Complete.

About Page: Application information explaining features, technology stack, and data source. Status: Complete.

### Visual Features

Glass Morphism Design: Modern transparent and translucent card design with backdrop blur effects. Status: Complete.

Weather Animations: Rain drops fall when weather is rainy, moving clouds float across screen when weather is cloudy, rotating sun rays appear when weather is clear, and lightning flashes when weather is stormy. Status: Complete.

Responsive Design: Works on mobile phones, tablets, and desktop computers with different layouts for each screen size. Status: Complete.

Dynamic Gradients: Background colors change automatically based on weather condition. Rain shows dark slate gradient, clear shows blue gradient, cloudy shows gray blue gradient, storm shows dark purple gradient. Status: Complete.

Cambodia Flag: Animated Cambodia flag video displayed in the header. Status: Complete.

### User Experience Features

Autocomplete: Shows matching cities as the user types. Only shows cities that start with the typed letters. Status: Complete.

Tooltips: Hover information appears on interactive elements like delete buttons, humidity icons, and wind icons. Status: Complete.

Smooth Transitions: Page content slides in smoothly when navigating between Home, Favorites, and About pages. Status: Complete.

Error Handling: User-friendly error messages appear when a city is not found or when there is an API error. Status: Complete.

Loading States: Visual feedback appears while weather data is being fetched. Status: Complete.

---

## Technology Stack

### Frontend Framework

React version 18: UI component library for building the user interface.

Vite version 5: Build tool and development server for fast development.

React Router DOM version 6: Client-side routing for navigation between Home, Favorites, and About pages.

### Styling

Tailwind CSS: Utility-first CSS framework for responsive design and styling.

Custom CSS: Custom animations for rain drops, moving clouds, sun rays, and lightning flashes.

### API and HTTP Client

OpenWeatherMap API: Source of all weather data including current conditions and 7-day forecast.

Axios: HTTP client for making API requests to OpenWeatherMap.

### Development Tools

VS Code: Code editor used for development.

Git: Version control system for tracking changes.

GitHub: Code repository hosting.

Vercel: Hosting and deployment platform.

---

## Project Structure

weather-cambodia/
│
├── .env Environment variables file storing API key
├── .gitignore Files ignored by Git such as node_modules and .env
├── index.html HTML entry point where React mounts
├── package.json List of dependencies and npm scripts
├── package-lock.json Locked versions of all dependencies
├── postcss.config.js PostCSS configuration for Tailwind
├── tailwind.config.js Tailwind CSS configuration
├── vite.config.js Vite build tool configuration
├── README.md Project documentation file
│
├── public/
│ └── cambodia-flag.mp4 Cambodia flag animation video
│
└── src/
├── main.jsx Application entry point, renders React app
├── App.jsx Main application component with routing
├── index.css Global styles including Tailwind and animations
│
├── components/
│ ├── CityAutocomplete.jsx Search component with autocomplete functionality
│ ├── WeatherCard.jsx Component that displays current weather
│ └── Forecast.jsx Component that displays 7-day forecast
│
├── pages/
│ ├── WeatherHome.jsx Home page with weather display and search
│ ├── Favorites.jsx Page for managing favorite cities
│ └── About.jsx Page with application information
│
├── data/
│ └── cambodiaCities.js List of all cities and provinces in Cambodia
│
└── services/
└── weatherService.js API communication layer for OpenWeatherMap

---

## Installation and Setup

Prerequisites

Node.js version 16 or higher must be installed on your computer. npm or yarn package manager is required. An OpenWeatherMap API key is needed and can be obtained for free.

Step-by-Step Installation

1. Clone the repository
   git clone https://github.com/KrochMonyvatana/my-weather-app-2026.git

2. Navigate to project directory
   cd my-weather-app-2026

3. Install dependencies
   npm install

4. Create .env file with your API key
   echo "VITE_OPENWEATHER_API_KEY=your_api_key_here" > .env

5. Start development server
   npm run dev

6. Open browser and visit
   http://localhost:5173

Available Scripts

npm run dev: Starts development server at localhost:5173

npm run build: Creates production build in dist folder

npm run preview: Previews production build locally

---

## Environment Variables

Create a .env file in the root directory with the following variable:

VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key_here

How to Get an OpenWeatherMap API Key

1. Go to openweathermap.org
2. Sign up for a free account
3. Verify your email address
4. Navigate to the API Keys section in your account
5. Copy your unique API key
6. Paste it in the .env file

Important Notes

Never commit your .env file to GitHub. It is already included in .gitignore. The API key must be kept secret. Different API keys can be used for development and production environments.

---

## API Integration

OpenWeatherMap Endpoints Used

/weather: Returns current weather data for a specific city including temperature, humidity, wind speed, pressure, and visibility.

/forecast: Returns 5-day weather forecast with 8 readings per day, totaling 40 data points.

API Request Example

The application sends a GET request to the following URL format:

https://api.openweathermap.org/data/2.5/weather?q=Phnom Penh,KH&appid=API_KEY&units=metric

The response includes main object with temperature and humidity, weather array with description and icon code, wind object with speed, and visibility in meters.

Province Name Mapping

OpenWeatherMap recognizes city names but not province names. A mapping system was implemented to convert province names to API-friendly city names.

User Searches "Pailin" -> API Receives "Pailin City"

User Searches "Kep" -> API Receives "Krong Kep"

User Searches "Mondulkiri" -> API Receives "Senmonorom"

User Searches "Banteay Meanchey" -> API Receives "Serei Saophoan"

User Searches "Ratanakiri" -> API Receives "Banlung"

User Searches "Oddar Meanchey" -> API Receives "Samraong"

User Searches "Preah Vihear" -> API Receives "Tbaeng Meanchey"

User Searches "Stung Treng" -> API Receives "Stung Treng City"

User Searches "Tboung Khmum" -> API Receives "Suong"

User Searches "Kampong Speu" -> API Receives "Kampong Speu City"

User Searches "Koh Kong" -> API Receives "Khemarak Phoumin"

---

## How It Works

Weather Data Flow

Step 1: User opens the application.

Step 2: Browser requests location permission from the user.

Step 3: Application gets latitude and longitude coordinates.

Step 4: weatherService.js sends HTTP request to OpenWeatherMap API.

Step 5: API returns JSON weather data.

Step 6: Data is saved in React useState hooks.

Step 7: WeatherCard component receives weather data as props and displays it.

Step 8: Forecast component receives forecast data and displays 7-day prediction.

Search Functionality

Step 1: User types letters in the search box.

Step 2: Application filters cambodiaCities array to show only cities that start with the typed letters.

Step 3: Maximum of 8 suggestions appear below the input.

Step 4: User clicks a suggestion or presses Enter to search.

Step 5: Application validates that the city exists in the Cambodia list.

Step 6: If valid, weather data is fetched for that city.

Step 7: If invalid, an error message appears.

Geolocation Detection

Step 1: Application calls navigator.geolocation.getCurrentPosition on page load.

Step 2: Browser asks user for location permission.

Step 3: If granted, coordinates are sent to OpenWeatherMap API.

Step 4: If denied or fails, application falls back to Phnom Penh as default city.

Weather Animations

Rain: When API returns rain or drizzle in the weather description, 15 raindrops fall from top to bottom with different speeds and rotation.

Clear: When API returns clear sky, rotating sun rays appear with a pulsing yellow glow.

Clouds: When API returns clouds, 6 large semi-transparent clouds float across the screen.

Storm: When API returns thunderstorm, lightning bolts flash and the screen briefly flashes white.

Favorites Page

Adding a City: User clicks Add City button, types a city name in the prompt, application validates the city exists in Cambodia, then fetches weather data and displays a new card.

Removing a City: User clicks the X button on any city card, a confirmation dialog appears, city is removed from the favorites array, and the card disappears from the screen.

---

## Deployment

Deploy to Vercel (Recommended)

This project is already deployed on Vercel at: https://my-weather-app-2026.vercel.app/

To redeploy:

1. Build the project: npm run build

2. Push changes to GitHub: git push origin main

3. Vercel automatically deploys from the GitHub repository.

Deploy to Netlify

1. Build the project: npm run build

2. Go to netlify.com and sign in.

3. Drag and drop the dist folder to the Netlify dashboard.

4. Your live website will be available immediately.

Environment Variables on Production

When deploying to Vercel or Netlify, you must add the same environment variables on the hosting platform.

For Vercel: Go to Project Settings, then Environment Variables, add VITE_OPENWEATHER_API_KEY with your API key.

For Netlify: Go to Site Settings, then Build and Deploy, then Environment, add the variable.

---

## Contact

Developer: Kroch Monyvatana

GitHub: https://github.com/KrochMonyvatana

Project Repository: https://github.com/KrochMonyvatana/my-weather-app-2026

Live Demo: https://my-weather-app-2026.vercel.app/

---

## Acknowledgments

OpenWeatherMap for providing the weather data API.

Tailwind CSS for the utility-first CSS framework.

React for the UI library.

Vite for the build tool.

---

## Features Checklist

Geolocation detection: Complete

Real-time weather data: Complete

Search with autocomplete: Complete

Current weather display: Complete

7-day forecast: Complete

Weather-based animations: Complete

Responsive design: Complete

Favorites page: Complete

About page: Complete

Error handling: Complete

Loading states: Complete

---

## Project Statistics

Total Lines of Code: Approximately 2500 lines

React Components: 6 components

Pages: 3 pages

Cities Supported: 25 provinces plus all major cities

API Endpoints Used: 4 endpoints

Weather Animations: 4 animation types

---

Last Updated: June 2026

Built for Cambodia
