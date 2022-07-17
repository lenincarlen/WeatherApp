import React, { useEffect, useState } from 'react';


const Card = ({city, country,temperature, description, wind, clouds, pressure, icon}) => {
    const [grades, setGrades] = useState([0, "C°"])

    useEffect(()=>{
        setGrades([Math.round(temperature * 100) / 100, "C°"])
    },[temperature])

    const changeTem = (()=>{
       let nuevoValor = 0;
       if(
        grades[1] === "C°"
       ){
        nuevoValor = grades[0] + 32
       setGrades([nuevoValor, "F°"])
    }else{
        nuevoValor = grades[0] - 32;
        setGrades([nuevoValor, "C°"])
        
    }
    })
    return (
        <div className='card'>
           
           
            <ul className='card__ul'>
                <li className='temp'>{grades[0]+grades[1]}</li>
                <h3> {city} {country}</h3>
                 <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <li>{description}</li>
                <li>Wind: {wind}</li>
                <li>Clouds: {clouds}</li>
                <li>Pressure: {pressure}</li>
            </ul>

            <button className='btn-w' onClick={changeTem}>Change grade °C / °F</button>
            <div className='card__footer'>
              <p>Powered by <a href='https://github.com/lenincarlen/'>Lenincarlen</a></p>
                <p>Data provided by <a href='https://www.metaweather.com/'>MetaWeather</a></p>
            </div>
        </div>

    ) 
      
}


    


export default Card;