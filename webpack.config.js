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
        colorsType: './src/pages/colors-type/colors-type.js',
        formElements: './src/pages/form-elements/form-elements.js',
        cards: './src/pages/cards/cards.js',
        headersFooters: './src/pages/headers-footers/headers-footers.js',
        index: './src/pages/index/index.js',
        landing: './src/pages/landing-page/landing-page.js',
        registration: './src/pages/registration/registration.js',
        roomDetails: './src/pages/room-details/room-details.js',
        searchRoom: './src/pages/search-room/search-room.js',
        signIn: './src/pages/sign-in/sign-in.js'
    },
    output: {
        filename: './docs/[name].[contenthash].js',
        assetModuleFilename: "./docs/assets/[hash][ext][query]",
        path: path.resolve(__dirname, 'docs'),
        clean: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9999,
        clientLogLevel: 'silent',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[id].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/index/index.pug',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: "colors-type.html",
            template: './src/pages/colors-type/colors-type.pug',
            chunks: ['colorsType']
        }),
        new HTMLWebpackPlugin({
            filename: "form-elements.html",
            template: './src/pages/form-elements/form-elements.pug',
            chunks: ['formElements']
        }),
        new HTMLWebpackPlugin({
            filename: "cards.html",
            template: './src/pages/cards/cards.pug',
            chunks: ['cards']
        }),
        new HTMLWebpackPlugin({
            filename: "headers-footers.html",
            template: './src/pages/headers-footers/headers-footers.pug',
            chunks: ['headersFooters']
        }),
        new HTMLWebpackPlugin({
            filename: "landing-page.html",
            template: './src/pages/landing-page/landing-page.pug',
            chunks: ['landing']
        }),
        new HTMLWebpackPlugin({
            filename: "search-room.html",
            template: './src/pages/search-room/search-room.pug',
            chunks: ['searchRoom']
        }),
        new HTMLWebpackPlugin({
            filename: "room-details.html",
            template: './src/pages/room-details/room-details.pug',
            chunks: ['roomDetails']
        }),
        new HTMLWebpackPlugin({
            filename: "registration.html",
            template: './src/pages/registration/registration.pug',
            chunks: ['registration']
        }),
        new HTMLWebpackPlugin({
            filename: "sign-in.html",
            template: './src/pages/sign-in/sign-in.pug',
            chunks: ['signIn']
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