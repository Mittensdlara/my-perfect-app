import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperrature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
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
    const [city, setCity] = useState(props.defaultCity);
    const [coordinates, setCordinates] = useState(null);
 

 function handleResponse(response) {
     console.log(response.data);
     setTemperature(Math.round(response.data.main.temp));
     setHumidity(response.data.main.humidity);
     setWind(Math.round(response.data.wind.speed));
     setDescription(response.data.weather[0].description);
     setImg(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
     setDate(new Date(response.data.dt *1000))
     setCity(response.data.name);
     setReady(true);
     setCordinates(response.data.coord);
 }
 function handleSubmit(event) {
     event.preventDefault();
     search();
 }
 function handleCityChange(event) {
     setCity(event.target.value)
 }

 function search() {
    const apiKey = "27fb8b42ddeb36f74700ba6a216b9ced"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

if (ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
             <div className="row mt-3">
                <div className="col-4">
                <input type="search"  placeholder="Enter a city.." autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-8">
                <input type="submit" value="Search" className="btn btn-primary" /> </div>
            </div>
            </form>
            <h1>{city}</h1>
            <ul>
                <li>
                <FormattedDate date={date} />

                </li>
                <li className="text-capitalize">
                {description}

                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                  <img src={img} alt="clear" />
                   <WeatherTemperrature celsius={temperature} />
            
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

                <WeatherForecast coordinates={coordinates} />

            </div>
        </div>
        );
    } else {
    search();
    return "Loading..."
    } 
    
}