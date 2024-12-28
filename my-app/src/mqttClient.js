import mqtt from 'mqtt';

const MQTT_BROKER_URL = "ws://192.168.33.225"; // Replace with your broker's URL
const MQTT_OPTIONS = {
  port: 9001,
};

const client = mqtt.connect(MQTT_BROKER_URL, MQTT_OPTIONS);

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
});

client.on('error', (err) => {
  console.error('MQTT Connection Error:', err);
});

export default client;
