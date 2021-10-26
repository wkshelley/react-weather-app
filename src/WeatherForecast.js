import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecat-day">Tues</div>
          <div className="WeatherForecast-icon">☀️</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-min">48˚</span>
            {""}|{""}
            <span className="WeatherForecast-temp-max"> 61˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
