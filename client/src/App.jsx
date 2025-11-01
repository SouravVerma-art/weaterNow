import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Banner from './Banner'
import WeatherInfo from './WeatherInfo'
import Footer from './Footer'

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 27.72,
    grnd_level: 986,
    humidity: 54,
    pressure: 1011,
    sea_level: 1011,
    temp_max: 27.05,
    temp_min: 27.05,
    temp: 27.05,
    weather: "Smoke",
    wind_deg: 310,
    wind_speed: 1.54,
})

let updateInfo = (newInfo) =>{
  setWeatherInfo(newInfo);
}
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <Banner/>
      <SearchBar updateInfo={updateInfo}/>
      <WeatherInfo info={weatherInfo}/>
      <Footer/>
    </div>
  )
}

export default App
