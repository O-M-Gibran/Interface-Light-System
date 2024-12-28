import React, { useEffect, useState } from 'react';

const VideoFeed = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // The ESP32-CAM is serving the video feed at this URL
    const streamUrl = 'http://192.168.33.180/stream'; // Update with your ESP32-CAM IP address

    // Set the video source to the ESP32-CAM stream URL
    setVideoSrc(streamUrl);
  }, []);

  return (
    <div className="card">
      <h2>Video Feed</h2>
      <div className="img-container">
        {videoSrc ? ( 
          <img src={videoSrc} alt="ESP32 Camera Feed" width="640" height="480" />
        ) : (
          <p>No video feed available</p>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;
