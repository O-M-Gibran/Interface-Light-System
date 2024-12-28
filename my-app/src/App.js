import React from 'react';
import VideoFeed from './components/VideoFeed';
import SensorData from './components/SensorData';
//import CommandControl from './components/CommandControl';
import './styles.css';
//<CommandControl />
const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: '#333' }}>ESP32 MQTT Dashboard</h1>
      <VideoFeed />
      <SensorData />
    </div>
  );
};

export default App;
