import baseConfig from './webpack.config.base';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsWebpackPlugin from 'assets-webpack-plugin';

function wrapStyleLoadersInExtractTextPlugin(loaders) {
  let newLoaders = [ ];
  for (let i = 0; i < loaders.length; i+=1 ) {
    let loader = loaders[i];
    let newLoader = {
      ...loader,
    };

    if (loader.use && loader.use.indexOf('style-loader') !== -1) {
        newLoaders.use = ExtractTextPlugin({
          fallback: 'style-loader',
          use: [...loader.use]
        });
    }

    newLoaders.push(newLoader);
  }

  return newLoaders;
}

export default {
    ...baseConfig,

    output: {
        ...baseConfig.output,
        filename: '[hash]_bundle.js'
    },

    module: {
        ...baseConfig.module,
        //wrap style loaders with extract text plugin
        loaders: wrapStyleLoadersInExtractTextPlugin(baseConfig.module.loaders),
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new AssetsWebpackPlugin({filename: 'dist/assets.json'})
    ]
};
