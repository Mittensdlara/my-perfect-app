import React, { useState } from "react";
import "./Weather.css"
import axios from "axios"
export default function Weather(props) {
    const [ready, setReady] = useState(false)
    const [temperature, setTemperature] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [wind, setWind] = useState(null);
    const [description, setDescription] = useState(null);
    const [img, setImg] = useState(null);
    const [date, setDate] = useState(null);
    const [city, setCity] = useState(null);
 function handleResponse(response) {
     console.log(response.data);
     setTemperature(Math.round(response.data.main.temp));
     setHumidity(response.data.main.humidity);
     setWind(Math.round(response.data.wind.speed));
     setDescription(response.data.weather[0].description);
     setImg("https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png")
     setDate("Wednesday 03:00")
     setCity(response.data.name);
     setReady(true);
 }

if (ready) {
    return(
        <div className="Weather">
            <form>
             <div className="row mt-3">
                <div className="col-4">
                <input type="search"  placeholder="Enter a city.." autoFocus="on" />
                </div>
                <div className="col-8">
                <input type="submit" value="Search" className="btn btn-primary" /> </div>
            </div>
            </form>
            <h1>{city}</h1>
            <ul>
                <li>
                {date}

                </li>
                <li className="text-capitalize">
                {description}

                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                  <img src={img} alt="clear" />
                  <span className="temperature">{temperature}</span> 
                   <span className="unit"> °C</span>
                </div>
                <div className="col-6">
                  <ul>
                  
                      <li>
                      Humidity: {humidity}%
                      </li>
                      <li>
                     
                      Wind: {wind} km/h
                      </li>
                  </ul>
                </div>
            </div>
        </div>
        );
    } else {
        const apiKey = "27fb8b42ddeb36f74700ba6a216b9ced"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    } 
    
}