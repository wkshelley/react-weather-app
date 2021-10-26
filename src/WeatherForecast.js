import React from "react";
import "./WeatherForecast.css";
import WeatherImage from "./WeatherImage";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecat-day">Tues {""}</div>
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
