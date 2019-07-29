const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: { loader: 'url-loader' }
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
