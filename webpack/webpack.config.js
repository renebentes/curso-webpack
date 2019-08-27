const path = require('path');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist')
};

module.exports = {
  entry: {
    index1: `${PATHS.src / index.js}`,
    index2: `${PATHS.src / index2.js}`
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: PATHS.build
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
