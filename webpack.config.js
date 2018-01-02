module.exports = {
    entry: './public/javascripts/dist/index.js',
    watch: true,
    output: {
      filename: './public/bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015' ]
        }
      }, {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader?-url'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?-url'
      },
      { test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
         loader: 'url-loader?limit=100000' }]
    }
  };
  