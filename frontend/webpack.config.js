const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackConfig = require('html-webpack-plugin');

module.exports = () => ({
    entry: ['@babel/polyfill', './src/core/main.js', './src/core/main.scss'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-export-default-from'
                        ]
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
    ],
    devServer: {
        historyApiFallback: true,
        proxy: { '/api': 'http://localhost:3000/' }
    }
});
