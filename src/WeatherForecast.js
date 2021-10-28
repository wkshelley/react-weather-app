import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherImage from "./WeatherImage";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "969aa20a54046a1f43968e313b89d478";
  let longitude = 39.9612;
  let latitude = 82.9988;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecat-day">Tues</div>
          <div className="WeatherForecast-icon"></div>
          <WeatherImage code="01d" size={30} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-min">48˚</span>

            <span className="WeatherForecast-temp-max"> 61˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
