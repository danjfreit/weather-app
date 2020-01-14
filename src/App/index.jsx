import React from 'react';
import './App.css';
import { Day } from '../Day';

function App() {
  return (
    <div className="App">
      <Day dayOfWeek="Mon" />
      <Day dayOfWeek="Tue" />
      <Day dayOfWeek="Wed" />
      <Day dayOfWeek="Thu" />
      <Day dayOfWeek="Fri" />
    </div>
  );
}

export default App;
