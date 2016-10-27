var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//plugins
var plugins = [];
var htmlPlugin = new HtmlWebpackPlugin({
    title: 'WebSocket Challenge',
    template: './client/src/index.template.pug'
});
var defineProcessPlugin = new Webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || '')
    }
});
var uglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
});

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

plugins.push(htmlPlugin);
plugins.push(defineProcessPlugin);
if (isProduction()) {
    plugins.push(uglifyPlugin);
}

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: __dirname + '/client/dist',
        filename: "scripts/scripts.bundle.js"
    },
    devtool: isProduction() ? null : 'source-map',
    resolve: {
        alias: {
            'constants': path.join(__dirname, 'client/src/constants/'),
            'helpers': path.join(__dirname, 'client/src/helpers/'),
            'components': path.join(__dirname, 'client/src/components/'),
        },
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug'
            },
            {
                test: /\.png$/,
                loaders: ['url-loader?limit=150000']
            },
        ]
    },
    watch: !isProduction(),
    plugins: plugins
};
