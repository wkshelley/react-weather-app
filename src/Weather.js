import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weatherApp">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter City..."
            />
          </div>
          <div className="col-3">
            <div className="float-right">
              <input type="submit" value="search" />
              <button className=" rounded">📍</button>
            </div>
          </div>
        </div>
      </form>

      <h1>Columbus</h1>
      <ul>
        <li>Monday</li>
        <li>Partly Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            href="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly sunny"
          ></img>
        </div>
      </div>
      <div className="row">
        <div classname="col-6">
          <ul>
            <li>Percipitation: 5%</li>
            <li>Hunidity: 80%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
