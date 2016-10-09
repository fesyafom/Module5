'use strict';

var	webpack	= require('webpack');
var	path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: null,            

    context: __dirname,
    entry: {
        bundle: './src/',
        styles: './src/sass/main.scss'
    },
    output: {
        path: './static',
        filename: 'js/[name].js',
    },

    plugins: [
        new	webpack.optimize.OccurenceOrderPlugin(),
        new	webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css', {   
            allChunks: true
        }),
        
        new webpack.optimize.UglifyJsPlugin({   
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
        
    ],

    resolve: {                                  
        moduleDirectories: ['node_modules'],
        extensions: ['','.js']
    },
    
    resolveLoader: {                           
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
    watch: true,                

    watchOptions: {
        aggregateTimeout: 100   
    }
};