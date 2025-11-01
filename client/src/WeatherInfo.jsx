import React from "react";
import {
    Wind,
    Droplets,
    Gauge,
    Waves,
    ThermometerSun,
    ThermometerSnowflake,
    Mountain,
    Compass,
    CloudFog,
} from "lucide-react";

const WeatherInfo = ({ info }) => {

    const getWeatherImage = (temp) => {
        if (temp <= 0) {
            return "https://images.unsplash.com/photo-1608889175191-1ef3d4b8d541?auto=format&fit=crop&w=800&q=60";
        } else if (temp > 0 && temp <= 15) {
            return "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=800&q=60";
        } else if (temp > 15 && temp <= 25) {
            return "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60";
        } else if (temp > 25 && temp <= 35) {
            return "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=60";
        } else {
            return "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=800&q=60";
        }
    };


    const stats = [
        { label: "Feels Like", value: `${info.feels_like}°C`, icon: <ThermometerSun className="w-6 h-6 text-yellow-300" /> },
        { label: "Ground Level", value: `${info.grnd_level} hPa`, icon: <Mountain className="w-6 h-6 text-amber-300" /> },
        { label: "Humidity", value: `${info.humidity}%`, icon: <Droplets className="w-6 h-6 text-blue-300" /> },
        { label: "Pressure", value: `${info.pressure} hPa`, icon: <Gauge className="w-6 h-6 text-indigo-300" /> },
        { label: "Sea Level", value: `${info.sea_level} hPa`, icon: <Waves className="w-6 h-6 text-cyan-300" /> },
        { label: "Max Temp", value: `${info.temp_max}°C`, icon: <ThermometerSun className="w-6 h-6 text-orange-300" /> },
        { label: "Min Temp", value: `${info.temp_min}°C`, icon: <ThermometerSnowflake className="w-6 h-6 text-blue-400" /> },
        { label: "Wind Degree", value: `${info.wind_deg}°`, icon: <Compass className="w-6 h-6 text-emerald-300" /> },
        { label: "Wind Speed", value: `${info.wind_speed} m/s`, icon: <Wind className="w-6 h-6 text-teal-300" /> },
    ];

    return (
        <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full hover:shadow-2xl transition-shadow duration-300">
                {/* Header Image */}
                <img
                    className="rounded-lg max-h-48 w-full object-cover"
                    src={getWeatherImage(info.temp)}
                    alt="weather"
                />

                {/* City + Weather */}
                <div className="flex items-center justify-between mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{info.city}</h2>
                    <div className="flex items-center gap-2 text-gray-700">
                        <CloudFog className="w-6 h-6 text-indigo-500" />
                        <span className="text-lg capitalize font-medium">{info.weather}</span>
                    </div>
                </div>

                {/* Temperature Highlight */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center py-3 rounded-xl mt-4 shadow-md">
                    <h1 className="text-4xl font-bold">{info.temp}°C</h1>
                    <p className="text-sm opacity-80">Current Temperature</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-xl py-3 hover:scale-105 transition-transform duration-300 shadow-md"
                        >
                            <div className="p-2 bg-white/20 rounded-full mb-2">{stat.icon}</div>
                            <h2 className="text-sm opacity-90">{stat.label}</h2>
                            <p className="text-lg font-semibold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
