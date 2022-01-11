const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    entry: {
        app: path.join(__dirname, './', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './', 'dist'),
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'build/tpl/index.html'
        })
    ]
}