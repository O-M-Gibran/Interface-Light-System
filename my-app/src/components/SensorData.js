import React, { useEffect, useState } from 'react';
import client from '../mqttClient';
import '../styles.css';

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    light: null,
    pir: null,
  });

  useEffect(() => {
    // Subscribe to both light and PIR topics
    client.subscribe('sensor/light', { qos: 1 });
    client.subscribe('sensor/pir', { qos: 1 });

    // Handle incoming messages
    client.on('message', (topic, payload) => {
      console.log('Received message:', payload.toString());

      try {
        const parsedData = JSON.parse(payload.toString());
        
        if (topic === 'sensor/light') {
          setSensorData((prevData) => ({
            ...prevData,
            light: parsedData.light,
          }));
        } else if (topic === 'sensor/pir') {
          setSensorData((prevData) => ({
            ...prevData,
            pir: parsedData.pir,
          }));
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    });

    // Cleanup subscriptions on unmount
    return () => {
      client.unsubscribe('sensor/light');
      client.unsubscribe('sensor/pir');
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
