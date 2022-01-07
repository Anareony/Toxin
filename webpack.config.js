const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: 'development',
    entry: {
        entry: './src/entry.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/index/index.pug'
        }),
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
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ],
    module:{
        rules:[
            {
                test: /\.(png|svg|jpg|jpeg|ico|woff|woff2|eot|ttf|otf|webmanifest)$/i,
                type: 'asset/resource',
            },
            {
                test:/\.sass|scss|css$/i,
                use: [
                    ( mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env'
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.pug$/i,
                use: ['pug-loader'],
            }
        ]
    }
}