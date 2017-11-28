const path = require('path');


const options = {
  entry: {
    index: path.resolve(__dirname, '..', 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: 'feverdream',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  target: 'node',
  devtool: 'source-map',
  node: {
    __dirname: false,
  }
};


module.exports = options;