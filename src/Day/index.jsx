import React from 'react';
import './Day.css';
import clear_day from '../Icons/clear-day.svg';
import clear_night from '../Icons/clear-night.svg';
import cloudy from '../Icons/cloudy.svg';
import fog from '../Icons/fog.svg';
import partly_cloudy_day from '../Icons/partly-cloudy-day.svg';
import partly_cloudy_night from '../Icons/partly-cloudy-night.svg';
import rain from '../Icons/rain.svg';
import sleet from '../Icons/sleet.svg';
import snow from '../Icons/snow.svg';
import wind from '../Icons/wind.svg';


export function Day(props) {
  let iconMap = new Map([
    ["clear-day", clear_day],
    ["clear-night", clear_night],
    ["cloudy", cloudy],
    ["fog", fog],
    ["partly-cloudy-day", partly_cloudy_day],
    ["partly-cloudy-night", partly_cloudy_night],
    ["rain", rain],
    ["sleet", sleet],
    ["snow", snow],
    ["wind", wind],
  ]);

  return (
    <div className="Day">
      <div className="day__label">{props.dayOfWeek}</div>
      <div className="day__icon">
        <img src={iconMap.get(props.icon)} alt="Weather Icon" />
        {console.log(props.icon)}
      </div>
      <div className="day__temp">
        <div className="day__high">{props.highAndLow.high}°</div>
        <div className="day__low">{props.highAndLow.low}°</div>
      </div>
    </div>
  )
}
