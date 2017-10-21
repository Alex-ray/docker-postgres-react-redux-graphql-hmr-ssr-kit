import path from 'path';

import webpack from 'webpack';

const root = process.cwd();
const SRC = root;
const BUILD_DIR = path.join(root, 'dist');
const ENTRY_FILE = path.join(root, 'index.js');
const UNIVERSAL_SRC = path.join(root, 'univeral');

const clientInclude = [SRC, UNIVERSAL_SRC];

export default {
  devtool : 'eval',
  entry : {
    bundle: ['babel-polyfill/dist/polyfill.js', 'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server', ENTRY_FILE]
  },
  output : {
    path: BUILD_DIR,
    publicPath: 'http://localhost:3000/static/',
    filename: '[name].js'
  },
  plugins : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      '__DEV__': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_URL': JSON.stringify('localhost:8000')
    })
  ],
  resolve : {
    extensions: ['.js'],
    modules: [SRC, 'node_modules']
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ['babel-loader','eslint-loader'],
        use: ['babel-loader']
      },

      {
        test: /\.css$/,
        include: clientInclude,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
          options: {
            root: SRC,
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }},
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer({browsers: ['last 2 versions']})]
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
  }
};
