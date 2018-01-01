const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets',
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015','stage-0'],
                    },
                }],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'dist'),
        ],
    },
    devServer: {
        port: 8008,
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        compress: true,
        publicPath: '/assets',
        historyApiFallback: {
            index: '/assets/index.html'
        },
        open: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/index.html',
            inject: 'body',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
    ],
};