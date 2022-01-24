import React, { useState }from 'react';

function App() {

const apiKey = '3162758ae232875e7449531149e65a5e'
const {weatherData, setWeatherData} = useState([{}])
  return <div className="container">
    <input className="input" placeholder="Enter City..." />
  </div>
}

export default App;
