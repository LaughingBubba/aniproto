const path = require('path')
const express = require('express')
const app = express()
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

app.use(webpackMiddleware(webpack(webpackConfig)))

app.listen(4040, () => {
  console.log('Listening');
})
