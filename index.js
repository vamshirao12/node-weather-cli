const axios = require('axios');

const API_KEY = 'YOUR_API_KEY'; // Get your free API key from https://weatherapi.com
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeather(city) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}`);
    const data = response.data;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    console.log(`Weather in ${city}: ${temp}°C, ${condition}`);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error(`Error: ${error.response.data.error.message}`);
    } else {
      console.error('Error fetching weather data. Please check your internet connection, API key, or city name.');
    }
  }
}

const city = process.argv[2];
if (!city) {
  console.error('Please provide a city name as an argument.');
  process.exit(1);
}

getWeather(city);