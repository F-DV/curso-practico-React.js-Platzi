const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')// PAra saber la ruta de trabajo
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
        filename: 'bundle.js',
        publicPath: '/',
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
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    
                    "style-loader",
                    "css-loader",
                    "sass-loader",             
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
            
        }),
    ], 
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
            },
            historyApiFallback:true,
            compress: true,
            port: 3000,
        
    }
}
