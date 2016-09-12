const nconf = require('nconf');

module.exports = nconf.argv()
                      .env()
                      .file({ file: './config.json' });
