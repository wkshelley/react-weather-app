import React from "react";
import WeatherImage from "./WeatherImage";

export default function WeatherDailyForecast(props) {
  return (
    <div>
      <div className="WeatherForecat-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherImage code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-min">
          {Math.round(props.data.temp.min)}˚
        </span>

        <span className="WeatherForecast-temp-max">
          {" "}
          {Math.round(props.data.temp.max)}˚
        </span>
      </div>
    </div>
  );
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
}
