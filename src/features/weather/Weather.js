import React, { useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState({
    temperature: "73",
    icon: "",
    description: "cloudy",
  });

  return (
    <div>
      <img src={weather.icon} alt="weather icon" />
      <h3>{weather.temperature}&deg;</h3>
      <p>{weather.description}</p>
    </div>
  );
}
