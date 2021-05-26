const API_KEY = "eaf56d2245fe23a69ae8d5033bd236f2";
const zipCode = "22042";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${API_KEY}`;

export const fetchWeather = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return {
    icon: json.weather[0].icon,
    description: json.weather[0].description,
    temperature: json.main.temp,
  };
};
