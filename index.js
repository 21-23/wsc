import http from 'http';
import app from './server/server';
import { initializaeServers } from './server/web_socket/';
import config from './config';
import cli from './server/cli';

const port = Number.isNaN(config.get('PORT')) ? config.get('PORT') : 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', function __onServerError(err){
    cli.log('*********************************');
    cli.log('**************PANIC**************');
    cli.log(err);
    cli.log('*********************************');
});

server.on('listening', function __onListening(){
    cli.log(`Server ready on: ${port}`);

    initializaeServers({server});
});
