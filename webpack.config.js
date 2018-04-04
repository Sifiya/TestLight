const path = require('path');

module.exports = {
  entry: './frontend/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },

  watch: true,
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
};
