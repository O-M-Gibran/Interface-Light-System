import React, { useEffect, useState } from 'react';
import client from '../mqttClient';
import '../styles.css';


const SensorData = () => {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    client.subscribe('esp32/sensor', { qos: 1 });
    client.on('message', (topic, payload) => {
      if (topic === 'esp32/sensor') {
        setSensorData(JSON.parse(payload.toString()));
      }
    });

    return () => {
      client.unsubscribe('esp32/sensor');
    };
  }, []);

  return (
    <div className="card">
      <h2>Sensor Data</h2>
      <pre>{JSON.stringify(sensorData, null, 2)}</pre>
    </div>
  );
};

export default SensorData;
