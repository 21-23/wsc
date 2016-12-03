/* eslint-disable no-console*/
//Use console instead of CLI here to avoid circular dependencies
import nconf from 'nconf';

const config = nconf.argv().env();

let mongouri = '';

if(config.get('NODE_ENV') === 'production') {
    mongouri = `mongodb://${config.get('mongouser')}:${config.get('mongopass')}@${config.get('mongourl')}`;
} else {
    mongouri = 'mongodb://127.0.0.1:27017/wsc';
}

config.defaults({
    PORT: 3000,
    duration: 2 * 60 * 60 * 1000, //game duration
    mongouri,
});

export default config;
