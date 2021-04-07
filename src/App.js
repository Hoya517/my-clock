import React from 'react';
import './App.css';
import MyClock from './MyClock';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyClock text="시계1번" color="RED" location="파리"/>
        <MyClock text="시계2번" color="TOMATO"/>
        <MyClock text="시계3번" color="BLUE"/>
        <MyClock text="시계4번" color="GREEN"/>
      </div>
    )
  }
}


export default App;
