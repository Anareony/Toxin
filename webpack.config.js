const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        uikit: './src/entry.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "colors-type.html",
            template: './src/pages/colors-type/colors-type.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "form-elements.html",
            template: './src/pages/form-elements/form-elements.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "cards.html",
            template: './src/pages/cards/cards.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "headers-footers.html",
            template: './src/pages/headers-footers/headers-footers.pug'
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