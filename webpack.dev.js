const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        port: 9000,
    },    
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "./build"),
        publicPath: ""  
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [ {
                        loader: MiniCssExtractPlugin.loader,
                    }, {
                        loader: "css-loader",
                    }, {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [
                                    require("precss"),
                                    require("autoprefixer")
                                ]
                            }
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(),
    ],
})