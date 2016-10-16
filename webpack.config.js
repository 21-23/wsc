var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//plugins
var plugins = [];
var htmlPlugin = new HtmlWebpackPlugin({
    title: 'WSC',
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
