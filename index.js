const http = require('http');
const app = require('./server/server');
const createGameServer = require('./server/gameServer');
const config = require('./config');
const cli = require('./server/cli');

const port = Number.isNaN(config.get('PORT')) ? config.get('PORT') : 3000;

app.set('port', port);

const server = http.createServer(app);
createGameServer(server);

server.listen(port);
server.on('error', function __onServerError(err){
    cli.log('*********************************');
    cli.log('**************PANIC**************');
    cli.log(err);
    cli.log('*********************************');
});

server.on('listening', function __onListening(){
    cli.log(`Server ready on: ${port}`);
});
