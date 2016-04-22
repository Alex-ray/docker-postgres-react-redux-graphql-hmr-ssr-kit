import webpack from 'webpack';

export default {
    entry: [
        '/frontend/src/js/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: '/frontend/dist/',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel!eslint',
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    target: 'web',
    plugins: []
};