const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin(),
    ]
});
