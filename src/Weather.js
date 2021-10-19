import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),

      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      //  image: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  //need to have this function to be called once city is submitted
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //need to have the city search be called once the form is submitted
  function search() {}

  if (weatherData.ready)
    return (
      <div className="weatherApp">
        <form onSubmit={handleSubmit}>
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
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <span className="d-flex">
              <img src={weatherData.image} alt={weatherData.description} />{" "}
              <h2 className="temperature units float-left">
                {weatherData.temperature}˚
              </h2>
              <a
                href="/"
                className=" temperature justify-content-around active"
              >
                C{" "}
              </a>
              <div className="temperature">︱</div>
              <a
                href="/"
                className=" temperature justify-content-around active"
              >
                F
              </a>
            </span>
          </div>

          <div className="col-6">
            <div className="d-flex align-items-end flex-column">
              <li>Feels Like: {weatherData.feelsLike}˚</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>
                Wind: {weatherData.wind} mph{""}
                {""}
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    const apiKey = "969aa20a54046a1f43968e313b89d478";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return "Loading...";
  }
}
