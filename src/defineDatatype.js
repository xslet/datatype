/*
 * Copyright (C) 2016 xslet project.
 * This software is released under the MIT license.
 */

'use strict';

var Rect = require('./lib/Rect');

/**
 * Defines `xslet.datatype` namespace.
 *
 * @private
 * @param xslet {object} - `xslet` namespace object.
 */
function defineDatatype(xslet) {
  /**
   * Is the namespace to define useful data types.
   *
   * @namespace xslet.datatype
   */
  Object.defineProperty(xslet, 'datatype', {
    enumerable: true,
    value: {},
  });

  Object.defineProperty(xslet.datatype, 'Rect', {
    enumerable: true,
    value: Rect,
  });
}

module.exports = defineDatatype;
