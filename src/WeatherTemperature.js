import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("farenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function showFarenheit(event) {
    event.preventDefault();
    setUnits("farenheit");
  }

  if (units === "farenheit") {
    return (
      <div className={WeatherTemperature}>
        <div className="row">
          <div className="col-6">
            <span className="d-flex">
              <h2 className="temperature units float-left">
                {props.farenheit}˚
              </h2>
              <a
                href="/"
                className=" temperature justify-content-around active"
                onClick={showCelsius}
              >
                C{" "}
              </a>
              <div className="temperature">︱</div>
              <a
                href="/"
                className=" temperature justify-content-around active"
                onClick={showFarenheit}
              >
                F
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return "C˚";
  }
}
