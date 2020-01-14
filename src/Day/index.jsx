import React from 'react';
import './Day.css';


export function Day(props) {
  return (
    <div className="Day">
      <div className="day__label">{props.dayOfWeek}</div>
      <div className="day__icon">
        <img src={props.icon} alt="Weather Icon" />
      </div>
      <div className="day__temp">
        <div className="day__high">70°</div>
        <div className="day__low">60°</div>
      </div>
    </div>
  )
}
