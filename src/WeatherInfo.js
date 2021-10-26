import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherImage from "./WeatherImage";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="d-flex">
            <WeatherImage
              code={props.data.image}
              alt={props.data.description}
            />{" "}
            <WeatherTemperature farenheit={props.data.temperature} />
          </span>
        </div>

        <div className="col-6">
          <div className="d-flex align-items-end flex-column">
            <li>Feels Like: {props.data.feelsLike}˚</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>
              Wind: {props.data.wind} mph{""}
              {""}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
