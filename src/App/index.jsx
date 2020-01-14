import React from 'react';
import './App.css';
import { Day } from '../Day';
import logo from '../Icons/logo.svg';

function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
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
        icon={logo}
        highAndLow={temps[i]}
      />)}
    </div>
  );
}

export default App;
