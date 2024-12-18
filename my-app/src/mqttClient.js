import mqtt from 'mqtt';

const MQTT_BROKER_URL = 'wss://broker.hivemq.com:8000/mqtt'; // Replace with your broker's URL
const MQTT_OPTIONS = {
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
  username: '', // Add credentials if required
  password: '',
};

const client = mqtt.connect(MQTT_BROKER_URL, MQTT_OPTIONS);

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
});

client.on('error', (err) => {
  console.error('MQTT Connection Error:', err);
});

export default client;
