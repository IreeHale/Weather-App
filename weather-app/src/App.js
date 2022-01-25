import React, {useState} from 'react'
import './App.css'

const apiKey = '3162758ae232875e7449531149e65a5e'
const [weatherData, setWEatherData] = useState([{}])

function App() {
  return <div className="container">
    <input className="input" placeholder="Enter city..."/>
  </div>
}

export default App;

