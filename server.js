const WebSocket = require('ws');

const arguments = process.argv.slice(2);
let port = 8080;
if (arguments.length > 0 && !isNaN(parseInt(arguments[0]))) {
	port = parseInt(arguments[0]);
}

const wss = new WebSocket.Server({ port: 8080 });

wss.on('listening', () => {
	console.log(`Listening On: ${port}`);
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  setInterval(() => {
	  ws.send(`Hello: ${new Date().toLocaleString()}`);
  }, 1000);
});