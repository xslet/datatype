'use strict';

const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
  },
};
