import React from "react";
import "./Weather.css"
export default function Weather() {
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
            <h1>New York</h1>
            <ul>
                <li>
                Wednesday 03:00

                </li>
                <li>
                Clear with periodic clouds

                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                  <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="clear" />
                  <span className="temperature">27</span> 
                   <span className="unit"> °C</span>
                </div>
                <div className="col-6">
                  <ul>
                      <li>
                      Precipitation: 15%
                      </li>
                      <li>
                      Humidity: 64%
                      </li>
                      <li>
                     
                      Wind: 0 km/h
                      </li>
                  </ul>
                </div>
            </div>
        </div>
        );
    
}