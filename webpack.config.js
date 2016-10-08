'use strict';

var	webpack	= require('webpack');
var	path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: null,            //Определяет тип файла map. Дефолт - source-map

    context: __dirname,
    entry: {
        bundle: './src/',
        styles: './src/sass/main.scss'
    },
    output: {
        path: './static',
        filename: 'js/[name].js',
        //sourceMapFileName: 'js/[name].map'     //Создает файл-карту модулей для source-map
    },

    plugins: [
        new	webpack.optimize.OccurenceOrderPlugin(),
        new	webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css', {   //Сохраняем преобразованные файлы в styles.css
            allChunks: true
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({   //Сжатие кода
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
        */
    ],

    resolve: {                                  //Фильтр для поиска модулей(не обязательно)
        moduleDirectories: ['node_modules'],
        extensions: ['','.js']
    },
    
    resolveLoader: {                            //Фильтр для поиска лоадеров(не обязательно)
        moduleDirectories: ['node_modules'],
        extensions: ['','.js']
    },

    module:	{
        loaders: [
            {
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname,	"src")
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    },
    watch: true,                //Будет следить за изменениями

    watchOptions: {
        aggregateTimeout: 100   //Задает таймаут применения изменений. Дефолт - 300мс
    }
};