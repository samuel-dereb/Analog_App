import React, { useState, useEffect } from "react";
import "./clock_style.scss";

const Clock = ( props )  => {
    const [hours, setHour] = useState("");
    const [minutes, setMinute] = useState("");
    const [seconds, setSecond] = useState("");
    const { title, datediff } = props;
    let clockInterval = "";

    const formatTime = ( time ) => {
        return time < 10 ? `0${time}` : time;
    }

    const handleDate = () => {
        const date = new Date();
        date.setHours(date.getUTCHours() + datediff);
        let hour = formatTime(date.getHours());
        let minute = formatTime(date.getMinutes());
        let second = formatTime(date.getSeconds());
        setHour(hour);
        setMinute(minute);
        setSecond(second);
    }

    useEffect(() => {
        clockInterval = setInterval(handleDate, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    });


    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
      <div className={"clock"}>
        <h3>{ title }</h3>
        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    );
}

export default Clock;
