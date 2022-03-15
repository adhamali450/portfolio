const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development', //production
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        // index: path.resolve(__dirname, 'src/template.html'),
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
        filename: 'portfolio.[hash].js'
    },

    devtool: 'inline-source-map',
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
                test: /\.(sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
    ]
}