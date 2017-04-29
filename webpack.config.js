const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'react', 'react-dom'
]

module.exports = {
  entry: {
    bundle: './client/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['css-loader'],
        test: /\.css$/
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ]
};
