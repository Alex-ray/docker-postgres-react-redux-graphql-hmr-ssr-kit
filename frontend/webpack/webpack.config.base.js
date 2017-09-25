import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'dist');

// Cache vendor && client javascript on CDN...
const vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux'
];

export default {
    entry: {
        bundle: path.join(src, 'js', 'index.js'),
        store: path.join(root, 'universal', 'redux', 'createStore.js'),
        prerender: path.join(root, 'universal', 'routes', 'Routes.js'),
        vendor,
    },
    devtool: 'source-map',
    output: {
        path: build,
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // use: ['babel-loader','eslint-loader'],
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [ autoprefixer({ browsers: ['last 2 versions'] }) ]
                        }
                    }
                  }
                ]
            },
            {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                use: ['file-loader?name=[path][name].[ext]?[hash]']
            }
        ]
    },
    target: 'web',
    plugins: []
};
