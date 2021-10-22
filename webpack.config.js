const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        uikit: './src/pages/ui-kit/ui-kit.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
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
            }
        ]
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ],
    module:{
        rules:[
            {
                test:/\.sass|scss|css$/,
                use:['style-loader', 'css-loader','sass-loader']
            },
            {
                test:/\.pug$/,
                use:['pug-loader']
            },
            {
                test:/\.(|woff|woff2|eot|ttf|otf|svg)$/,
                type: 'asset',
                generator: {
                  filename: '[name][ext]'
                }
            
            },
            {
                test:/\.(png|jpg|svg|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: '[name][ext]'
                }
            },
        ]
    },
}