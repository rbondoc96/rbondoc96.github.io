const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ],
            },{
                test: /\.(pdf|png|svg|jpg|gif|ico|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets",
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
            favicon: "public/favicon.ico",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "404.html",
            template: "public/404.html",
            favicon: "public/favicon.ico"
        }),        
    ],    
};