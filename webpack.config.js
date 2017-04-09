const productionConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

module.exports = function(env) {
    if (env === 'production' || process.env.NODE_ENV === 'production') {
        return productionConfig;
    }
    return devConfig;
};
