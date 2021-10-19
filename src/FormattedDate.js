import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let time = new Date();
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <div>
      {day} {""}
      {time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </div>
  );
}
