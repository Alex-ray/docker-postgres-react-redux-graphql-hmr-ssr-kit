import path from 'path';
import webpack from 'webpack';

// Plugins
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import postcssNext from 'postcss-cssnext';

const root = process.cwd();
const SRC = root;
const BUILD_DIR = path.join(root, 'dist');
const ENTRY_FILE = path.join(root, 'index.js');

// Cache vendor && client javascript on CDN...
const vendor = [
  "classnames",
  "history",
  "immutable",
  "prop-types",
  "react",
  "react-addons-css-transition-group",
  "react-dom",
  "react-redux",
  "react-router",
  "react-router-dom",
  "react-router-redux",
  "react-tap-event-plugin",
  "redux",
  "redux-actions",
  "redux-observable",
  "reselect",
  "rxjs",
  "systemjs",
  "whatwg-fetch"
];

export default {
  entry : {
    vendor,
    bundle: [
      'babel-polyfill/dist/polyfill.js', 'whatwg-fetch', ENTRY_FILE
    ],
    // These need to go in a seperate server build.
    // store: path.join(root, 'universal', 'redux', 'createStore.js'),
    // prerender: path.join(root, 'universal', 'routes', 'Routes.js'),

  },
  output : {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: BUILD_DIR,
    publicPath: '/static/',
  },
  resolve : {
    extensions: ['.js'],
    modules: [
      SRC, 'node_modules'
    ],
    unsafeCache: true
  },
  plugins : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.NormalModuleReplacementPlugin(/\.\.\/routes\/static/, '../routes/async'),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor', 'manifest'
      ],
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    /* minChunkSize should be 50000 for production apps
  * 10 is for this example */
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      comments: /(?:)/
    }),
    new AssetsPlugin({path: BUILD_DIR, filename: 'assets.json'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify('')
    })
  ],

  module : {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ['babel-loader','eslint-loader'],
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }, {
              loader: 'postcss-loader',
              options: { plugins: () => ([postcssNext()]) }
            }
          ]
        })
      }, {
        test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
        use: ['file-loader?name=[path][name].[ext]?[hash]']
      }
    ]
  }
};
