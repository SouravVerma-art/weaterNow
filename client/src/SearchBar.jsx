import React, { useState } from 'react';
import { Search } from "lucide-react";

const SearchBar = ({ updateInfo }) => {

  const formatCityName = (name) => {
    return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  };

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "b65bcc03612245350ba082948e30f45e";

  const [city, setCity] = useState("");

  const getWeatherInfo = async (cityName) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_Key}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const jsonResponse = await response.json();

      const result = {
        city: formatCityName(cityName),
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        grnd_level: jsonResponse.main.grnd_level,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        weather: jsonResponse.weather[0].description,
        wind_speed: jsonResponse.wind.speed,
        wind_deg: jsonResponse.wind.deg,
      }; updateInfo(result);

      console.log(result);
    } catch (error) {
      alert("City not found. Please check spelling or try again.")
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (city.trim() !== "") {
      getWeatherInfo(city);
      setCity("");
    }
  };

  return (
    <div className="flex mt-4 items-center justify-center border border-gray-300 bg-white pl-4 gap-2 h-[46px] rounded-full overflow-hidden max-w-md w-full shadow-sm">
      <Search size={30} color="#6B7280" />
      <input
        type="text"
        className="w-full h-full outline-none text-sm text-gray-500"
        placeholder="Check weather in your area"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-[5px]
        hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2
        hover:shadow-[0_0_15px_3px_rgba(74,222,128,0.5)]
        transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
