const WebSocketServer = require('uws').Server;

function createGameServer(conf) {
    const port = conf && conf.port || 8888;
    const wss = new WebSocketServer({ port });

    wss.on('connection', function (socket) {
        console.dir(socket);

        socket.on('message', function (message) {
            console.log(message);
            socket.send(message);
        });

        socket.on('close', function (){

        });
    });

    return wss;
}

module.exports = createGameServer;
