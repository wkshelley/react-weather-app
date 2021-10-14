import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      date: "Monday",
      humidity: response.data.main.humidity,
      percipitation: response.data.rain,
      //image: `http://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }
  if (ready)
    return (
      <div className="weatherApp">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter City..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <div className="float-right">
                <input type="submit" value="search" />
                <button className=" rounded">📍</button>
              </div>
            </div>
          </div>
        </form>

        <h1>{props.defaultCity}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img href={weatherData.image} alt={weatherData.description} />{" "}
            <span className="d-flex">
              <h2 className="units float-left">{weatherData.temperature}˚</h2>
              <a href="/" className="justify-content-around active">
                C{" "}
              </a>
              ︱
              <a href="/" className="justify-content-around active">
                F
              </a>
            </span>
          </div>
        </div>
        <div className="col-10">
          <div className="d-flex align-items-end flex-column">
            <li>Percipitation: {weatherData.percipitation}%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind Speed: {weatherData.wind} mph</li>
          </div>
        </div>
      </div>
    );
  else {
    const apiKey = "969aa20a54046a1f43968e313b89d478";
    //  let city = "Columbus";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
