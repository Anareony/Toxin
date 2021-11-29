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
        new HTMLWebpackPlugin({
            filename: "landing-page.html",
            template: './src/pages/landing-page/landing-page.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "search-room.html",
            template: './src/pages/search-room/search-room.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "room-details.html",
            template: './src/pages/room-details/room-details.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "registration.html",
            template: './src/pages/registration/registration.pug'
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in.html",
            template: './src/pages/sign-in/sign-in.pug'
        }),
        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ],
    module:{
        rules:[
            {
                test:/\.sass|scss|css$/i,
                use:['style-loader', 'css-loader','sass-loader']
            },
            {
                test:/\.pug$/i,
                use:['pug-loader']
            },
            {
                test:/\.(|woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                  filename: '[name][ext]'
                }
            
            },
            {
                test:/\.(png|jpg|svg|gif|ico)$/i,
                type: 'asset/resource',
                generator: {
                  filename: '[name][ext]'
                }
            },
        ]
    },
}