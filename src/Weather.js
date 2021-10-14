import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
              autoFocus="on"
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
            href="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Sun-and-Moon-PNG/Sun_PNG_Clipart.png?m=1596789530"
            alt="mostly sunny"
          />{" "}
          <span className="d-flex">
            <h2 className="units float-left">80˚</h2>
            <a href="/" className="justify-content-around active">
              C{" "}
            </a>
            ︱
            <a href="/" className="justify-content-around active">
              F
            </a>
          </span>
        </div>
      </div>

      <div className="col-10">
        <div className="d-flex align-items-end flex-column">
          <li>Percipitation: 5%</li>
          <li>Hunidity: 80%</li>
          <li>Wind: 5 mph</li>
        </div>
      </div>
    </div>
  );
}
