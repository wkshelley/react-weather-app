/*import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState(false);
  // const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");

  function currentWeather(response) {
    setDisplay(true);
    setDescription({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "969aa20a54046a1f43968e313b89d478"; //
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(currentWeather);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="search"
            onChange={searchCity}
            placeholder="Enter City..."
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
  );

  if (display) {
    return (
      <div className="container">
        <div className="row">
          {form}
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                className="float-left"
                src={description.icon}
                alt="weather conditions"
              />{" "}
            </div>
          </div>
          <ul>
            <div className="col-9">
              <div className="weather-description">
                <li> {city} </li>
                <li> Temperature: {description.temperature} C˚ </li>
                <li> Humidity: {description.humidity} % </li>
                <li> Wind: {description.wind} mph </li>
                <li> Current: {description.description}</li>
              </div>
            </div>{" "}
          </ul>{" "}
        </div>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}*/
