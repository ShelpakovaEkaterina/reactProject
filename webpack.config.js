const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackConfig = require('html-webpack-plugin');

module.exports = () => ({
    entry: ['./src/core/main.js', './src/core/main.scss'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'souce-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,

                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourseMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new MiniCssExtractPlugin({ filename: 'bundle.css' }),
        new HtmlWebpackConfig({
            template: './src/core/index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
                html5: true,
                removeComments: true,
                removeEmptyAttributes: true
            }
        })
    ]
});
