import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="weather">
      <App />
      <footer>
        Coded by Shelley White-Lyons 👩‍💻
        <br /> Open Sourced on {""}
        <a href="https://github.com/wkshelley/react-weather-app" target="blank">
          Git Hub {""}
        </a>
        Hosted on {""}
        <a href="https://confident-shannon-abc70d.netlify.app/" target="blank">
          Netlify
        </a>
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
