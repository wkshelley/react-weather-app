import React from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  function handleResponse(response) {
    alert(`The Weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "969aa20a54046a1f43968e313b89d478";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="App">
      Weather App
      <footer>
        This Project was created by Shelley White-Lyons and is open-sourced
        <a
          href="https://github.com/wkshelley/react-weather-app/tree/master/src"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          on Git Hub
        </a>
      </footer>
    </div>
  );
}
