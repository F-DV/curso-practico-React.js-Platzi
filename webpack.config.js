const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')// PAra saber la ruta de trabajo

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx'],
    }, 
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ]
}
