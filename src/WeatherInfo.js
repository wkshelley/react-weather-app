import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img src={props.data.image} alt={props.data.description} />{" "}
            <h2 className="temperature units float-left">
              {props.data.temperature}˚
            </h2>
            <a href="/" className=" temperature justify-content-around active">
              C{" "}
            </a>
            <div className="temperature">︱</div>
            <a href="/" className=" temperature justify-content-around active">
              F
            </a>
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
