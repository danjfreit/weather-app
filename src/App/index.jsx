import React from 'react';
import './App.css';
import { Day } from '../Day';
import logo from '../Icons/logo.svg';

function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

  return (
    <div className="App">
      {days.map(day => <Day
        dayOfWeek={day}
        icon={logo} />)}
    </div>
  );
}

export default App;
