import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import Card from './components/Card';

function App() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const success = ((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d7c5d95c0aa12910090f8c44fe60eeb`)
        .then((res) => {

          setWeather({
            city: res.data.name,
            country: res.data.sys.country,
            temperature: res.data.main.temp - 273.15,
            description: res.data.weather[0].description,
            wind: res.data.wind.speed,
            clouds: res.data.clouds.all,
            pressure: res.data.main.pressure,
            icon: res.data.weather[0].icon,
          })
        })


    })
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(weather);
  return (
    <div className="App">
    <Card city={weather.city} 
    country={weather.country}
    temperature={weather.temperature}
    description={weather.description}
    wind={weather.wind}
    clouds={weather.clouds}
    pressure={weather.pressure} 
    icon={weather.icon}/>
  
    </div>
  )
}

export default App;
