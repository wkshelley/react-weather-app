import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
//import WeatherImage from "./WeatherImage";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      image: response.data.weather[0].icon,
      // image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  //need to have this function to be called once city is submitted
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //need to have the city search be called once the form is submitted
  function search() {
    const apiKey = "969aa20a54046a1f43968e313b89d478";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    // console.log(apiUrl);
  }

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
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  else {
    search();
    return "Loading...";
  }
}
