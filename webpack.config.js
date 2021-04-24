const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }, 
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist',
          name: '[name].[ext]?[hash]',
          limit: 20000, //20kb 이상이면 file-loader 2kb 이하이면 url-loader
        }
      }
    ]
  }
}
