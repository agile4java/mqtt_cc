// MQTT client for testing
// mosca server in mqtt_cc project
// this client subscribes and listens


var app = require('../app');
var debug = require('debug')('mqtt-cc:server');
var http = require('http');
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
require('dotenv').config();
client.on('connect', function() {
  client.subscribe('/mosquitto/test');
  console.log('subscribed to /mosquitto/test');
  // redirect('index', {
  //   title: 'MQTT broker at mqtt.chadconway.info',
  //   connection: 'Connected to MQTT broker.  Subscribed to /mosquitto/test',
  //   message: ''
  // });
});

client.on('message', function(topic, message) {
  context = message.toString();
  console.log(context);
  // redirect('index', {
  //   title: 'MQTT broker at mqtt.chadconway.info',
  //   connection: 'Connected to MQTT broker.  Subscribed to /mosquitto/test',
  //   message: context
  // });
});

// const MongoClient = require('mongodb').MongoClient;
//const mongoHook = require('./helpers/mongoHook.js');
//const assert = require('assert');

//*********************************mosca mqtt broker setup below*******
//*********************************mosca mqtt broker setup below*******
//*********************************mosca mqtt broker setup below*******
// Connect to mongodb Atlas
//const mongoClient = await mongoHook.mongoHookup().then(
// const dbDatabase = process.env.DB_DATABASE;
// const dbUser = process.env.DB_USERNAME;
// const dbPasswd = process.env.DB_PASSWORD;
// const fullUrl = `mongodb+srv://${dbUser}:${dbPasswd}@nextdaycode001-kbsxd.mongodb.net/${dbDatabase}`;
// // const client = new MongoClient(fullUrl, function(err, client) {
// //   const collection = client.db('iotdash').collection('mqtt');
// //   console.log('mongodb client connect to iotdash in Atlas cloud');
// // });

// // Step (A) Get Mosca
// const mosca = require('mosca');

// // Step (B) Configure pubsubsettings
// var pubsubsettings = {
//   type: 'mongodb',
//   url: fullUrl,
//   pubsubCollection: 'mqtt',
//   mongo: {}
// };

// // Step (C) pass pubsubsettings to server and start server
// var moscaSettings = {
//   port: 1883,
//   backend: pubsubsettings
// };
// console.log('moscaSettings full URL: ' + fullUrl);
// var moscaServer = new mosca.Server(moscaSettings);
// moscaServer.on('ready', setup);

// // Executed when mosca server is up and running
// function setup() {
//   console.log('Mosca server up and running');
// }

// // Specify a message to send as a test
// var moscaMessage = {
//   topic: '/frontdoor/outside/temp',
//   payload: 'Outside temp is fucking cold',
//   qos: 0,
//   retain: false
// };

// // send the test message
// moscaServer.publish(moscaMessage, function() {
//   console.log('message published');
// });

// // Receiving data from clients
// // fires when a message is published
// moscaServer.on('published', function(packet, client) {
//   if (packet == null) {
//     console.log('Message published but packet null!!');
//   } else {
//     console.log('Published', packet);
//   }
//   if (client == null) {
//     console.log('Client unknown');
//   } else {
//     if (client.id == null) {
//       console.log('Client id not specified');
//     } else {
//       console.log('Client', client.id);
//     }
//     if (client.name == null) {
//       console.log('Client name unknown');
//     } else {
//       console.log('Client name', client.name);
//     }
//   }
// });

// mosca using Mosquitto
// var pubsubsettings = {
//   type: 'mqtt',
//   json: false,
//   mqtt: require('mqtt'),
//   host: '127.0.0.1',
//   port: 1883
// };

// mosca using Mongo with ascoltatore
// const ascoltatore = {
//   type: 'mongo',
//   url: 'mongodb://localhost:27017',
//   pubsubCollection: 'ascoltatori',
//   mongo: {}
// };

//*************End mosca broker --- Start http server setup
//*************End mosca broker --- Start http server setup
//*************End mosca broker --- Start http server setup

var port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var httpServer = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Http server listening on ' + bind);
}

//*************End http server setup -- start websockets setup-***********
//*************End http server setup -- start websockets setup-***********
//*************End http server setup -- start websockets setup-***********

// Create websockets server
// var message = '';
// var WebSocketServer = require('ws').Server;
// var wsServer = new WebSocketServer({ port: 8010 });
// console.log('websocket server started on port 8010');
// wsServer.on('connection', function(ws) {
//   ws.on('message', function(message) {
//     console.log('Received from client: %s', message);
//     ws.send('Server received from client: ' + message);
//   });
// });
