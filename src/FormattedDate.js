import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  //let time = new Date();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day} {""}
      {hours}:{minutes}
    </div>
  );
  // return `${day} ${time.toLocaleString("en-US", {
  //  hour: "numeric",
  // hour12: true,
  // })}`;
}
