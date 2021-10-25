import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("farenheit");

  function showCelsius() {
    return ((props.farenheit - 32) * 5) / 9;

    // event.preventDefault();
    //setUnits("celsius");
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
                className=" temperature justify-content-around "
                onClick={showFarenheit}
              >
                F{" "}
              </a>
              <div className="temperature">︱</div>
              <a href="/" className=" temperature justify-content-around ">
                C
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    //still working on F to C conversion.   showCelsius is not being called on the return
    return (
      <div>
        {showCelsius}
        <a
          href="/"
          className=" temperature justify-content-around "
          // onClick={showCelsius}
        >
          C
        </a>
        <a
          href="/"
          className=" temperature justify-content-around "
          onClick={showFarenheit}
        >
          F{" "}
        </a>
      </div>
    );
  }
}
