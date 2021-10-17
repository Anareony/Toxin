const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'ui-kit': './src/pages/ui-kit/ui-kit.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.{sa|sc|c}ss$/,
                use:['style-loader', 'css-loader','sass-loader']
            },
            {
                test:/\.pug$/,
                use:['pug-loader']
            },
            {
                test:/\.(png|jpg|svg|ttf|woff|svg)$/,
                use:['file-loader']
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "ui-kit.html",
            template: './src/pages/ui-kit/ui-kit.pug'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({patterns:[
            {
                from: path.resolve(__dirname,'./src/pages/ui-kit/img/'),
                to: path.resolve(__dirname,'./dist')
            }]
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ]
}