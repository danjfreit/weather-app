import React from 'react';
import './App.css';
import { Day } from '../Day';

function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const icons = [
    "clear-day",
    "clear-day",
    "partly-cloudy-day",
    "cloudy",
    "rain"
  ]
  const temps = [
    { high: 80, low: 72 },
    { high: 79, low: 65 },
    { high: 82, low: 74 },
    { high: 76, low: 72 },
    { high: 84, low: 60 },
  ]

  return (
    <div className="App">
      {days.map((day, i) => <Day
        dayOfWeek={day}
        key={i}
        icon={icons[i]}
        highAndLow={temps[i]}
      />)}
    </div>
  );
}

export default App;
