'use strict';

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    filename: 'xslet.datatype.min.js',
    library: ['xslet', 'datatype'],
    libraryTarget: 'var',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
};
