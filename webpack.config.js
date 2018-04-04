var webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './frontend/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  mode: 'development',

  watch: true,
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?url=false!less-loader'
      }
    ]
  }
};
