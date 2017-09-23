import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'dist');

export default {
    entry: {
        bundle: path.join(src, 'js', 'index.js'),
        store: path.join(src, 'js', 'store.js')
    },
    devtool: 'source-map',
    output: {
        path: build,
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
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    target: 'web',
    plugins: []
};
