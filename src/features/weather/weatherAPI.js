import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchWeather = async ({ latitude, longitude }) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`;
  const response = await axios.get(API_URL);
  return {
    icon: response.data.weather[0].icon,
    description: response.data.weather[0].description,
    temperature: response.data.main.temp,
  };
};
