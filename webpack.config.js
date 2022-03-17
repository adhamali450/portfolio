const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development', //production
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
        filename: 'portfolio.[contenthash].js'
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true, // Open browser
        hot: true, // hot reload
    },
    //loaders
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },
        ]
    },

    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'portfolio.[contenthash].css',
            linkType: "text/css",
        }),
    ]
}