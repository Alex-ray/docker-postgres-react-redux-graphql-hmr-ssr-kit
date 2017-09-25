import base_config from './webpack.config.base';
import webpack from 'webpack';

export default {
    ...base_config,
    output: {
        ...base_config.output,
        publicPath: 'http://localhost:3000' + base_config.output.publicPath,
        filename: '[name].js'
    },
    entry: {
      ...base_config.entry,
      dev: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        base_config.entry.bundle
      ],
    },
    plugins: [
        ...base_config.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env': JSON.stringify('development')
        })
    ]
};
