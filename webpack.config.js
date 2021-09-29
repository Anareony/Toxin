const path = require('path')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            title:'help meclear'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({patterns:[
            {
                from: path.resolve(__dirname,'./src/favicon'),
                to: path.resolve(__dirname,'./dist')
            }]
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.s[ac]css$/,
                use:['css-loader', 'sass-loader']
            },
            {
                test:/\.pug$/,
                use:['pug-loader']
            },
            {
                test:/\.(png|jpg|svg)$/,
                use:['file-loader']
            },
            {
                test:/\.(ttf|woff|svg)$/,
                use:['file-loader']
            }
        ]
    }
}