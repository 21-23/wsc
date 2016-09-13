var HtmlWebpackPlugin = require('html-webpack-plugin');
var isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: __dirname + '/client/dist',
        filename: "scripts/scripts.bundle.js"
    },
    devtool: isDevelopment ? 'source-map' : null,
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
    watch: isDevelopment,
    //generate html template for application
    plugins: [new HtmlWebpackPlugin({
        title: 'WSC',
        template: './client/src/index.template.pug'
    })]
};
