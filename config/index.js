/* eslint-disable no-console*/
//Use console instead of CLI here to avoid circular dependencies
import nconf from 'nconf';

const config = nconf.argv().env();
config.defaults({
    PORT: 3000
});

export default config;
