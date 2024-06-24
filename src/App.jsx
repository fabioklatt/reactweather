import axios from 'axios'
import React, { useState } from 'react'

export default function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a16e8c6750097b1f8e150c3d5601658d`
  

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    }
    
  }



  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={(event) => setLocation(event.target.value)}   
        onKeyDown={searchLocation}    
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
           <p>{data.name}</p>          
          </div>
          <div className="temp">
            {data.main && <h1>{parseInt(data.main.temp)}°C</h1>}           
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}</p>}
            
          </div>
        </div>
        <div className="bottom">
          <div>
            
            {data.main && <p className='bold'>{parseInt(data.main.feels_like)}</p>}
            {data.main && <p>Feels Like</p>}
          </div>
          <div>
            {data.main && <p className="bold">{data.main.humidity}</p>} 
            {data.main && <p>Humidity</p>}
          </div>
          <div>
            {data.wind &&  <p className="bold">{data.wind.speed} MPH</p>}
            {data.main && <p>Wind Speed</p>}
             
          </div>
        </div>
      </div>
    </div>
  )
}