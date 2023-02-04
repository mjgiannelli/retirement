import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
     <Countdown date='03/19/2029'/>
    </div>
  );
}

export default App;
