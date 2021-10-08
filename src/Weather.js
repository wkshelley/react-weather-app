import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Friday 15th",
    description: " Sunny",
    imgLink: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    feelsLike: "89",
    wind: "10",
  };
  return (
    <div className="container">
      <div className="Weather">
        <form className="rounded">
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                autocomplete="off"
                autofocus="on"
                placeholder="Enter City"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="🔎" />
              <button className="rounded">📍</button>
            </div>
          </div>
        </form>
        <h1> {weatherData.city}</h1>
        <div>
          <div className="current">{weatherData.date}</div>
          <div className="current">{weatherData.description} ☀️ </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.imgLink}
                  alt={weatherData.description}
                  className="float-left"
                />
              </div>
              <span className="d-flex temp">
                <h2 className="units float-left"> 81°</h2>
                <a href="/" className="justify-content-around active">
                  C{" "}
                </a>
                ︱
                <a href="/" className="justify-content-around active">
                  F
                </a>
              </span>
            </div>

            <div className="col-6">
              <div className="weather-description">
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Feels Like: {weatherData.feelsLike}˚</li>
                <li>Wind: {weatherData.wind} mph</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
