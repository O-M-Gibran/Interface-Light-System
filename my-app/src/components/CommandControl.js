import React, { useState } from 'react';
import client from '../mqttClient';
import '../styles.css';


const CommandControl = () => {
  const [command, setCommand] = useState('');

  const sendCommand = () => {
    if (command) {
      client.publish('esp32/commands', command, { qos: 1 });
      setCommand('');
    }
  };

  return (
    <div className="card">
      <h2>Send Commands</h2>
      <div>
        <input
          className="input"
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter a command"
        />
        <button className="button" onClick={sendCommand}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CommandControl;
