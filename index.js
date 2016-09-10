const http = require('http');
const app = require('server/server');

const port = Number.isNaN(process.env.port) ? process.env.port : 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port)
