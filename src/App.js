import React, { useState } from "react";
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
    <div className="row">
      <div className="col-9">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            onChange={searchCity}
            placeholder="Enter City..."
          />
          <input type="submit" value="search" />
        </form>
      </div>
    </div>
  );

  if (display) {
    return (
      <div className="container">
        <div className="Weather">
          {form}
          <ul>
            <h2> {city} </h2>
            <li> Temperature: {description.temperature} C˚ </li>
            <li> Humidity: {description.humidity} % </li>
            <li> Wind: {description.wind} mph </li>
            <li> Current: {description.description}</li>
            <li>
              {" "}
              <img src={description.icon} alt="weather conditions" />{" "}
            </li>
          </ul>{" "}
        </div>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}
