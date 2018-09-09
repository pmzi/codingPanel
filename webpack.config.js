const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/js/views/index.js',
    output: {
        filename: '../src/js/dist/index.js'
    },
    devtool:'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      }
};