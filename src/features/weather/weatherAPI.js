import axios from "axios";

export const fetchWeather = async ({ latitude, longitude }) => {
  const response = await axios.get(
    `/.netlify/functions/fetchWeather?latitude=${latitude}&longitude=${longitude}`
  );
  return response.data;
};
