'use strict';

const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: 'xslet.datatype.min.js',
    library: ['xslet', 'datatype'],
    libraryTarget: 'var',
  },
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
