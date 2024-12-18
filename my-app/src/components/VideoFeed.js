import React, { useEffect, useState } from 'react';
import client from '../mqttClient';
import '../styles.css';


const VideoFeed = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    client.subscribe('esp32/camera', { qos: 1 });
    client.on('message', (topic, payload) => {
      if (topic === 'esp32/camera') {
        setVideoSrc(`data:image/jpeg;base64,${payload.toString()}`);
      }
    });

    return () => {
      client.unsubscribe('esp32/camera');
    };
  }, []);

  return (
    <div className="card">
      <h2>Video Feed</h2>
      <div className="img-container">
        {videoSrc ? (
          <img src={videoSrc} alt="ESP Camera Feed" />
        ) : (
          <p>No video feed available</p>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;
