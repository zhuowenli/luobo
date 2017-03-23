/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 23:25:06
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../lib/app.js'),
    output: {
        path: path.resolve(__dirname, '../src'),
        filename: 'app.js',
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-1'],
                    plugins: ['transform-runtime'],
                },
            },
        ],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
                semicolons: true,
            },
            sourceMap: true,
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //     hot: true
    // },
};
