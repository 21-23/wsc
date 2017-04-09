const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './client/src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: './scripts/bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'client/src/'),
            'node_modules',
        ],
        alias: {
            'shared': path.join(__dirname, 'shared/')
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', ['es2015', { modules: false }]],
                        }
                    }
                ],

            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 150000,
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebSocket Challenge',
            template: './client/src/index.template.pug'
        }),
    ]
};
