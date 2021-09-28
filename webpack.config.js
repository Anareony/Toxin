const path = require('path')
const HTMLWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {index: './src/index.js'},
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}