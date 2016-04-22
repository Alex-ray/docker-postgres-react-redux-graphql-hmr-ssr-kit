import base_config from './webpack.config.base';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsWebpackPlugin from 'assets-webpack-plugin';

export default {
    ...base_config,

    output: {
        ...base_config.output,
        filename: '[hash]_bundle.js'
    },

    module: {
        ...base_config.module,

        //wrap style loaders with extract text plugin
        loaders: base_config.module.loaders.map(function(conf) {
            return {
                ...conf,
                loader: conf.loader && conf.loader.includes('style!') ? ExtractTextPlugin.extract('style', conf.loader.replace('style!', '')) : conf.loader
            }
        })
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
        new ExtractTextPlugin("[hash]_styles.css"),
        new AssetsWebpackPlugin({filename: 'dist/assets.json'})
    ]
};