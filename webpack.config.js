'use strict';
const path = require( 'path' );

module.exports = {
    // Entradas
    entry: [
        '@babel/polyfill',
        './src/index.js'
    ],
    // Saídas
    output: {
        path: path.resolve(__dirname + '/public/dist'),
        filename: 'main.js',
    },
    // Módulos
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }],
    },
};