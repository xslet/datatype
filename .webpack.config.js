'use strict';

const webpack = require('webpack')

module.exports = {
  output: {
    filename: 'xslet.datatype.min.js',
    library: ['xslet', 'datatype'],
    libraryTarget: 'var',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    })
  ],
};
