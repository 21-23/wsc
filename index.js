const http = require('http');
const app = require('./server/server');
const createGameServer = require('./server/gameServer');
const config = require('./config');

const port = Number.isNaN(config.get('PORT')) ? config.get('PORT') : 3000;

app.set('port', port);

const server = http.createServer(app);
createGameServer(server);

server.listen(port);
server.on('error', function __onServerError(err){
    //eslint-disable
    console.log('*********************************');
    console.log('**************PANIC**************');
    console.log(err);
    console.log('*********************************');
    //eslint-enable
});

server.on('listening', function __onListening(){
    //eslint-disable
    console.log(`Server ready on: ${port}`);
    //eslint-enable
});
