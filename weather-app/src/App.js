import React, {useState} from 'react'
import './App.css'

function App() { 
const apiKey = '3162758ae232875e7449531149e65a5e'
const [weatherData, setWeatherData] = useState([{}])
const [city, setCity] = useState("")

const getWeather = (event) => {
  if(event.key === "Enter") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data)
      }
    )
  }
 }


  return (
    <div className="container">
      <input className="input" 
      placeholder="Enter city..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to weather my app! Enter in a city to get the weather of.</p>
        </div>
      ): (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.floor(Math.round(weatherData.main.temp))} &deg;F</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ) : (
        <>
        </>
      )}


    </div>

  )
}
export default App